with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines[:120]):
    if 'id:' in l or 'const PROJECTS' in l or 'let currentFilter' in l or 'renderBookshelf' in l:
        print(f"{i+1}: {l.strip()}")
