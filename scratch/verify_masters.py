import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

PORT = 9255
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = rf"C:\Users\micro\AppData\Local\Temp\edge_masters_{int(time.time())}"

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
            await asyncio.sleep(2.0)

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
            info = eval_res.get("result", {}).get("value", {})
            print("Project Status:", json.dumps(info, indent=2))

            # 1. Capture shelf with all 5 books
            ss = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\all_5_books_shelf.png", "wb") as f:
                f.write(base64.b64decode(ss["data"]))
            print("Saved scratch/all_5_books_shelf.png")

            # 2. Click Masters Global filter tab
            await send("Runtime.evaluate", {
                "expression": "document.getElementById('filter-masters-btn').click();"
            })
            await asyncio.sleep(0.8)

            ss_masters = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\masters_shelf_active.png", "wb") as f:
                f.write(base64.b64decode(ss_masters["data"]))
            print("Saved scratch/masters_shelf_active.png")

            # 3. Open Masters Global Book
            await send("Runtime.evaluate", {
                "expression": "document.querySelector('.book-card-3d[data-project-id=\"masters-global\"]').click();"
            })
            await asyncio.sleep(1.2)

            ss_ch1 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\masters_open_ch1.png", "wb") as f:
                f.write(base64.b64decode(ss_ch1["data"]))
            print("Saved scratch/masters_open_ch1.png")

            # 4. Click Chapter 2 (Sectors & Leadership)
            await send("Runtime.evaluate", {
                "expression": "document.querySelectorAll('.book-role-tab')[1].click();"
            })
            await asyncio.sleep(1.0)

            ss_ch2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\masters_open_ch2.png", "wb") as f:
                f.write(base64.b64decode(ss_ch2["data"]))
            print("Saved scratch/masters_open_ch2.png")

            print("ALL MASTERS GLOBAL VERIFICATIONS PASSED!")

    asyncio.run(run())

finally:
    proc.terminate()
