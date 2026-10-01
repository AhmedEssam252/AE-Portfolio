import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

PORT = 9240
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = rf"C:\Users\micro\AppData\Local\Temp\edge_debug_{int(time.time())}"

os.makedirs(USER_DATA, exist_ok=True)
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
                    res = json.loads(await ws.recv())
                    if res.get("id") == m_id:
                        return res.get("result", {})

            await send("Page.enable")
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 1400,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            await send("Page.navigate", {"url": "http://127.0.0.1:8088/index.html"})
            await asyncio.sleep(2.0)

            # Open BMO Book directly
            open_res = await send("Runtime.evaluate", {
                "expression": """
                (function() {
                    const bmo = PROJECTS.find(p => p.id === 'bmo');
                    openFlipBook(bmo);
                    return {
                        title: document.getElementById('panel-title') ? document.getElementById('panel-title').textContent : null,
                        techCount: document.querySelectorAll('.tech-tag').length,
                        imgSrc: document.getElementById('active-page-screenshot') ? document.getElementById('active-page-screenshot').src : null
                    };
                })()
                """,
                "returnByValue": True
            })
            print("Open BMO result:", json.dumps(open_res.get("result", {}).get("value", {}), indent=2))
            await asyncio.sleep(1.2)

            # Capture BMO flipbook Chapter 1
            ss1 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_open_ch1_verified.png", "wb") as f:
                f.write(base64.b64decode(ss1["data"]))

            # Click Chapter 2 (Parenting Dashboard)
            await send("Runtime.evaluate", {
                "expression": "document.querySelectorAll('.book-role-tab')[1].click();"
            })
            await asyncio.sleep(1.2)

            # Capture BMO flipbook Chapter 2
            ss2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_open_ch2_verified.png", "wb") as f:
                f.write(base64.b64decode(ss2["data"]))

            # Mobile view check (390 x 844)
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 390,
                "height": 844,
                "deviceScaleFactor": 2,
                "mobile": True
            })
            await asyncio.sleep(1.0)

            ss3 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_mobile_verified.png", "wb") as f:
                f.write(base64.b64decode(ss3["data"]))

            print("ALL BMO SCREENSHOTS SAVED SUCCESSFULLY!")

    asyncio.run(run())
finally:
    proc.terminate()
    try:
        proc.wait(timeout=2)
    except:
        proc.kill()
