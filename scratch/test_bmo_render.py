import subprocess
import time
import json
import urllib.request
import base64
import os

PORT = 9226
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = r"C:\Users\micro\AppData\Local\Temp\edge_debug_bmo_test"

os.makedirs(USER_DATA, exist_ok=True)
cmd = [
    EDGE_PATH,
    "--headless=new",
    f"--remote-debugging-port={PORT}",
    f"--user-data-dir={USER_DATA}",
    "--no-first-run",
    "--no-default-browser-check",
    "http://127.0.0.1:8080/index.html"
]

proc = subprocess.Popen(cmd)
time.sleep(2.5)

try:
    req = urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json")
    tabs = json.loads(req.read().decode())
    target = tabs[0]
    ws_url = target["webSocketDebuggerUrl"]

    import asyncio
    import websockets

    async def run():
        async with websockets.connect(ws_url) as ws:
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

            await send("Network.enable")
            await send("Page.enable")
            await send("Console.enable")

            # Emulate desktop view 1400x900
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 1400,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            await send("Page.navigate", {"url": "http://127.0.0.1:8080/index.html"})
            await asyncio.sleep(2)

            # Check projects loaded
            info = await send("Runtime.evaluate", {
                "expression": """
                (function() {
                    return {
                        projectCount: PROJECTS.length,
                        projectIds: PROJECTS.map(p => p.id),
                        cardsCount: document.querySelectorAll('.book-card-3d').length
                    };
                })()
                """,
                "returnByValue": True
            })
            print("Projects on shelf:", json.dumps(info.get("result", {}).get("value", {}), indent=2))

            # Screenshot of shelf with books
            ss_shelf = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_shelf.png", "wb") as f:
                f.write(base64.b64decode(ss_shelf["data"]))

            # Navigate to BMO book (index 2)
            await send("Runtime.evaluate", {
                "expression": """
                const bmoFilter = document.getElementById('filter-bmo-btn');
                if (bmoFilter) bmoFilter.click();
                """
            })
            await asyncio.sleep(1)

            # Screenshot after filtering BMO
            ss_bmo_shelf = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_shelf_active.png", "wb") as f:
                f.write(base64.b64decode(ss_bmo_shelf["data"]))

            # Open BMO flipbook
            await send("Runtime.evaluate", {
                "expression": """
                const activeCard = document.querySelector('.book-card-3d.active');
                if (activeCard) activeCard.click();
                """
            })
            await asyncio.sleep(1.5)

            # Screenshot of BMO open flipbook Chapter 1
            ss_bmo_ch1 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_flipbook_ch1.png", "wb") as f:
                f.write(base64.b64decode(ss_bmo_ch1["data"]))

            # Switch to Chapter 2 (Parenting Dashboard)
            await send("Runtime.evaluate", {
                "expression": """
                const tabs = document.querySelectorAll('.book-role-tab');
                if (tabs.length > 1) tabs[1].click();
                """
            })
            await asyncio.sleep(1)

            # Screenshot of BMO open flipbook Chapter 2
            ss_bmo_ch2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\bmo_flipbook_ch2.png", "wb") as f:
                f.write(base64.b64decode(ss_bmo_ch2["data"]))

            print("Screenshots taken successfully!")

    asyncio.run(run())
finally:
    proc.terminate()
