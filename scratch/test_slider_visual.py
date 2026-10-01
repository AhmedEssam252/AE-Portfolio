import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

PORT = 9245
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = rf"C:\Users\micro\AppData\Local\Temp\edge_slider_test_{int(time.time())}"

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
                    res = json.loads(await ws.recv())
                    if res.get("id") == m_id:
                        return res.get("result", {})

            await send("Page.enable")
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 1440,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            await send("Page.navigate", {"url": "http://127.0.0.1:8088/index.html"})
            await asyncio.sleep(1.5)

            # 1. Capture initial nav view (3 tabs visible)
            ss1 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\nav_slide_0.png", "wb") as f:
                f.write(base64.b64decode(ss1["data"]))
            print("Captured scratch/nav_slide_0.png")

            # 2. Click next slider arrow 3 times to slide to the end (BMO, ALF, Masters)
            for i in range(1, 4):
                await send("Runtime.evaluate", {
                    "expression": "document.getElementById('cat-slider-next').click();"
                })
                await asyncio.sleep(0.5)

            await asyncio.sleep(0.5)
            ss2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\nav_slide_end.png", "wb") as f:
                f.write(base64.b64decode(ss2["data"]))
            print("Captured scratch/nav_slide_end.png")

            # 3. Check bounding boxes of ALF pill, its logo, and Masters Global logo
            bbox_info = await send("Runtime.evaluate", {
                "expression": """
                (() => {
                    const alfPill = document.getElementById('filter-alf-btn');
                    const alfLogo = alfPill.querySelector('.cat-pill-logo');
                    const mastersPill = document.getElementById('filter-masters-btn');
                    const mastersLogo = mastersPill.querySelector('.cat-pill-logo');

                    const pRect = alfPill.getBoundingClientRect();
                    const lRect = alfLogo.getBoundingClientRect();
                    const mRect = mastersPill.getBoundingClientRect();
                    const mlRect = mastersLogo.getBoundingClientRect();

                    return {
                        alfPill: { left: pRect.left, right: pRect.right, width: pRect.width },
                        alfLogo: { left: lRect.left, right: lRect.right, width: lRect.width },
                        alfLogoInside: lRect.left >= pRect.left && lRect.right <= pRect.right,
                        mastersPill: { left: mRect.left, right: mRect.right, width: mRect.width },
                        mastersLogo: { left: mlRect.left, right: mlRect.right, width: mlRect.width, naturalWidth: mastersLogo.naturalWidth },
                        mastersLogoInside: mlRect.left >= mRect.left && mlRect.right <= mRect.right
                    };
                })()
                """,
                "returnByValue": True
            })
            print("Bounding box verification:", json.dumps(bbox_info.get("result", {}).get("value", {}), indent=2))

            # 4. Switch to English and inspect English labels
            await send("Runtime.evaluate", {
                "expression": "document.getElementById('btn-lang-en').click();"
            })
            await asyncio.sleep(0.6)
            ss3 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\nav_slide_en.png", "wb") as f:
                f.write(base64.b64decode(ss3["data"]))
            print("Captured scratch/nav_slide_en.png")

            # Check English bounding boxes
            en_bbox_info = await send("Runtime.evaluate", {
                "expression": """
                (() => {
                    const alfPill = document.getElementById('filter-alf-btn');
                    const alfLogo = alfPill.querySelector('.cat-pill-logo');
                    const pRect = alfPill.getBoundingClientRect();
                    const lRect = alfLogo.getBoundingClientRect();
                    return {
                        alfPill: { left: pRect.left, right: pRect.right, width: pRect.width },
                        alfLogo: { left: lRect.left, right: lRect.right, width: lRect.width },
                        alfLogoInside: lRect.left >= pRect.left && lRect.right <= pRect.right
                    };
                })()
                """,
                "returnByValue": True
            })
            print("English Bounding Box verification:", json.dumps(en_bbox_info.get("result", {}).get("value", {}), indent=2))

    asyncio.run(run())

finally:
    proc.terminate()
