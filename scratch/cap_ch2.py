import asyncio, json, urllib.request, websockets, base64

async def check():
    try:
        with urllib.request.urlopen('http://127.0.0.1:9240/json') as r:
            tabs = json.loads(r.read().decode())
        target = tabs[0]
        async with websockets.connect(target['webSocketDebuggerUrl']) as ws:
            msg_id = 1
            async def send(method, params=None):
                nonlocal msg_id
                m_id = msg_id
                msg_id += 1
                await ws.send(json.dumps({'id': m_id, 'method': method, 'params': params or {}}))
                while True:
                    res = json.loads(await ws.recv())
                    if res.get('id') == m_id:
                        return res.get('result', {})

            await send('Emulation.setDeviceMetricsOverride', {'width': 1400, 'height': 900, 'deviceScaleFactor': 1, 'mobile': False})
            await send('Runtime.evaluate', {'expression': 'document.querySelectorAll(".inside-role-tab")[1].click();'})
            await asyncio.sleep(1.0)
            ss = await send('Page.captureScreenshot', {'format': 'png'})
            with open(r'scratch\bmo_ch2_correct.png', 'wb') as f:
                f.write(base64.b64decode(ss['data']))
            print('Captured Chapter 2 successfully!')
    except Exception as e:
        print('Error:', e)

asyncio.run(check())
