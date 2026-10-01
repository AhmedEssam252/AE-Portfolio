import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

PORT = 9235
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
time.sleep(1.8)

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
            await asyncio.sleep(1.5)

            # Check status of projects
            eval_res = await send("Runtime.evaluate", {
                "expression": """
                ({
                    projectsCount: PROJECTS.length,
                    names: PROJECTS.map(p => p.id),
                    categories: Array.from(document.querySelectorAll('.cat-pill')).map(b => b.dataset.filter),
                    booksOnShelf: document.querySelectorAll('.book-card-3d').length
                })
                """,
                "returnByValue": True
            })
            print("Status:", json.dumps(eval_res.get("result", {}).get("value", {}), indent=2))

            # Capture desktop shelf view
            ss = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_shelf_captured.png", "wb") as f:
                f.write(base64.b64decode(ss["data"]))

            # Click BMO filter button
            await send("Runtime.evaluate", {
                "expression": "document.getElementById('filter-bmo-btn').click();"
            })
            await asyncio.sleep(0.6)

            # Capture shelf with BMO active
            ss_bmo_active = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_shelf_active.png", "wb") as f:
                f.write(base64.b64decode(ss_bmo_active["data"]))

            # Open BMO Book
            await send("Runtime.evaluate", {
                "expression": "document.querySelector('.book-card-3d.active').click();"
            })
            await asyncio.sleep(1.0)

            # Capture BMO flipbook Chapter 1
            ss2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_open_ch1.png", "wb") as f:
                f.write(base64.b64decode(ss2["data"]))

            # Click Chapter 2 (Parenting Dashboard)
            await send("Runtime.evaluate", {
                "expression": "document.querySelectorAll('.book-role-tab')[1].click();"
            })
            await asyncio.sleep(1.0)

            # Capture BMO flipbook Chapter 2
            ss3 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_open_ch2.png", "wb") as f:
                f.write(base64.b64decode(ss3["data"]))

            # Test Mobile View (390 x 844)
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 390,
                "height": 844,
                "deviceScaleFactor": 2,
                "mobile": True
            })
            await asyncio.sleep(0.5)

            ss_mobile = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_mobile_book.png", "wb") as f:
                f.write(base64.b64decode(ss_mobile["data"]))

            print("SUCCESS! All BMO screenshots captured from port 8088.")

    asyncio.run(run())
finally:
    proc.terminate()
    try:
        proc.wait(timeout=2)
    except:
        proc.kill()
