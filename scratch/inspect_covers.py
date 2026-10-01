with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
covers = re.findall(r'case\s+[\'"]([^\'"]+)[\'"]:', text)
print('Cover switch cases:', covers)

shelf_m = re.findall(r'function renderBookshelf\s*\([^\)]*\)\s*\{([\s\S]*?)\n\}', text)
if shelf_m:
    print('renderBookshelf length:', len(shelf_m[0]))
    for line in shelf_m[0].split('\n')[:50]:
        print('  ', line)
else:
    print('renderBookshelf not found via regex')
