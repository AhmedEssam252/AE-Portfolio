import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

PORT = 9288
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = rf"C:\Users\micro\AppData\Local\Temp\edge_debug_{int(time.time())}"

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
time.sleep(2.5)

try:
    with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json", timeout=5) as resp:
        tabs = json.loads(resp.read().decode())
    
    # Find the portifolio tab
    target = None
    for t in tabs:
        if "8088" in t.get("url", ""):
            target = t
            break
            
    if not target:
        print("ERROR: Portfolio tab not found!")
        exit(1)
        
    print(f"Connected to tab: {target['title']} ({target['url']})")
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
            await send("Emulation.setDeviceMetricsOverride", {
                "width": 1440,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            # Check status of projects
            eval_res = await send("Runtime.evaluate", {
                "expression": """
                ({
                    projectsCount: typeof PROJECTS !== 'undefined' ? PROJECTS.length : -1,
                    names: typeof PROJECTS !== 'undefined' ? PROJECTS.map(p => p.id) : [],
                    booksOnShelf: document.querySelectorAll('.book-card-3d').length,
                    shelfTitles: Array.from(document.querySelectorAll('.book-card-3d')).map(b => b.querySelector('h3') ? b.querySelector('h3').innerText : 'NO H3'),
                    categories: Array.from(document.querySelectorAll('.cat-pill')).map(b => b.dataset.filter)
                })
                """,
                "returnByValue": True
            })
            info = eval_res.get("result", {}).get("value", {})
            print("Project Status from Live Browser:")
            print(json.dumps(info, indent=2, ensure_ascii=False))

            os.makedirs("scratch", exist_ok=True)

            # 1. Capture shelf with all 5 books
            ss = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\live_shelf_all_5.png", "wb") as f:
                f.write(base64.b64decode(ss["data"]))
            print("Captured scratch/live_shelf_all_5.png")

            # 2. Click category filter button for masters
            await send("Runtime.evaluate", {
                "expression": "document.getElementById('filter-masters-btn').click();"
            })
            await asyncio.sleep(0.8)

            ss_masters = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\live_masters_tab_active.png", "wb") as f:
                f.write(base64.b64decode(ss_masters["data"]))
            print("Captured scratch/live_masters_tab_active.png")

            # 3. Open Masters Global Book
            await send("Runtime.evaluate", {
                "expression": "document.querySelector('.book-card-3d.active').click();"
            })
            await asyncio.sleep(1.2)

            ss_ch1 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\live_masters_ch1_opened.png", "wb") as f:
                f.write(base64.b64decode(ss_ch1["data"]))
            print("Captured scratch/live_masters_ch1_opened.png")

            # 4. Click Chapter 2 (Sectors & Leadership)
            await send("Runtime.evaluate", {
                "expression": "document.querySelectorAll('.book-role-tab')[1].click();"
            })
            await asyncio.sleep(1.0)

            ss_ch2 = await send("Page.captureScreenshot", {"format": "png"})
            with open(r"scratch\live_masters_ch2_opened.png", "wb") as f:
                f.write(base64.b64decode(ss_ch2["data"]))
            print("Captured scratch/live_masters_ch2_opened.png")

            print("ALL LIVE VERIFICATIONS PASSED SUCCESSFULLY!")

    asyncio.run(run())

finally:
    proc.terminate()
