import urllib.request
import re
import sys

try:
    with urllib.request.urlopen('http://127.0.0.1:8088/index.html', timeout=2) as r:
        print('HTTP 8088 status:', r.status)
except Exception as e:
    print('HTTP 8088 error:', e)

with open('app.js', 'r', encoding='utf-8') as f:
    c = f.read()

matches = re.findall(r'id:\s*[\'"]([a-zA-Z0-9_-]+)[\'"]', c)
print('Project IDs:', matches)
print('Masters Global present in app.js:', 'masters-global' in c)

with open('index.html', 'r', encoding='utf-8') as f:
    h = f.read()

print('filter-masters-btn in index.html:', 'filter-masters-btn' in h)
print('Masters Global in index.html:', 'Masters Global' in h)
