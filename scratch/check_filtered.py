with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
filt_m = re.search(r'function getFilteredProjects\(\)\s*\{([\s\S]*?)\}', text)
if filt_m:
    print('getFilteredProjects:\n', filt_m.group(0))

shelf_m = re.search(r'function renderBookshelf\(\)\s*\{([\s\S]*?)(?=\nfunction|\nconst|\nlet)', text)
if shelf_m:
    # find how covers are rendered
    covers = [l for l in shelf_m.group(0).split('\n') if 'masters' in l or 'alf' in l or 'bmo' in l or 'wasalna' in l or 'moon' in l]
    print('\nMentions in renderBookshelf:')
    for l in covers:
        print('  ', l.strip())
