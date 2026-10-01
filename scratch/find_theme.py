with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'theme' in l.lower() or 'logo_dark' in l or 'logo_white' in l:
        print(f"{i+1}: {l.strip()}")
