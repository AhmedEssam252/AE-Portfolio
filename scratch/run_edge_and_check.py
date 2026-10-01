import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

PORT = 9266
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = rf"C:\Users\micro\AppData\Local\Temp\edge_debug_{int(time.time())}"

os.makedirs(USER_DATA, exist_ok=True)
os.makedirs("scratch", exist_ok=True)

cmd = [
    EDGE_PATH,
    "--headless=new",
    f"--remote-debugging-port={PORT}",
    f"--user-data-dir={USER_DATA}",
    "--no-first-run",
    "--no-default-browser-check",
    "http://127.0.0.1:8088/index.html"
]

proc = subprocess.Popen(cmd)
time.sleep(2.0)

try:
    with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json", timeout=5) as resp:
        tabs = json.loads(resp.read().decode())
    target = tabs[0]
    ws_url = target["webSocketDebuggerUrl"]

    async def run():
        async with websockets.connect(ws_url, open_timeout=5) as ws:
            msg_id = 1
            async def send(method, params=None):
                nonlocal msg_id
                m_id = msg_id
                msg_id += 1
                msg = {"id": m_id, "method": method}
                if params:
                    msg["params"] = params
                await ws.send(json.dumps(msg))
                while True:
                    raw = await ws.recv()
                    res = json.loads(raw)
                    if res.get("id") == m_id:
                        return res.get("result", {})

            await send("Page.enable")
            await send("Runtime.enable")
            await send("Log.enable")
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 1440,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            await send("Page.navigate", {"url": "http://127.0.0.1:8088/index.html"})
            await asyncio.sleep(2.0)

            # Evaluate state
            eval_res = await send("Runtime.evaluate", {
                "expression": """
                (() => {
                    const result = {
                        projectsCount: typeof PROJECTS !== 'undefined' ? PROJECTS.length : 'UNDEFINED',
                        projectIds: typeof PROJECTS !== 'undefined' ? PROJECTS.map(p => p.id) : [],
                        activeIdx: typeof state !== 'undefined' ? state.activeProjectIndex : 'UNDEFINED',
                        currentCat: typeof state !== 'undefined' ? state.currentCategory : 'UNDEFINED',
                        booksRendered: document.querySelectorAll('.book-card-3d').length,
                        categoriesRendered: Array.from(document.querySelectorAll('.cat-pill')).map(p => ({
                            id: p.id,
                            filter: p.dataset.filter,
                            text: p.innerText.trim(),
                            width: p.offsetWidth,
                            height: p.offsetHeight
                        })),
                        booksHtmlInfo: Array.from(document.querySelectorAll('.book-card-3d')).map(b => ({
                            classes: b.className,
                            title: b.querySelector('h3') ? b.querySelector('h3').innerText : 'NO TITLE'
                        }))
                    };
                    return JSON.stringify(result);
                })()
                """,
                "returnByValue": True
            })

            val_str = eval_res.get("value", "{}")
            print("=== BROWSER STATE ===")
            print(val_str)

            # Capture initial screenshot
            ss = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\edge_shelf_initial.png", "wb") as f:
                f.write(base64.b64decode(ss["data"]))
            print("Saved scratch/edge_shelf_initial.png")

            # Click next arrow on bookshelf 4 times to cycle through all 5 books
            for i in range(1, 5):
                await send("Runtime.evaluate", {"expression": "document.getElementById('next-book').click()"})
                await asyncio.sleep(0.6)
                ss_i = await send("Page.captureScreenshot", {"format": "png"})
                with open(rf"scratch\edge_shelf_book_{i+1}.png", "wb") as f:
                    f.write(base64.b64decode(ss_i["data"]))
                print(f"Saved scratch/edge_shelf_book_{i+1}.png")

            # Click category filter for masters
            await send("Runtime.evaluate", {"expression": "document.getElementById('filter-masters-btn').click()"})
            await asyncio.sleep(0.8)
            ss_m = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\edge_masters_filter.png", "wb") as f:
                f.write(base64.b64decode(ss_m["data"]))
            print("Saved scratch/edge_masters_filter.png")

            # Click open the active book
            await send("Runtime.evaluate", {"expression": "document.querySelector('.book-card-3d.active').click()"})
            await asyncio.sleep(1.0)
            ss_open = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\edge_masters_opened.png", "wb") as f:
                f.write(base64.b64decode(ss_open["data"]))
            print("Saved scratch/edge_masters_opened.png")

    asyncio.run(run())
finally:
    proc.terminate()
