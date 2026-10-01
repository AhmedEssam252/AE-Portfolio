import subprocess
import time
import json
import urllib.request
import os

PORT = 9277
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DATA = rf"C:\Users\micro\AppData\Local\Temp\edge_test_{int(time.time())}"

cmd = [
    EDGE_PATH,
    "--headless=new",
    f"--remote-debugging-port={PORT}",
    f"--user-data-dir={USER_DATA}",
    "--no-first-run",
    "--no-default-browser-check",
    "http://127.0.0.1:8088/index.html"
]

print("Launching Edge...")
proc = subprocess.Popen(cmd)
time.sleep(2.5)

try:
    print(f"Querying http://127.0.0.1:{PORT}/json ...")
    with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json", timeout=5) as resp:
        tabs = json.loads(resp.read().decode())
    print("Tabs received:", len(tabs))
    for t in tabs:
        print("  Tab:", t.get("title"), t.get("url"), t.get("webSocketDebuggerUrl"))
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
    print("Terminated Edge.")
