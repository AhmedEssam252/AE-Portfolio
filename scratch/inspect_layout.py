import asyncio
import json
import base64
import urllib.request
import subprocess
import time
import os

try:
    import websockets
except ImportError:
    subprocess.run(["pip", "install", "websockets"])
    import websockets

async def run():
    # Find page target
    req = urllib.request.urlopen("http://localhost:9222/json")
    targets = json.loads(req.read().decode())
    page_target = next(t for t in targets if t.get("type") == "page" and "localhost:8081" in t.get("url"))
    ws_url = page_target["webSocketDebuggerUrl"]

    async with websockets.connect(ws_url) as ws:
        msg_id = 1
        async def send(method, params=None):
            nonlocal msg_id
            m = {"id": msg_id, "method": method, "params": params or {}}
            msg_id += 1
            await ws.send(json.dumps(m))
            while True:
                res = json.loads(await ws.recv())
                if res.get("id") == m["id"]:
                    return res

        # Emulate mobile screen
        await send("Emulation.setDeviceMetricsOverride", {
            "width": 390,
            "height": 844,
            "deviceScaleFactor": 2,
            "mobile": True
        })

        # Wait for page to render
        await asyncio.sleep(1)

        # Open Moon Academy book
        open_res = await send("Runtime.evaluate", {
            "expression": "openFlipBook(PROJECTS[0]); 'opened'"
        })
        print("Open result:", open_res)

        await asyncio.sleep(1)

        # Find overflowing elements
        overflow_res = await send("Runtime.evaluate", {
            "expression": """
            (() => {
                const docWidth = window.innerWidth;
                const bad = [];
                const all = document.querySelectorAll('*');
                for (const el of all) {
                    if (el.offsetParent === null && el.tagName !== 'BODY' && el.tagName !== 'HTML') continue;
                    const r = el.getBoundingClientRect();
                    if (r.right > docWidth + 2) {
                        bad.push({
                            tag: el.tagName,
                            id: el.id,
                            className: el.className,
                            right: Math.round(r.right),
                            width: Math.round(r.width),
                            text: (el.innerText || '').substring(0, 30).trim()
                        });
                    }
                }
                return {
                    windowWidth: docWidth,
                    scrollWidth: document.documentElement.scrollWidth,
                    bodyScrollWidth: document.body.scrollWidth,
                    overflowingCount: bad.length,
                    bad: bad.slice(0, 25)
                };
            })()
            """,
            "returnByValue": True
        })
        print("Overflow Report:")
        print(json.dumps(overflow_res.get("result", {}).get("value"), indent=2))

        # Take screenshot of book
        ss1 = await send("Page.captureScreenshot", {"format": "png"})
        with open("scratch/mobile_book.png", "wb") as f:
            f.write(base64.b64decode(ss1["result"]["data"]))

        # Scroll to editorial panel
        await send("Runtime.evaluate", {
            "expression": "document.getElementById('editorial-panel').scrollIntoView({behavior: 'instant'})"
        })
        await asyncio.sleep(0.5)

        # Take screenshot of editorial panel
        ss2 = await send("Page.captureScreenshot", {"format": "png"})
        with open("scratch/mobile_editorial.png", "wb") as f:
            f.write(base64.b64decode(ss2["result"]["data"]))

        print("Screenshots saved to scratch/mobile_book.png and scratch/mobile_editorial.png")

if __name__ == "__main__":
    asyncio.run(run())
