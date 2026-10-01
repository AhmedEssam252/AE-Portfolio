with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'id:' in l and '{' in lines[max(0, i-2):i+1]:
        pass
    if 'category:' in l:
        print(f"Line {i+1}: {lines[i-1].strip()} | {l.strip()}")
