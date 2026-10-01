import subprocess
import time
import json
import urllib.request
import urllib.parse
import base64
import os

PORT = 9225
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = r"C:\Users\micro\AppData\Local\Temp\edge_debug_mobile_final"

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
            # Set iPhone 14 Pro mobile emulation (390 x 844)
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 390,
                "height": 844,
                "deviceScaleFactor": 2,
                "mobile": True
            })

            await send("Page.navigate", {"url": "http://127.0.0.1:8080/index.html"})
            await asyncio.sleep(2)

            # Open the book
            res = await send("Runtime.evaluate", {
                "expression": """
                (function() {
                    const book = document.querySelector('.book-cover-3d');
                    if (book) book.click();
                    return { opened: true };
                })()
                """,
                "returnByValue": True
            })
            await asyncio.sleep(1)

            # Check overflow measurements
            overflow_info = await send("Runtime.evaluate", {
                "expression": """
                (function() {
                    return {
                        docScrollWidth: document.documentElement.scrollWidth,
                        docClientWidth: document.documentElement.clientWidth,
                        bodyScrollWidth: document.body.scrollWidth,
                        mainRowScrollWidth: document.querySelector('.flipbook-main-row') ? document.querySelector('.flipbook-main-row').scrollWidth : null,
                        mainRowClientWidth: document.querySelector('.flipbook-main-row') ? document.querySelector('.flipbook-main-row').clientWidth : null,
                        bookStageWidth: document.querySelector('.book-stage-container') ? document.querySelector('.book-stage-container').getBoundingClientRect().width : null,
                        editorialWidth: document.querySelector('.editorial-panel') ? document.querySelector('.editorial-panel').getBoundingClientRect().width : null,
                    };
                })()
                """,
                "returnByValue": True
            })
            print("Overflow info:", json.dumps(overflow_info.get("result", {}).get("value", {}), indent=2))

            # Screenshot 1: Book view
            ss1 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\mobile_view_book.png", "wb") as f:
                f.write(base64.b64decode(ss1["data"]))

            # Scroll down to editorial panel and screenshot 2
            await send("Runtime.evaluate", {
                "expression": """
                const ed = document.querySelector('.editorial-panel');
                if (ed) ed.scrollIntoView({ behavior: 'instant' });
                """
            })
            await asyncio.sleep(0.5)

            ss2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\mobile_view_editorial.png", "wb") as f:
                f.write(base64.b64decode(ss2["data"]))

            # Click fullscreen/tap to enlarge to open lightbox dialog
            await send("Runtime.evaluate", {
                "expression": """
                const tapZoom = document.getElementById('tap-zoom-badge') || document.getElementById('btn-fullscreen-preview');
                if (tapZoom) tapZoom.click();
                """
            })
            await asyncio.sleep(1)

            # Screenshot 3: Lightbox dialog default 1x view
            ss3 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\mobile_view_lightbox_1x.png", "wb") as f:
                f.write(base64.b64decode(ss3["data"]))

            # Click Zoom 2x
            await send("Runtime.evaluate", {
                "expression": """
                const zoomBtn = document.getElementById('lightbox-zoom-btn');
                if (zoomBtn) zoomBtn.click();
                """
            })
            await asyncio.sleep(0.8)

            # Screenshot 4: Lightbox dialog zoomed 2x view
            ss4 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\mobile_view_lightbox_2x.png", "wb") as f:
                f.write(base64.b64decode(ss4["data"]))

            print("All screenshots successfully captured!")

    asyncio.run(run())
finally:
    proc.terminate()
