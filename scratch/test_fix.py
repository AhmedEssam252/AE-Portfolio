import asyncio
import json
import urllib.request
import websockets
import subprocess
import time
import base64

p = subprocess.Popen([
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    '--headless=new',
    '--remote-debugging-port=9222',
    '--window-size=390,844',
    'http://localhost:8081'
])
time.sleep(2)

async def check():
    req = urllib.request.urlopen('http://localhost:9222/json')
    targets = json.loads(req.read().decode())
    page = next(t for t in targets if t.get('type') == 'page' and 'localhost:8081' in t.get('url'))
    async with websockets.connect(page['webSocketDebuggerUrl']) as ws:
        msg_id = 1
        async def send(method, params=None):
            nonlocal msg_id
            m = {'id': msg_id, 'method': method, 'params': params or {}}
            msg_id += 1
            await ws.send(json.dumps(m))
            while True:
                res = json.loads(await ws.recv())
                if res.get('id') == m['id']:
                    return res

        await send('Emulation.setDeviceMetricsOverride', {
            'width': 390,
            'height': 844,
            'deviceScaleFactor': 2,
            'mobile': True
        })
        await asyncio.sleep(1)
        await send('Runtime.evaluate', {'expression': 'openFlipBook(PROJECTS[0])'})
        await asyncio.sleep(0.5)

        # Inject fix
        await send('Runtime.evaluate', {
            'expression': """
            (() => {
                const s = document.createElement('style');
                s.textContent = `
                    .flipbook-view {
                        width: 100% !important;
                        max-width: 100vw !important;
                        box-sizing: border-box !important;
                        overflow-x: hidden !important;
                        padding: 0.75rem 0.5rem 3rem !important;
                    }
                    .flipbook-main-row {
                        grid-template-columns: minmax(0, 1fr) !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        box-sizing: border-box !important;
                    }
                    .book-stage-container {
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        box-sizing: border-box !important;
                    }
                    .editorial-panel {
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        box-sizing: border-box !important;
                    }
                    .book-3d-rig,
                    .book-hardcover-opened,
                    .book-page-single,
                    .screenshot-canvas-wrapper,
                    .screenshot-frame {
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        box-sizing: border-box !important;
                    }
                `;
                document.head.appendChild(s);
            })()
            """
        })
        await asyncio.sleep(0.5)

        r = await send('Runtime.evaluate', {
            'expression': """
            JSON.stringify((() => {
                const els = [
                    'flipbook-view',
                    'flipbook-main-row',
                    'book-stage-container',
                    'active-book-rig',
                    'book-opened-element',
                    'page-right',
                    'screenshot-wrapper',
                    'active-page-screenshot',
                    'editorial-panel',
                    'panel-specs-strip'
                ];
                return els.map(id => {
                    const el = document.getElementById(id) || document.querySelector('.' + id);
                    if (!el) return { id, notFound: true };
                    const rect = el.getBoundingClientRect();
                    return {
                        id,
                        left: Math.round(rect.left),
                        right: Math.round(rect.right),
                        width: Math.round(rect.width)
                    };
                });
            })())
            """
        })
        print('Elements after fix:\n', json.dumps(json.loads(r['result']['result']['value']), indent=2))

        # Take screenshot of book
        ss1 = await send('Page.captureScreenshot', {'format': 'png'})
        with open(r'C:\Users\micro\.gemini\antigravity-ide\brain\92734751-98c1-43e6-8b7e-9a6806ccaad0\mobile_book_fixed.png', 'wb') as f:
            f.write(base64.b64decode(ss1['result']['data']))

        # Scroll to editorial
        await send('Runtime.evaluate', {
            'expression': 'document.getElementById("editorial-panel").scrollIntoView()'
        })
        await asyncio.sleep(0.5)
        ss2 = await send('Page.captureScreenshot', {'format': 'png'})
        with open(r'C:\Users\micro\.gemini\antigravity-ide\brain\92734751-98c1-43e6-8b7e-9a6806ccaad0\mobile_editorial_fixed.png', 'wb') as f:
            f.write(base64.b64decode(ss2['result']['data']))

try:
    asyncio.run(check())
finally:
    p.kill()
