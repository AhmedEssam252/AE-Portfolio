import os
import re

with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

imgs = set(re.findall(r'imgs/[^"]+', text))
print(f'Total unique images in app.js: {len(imgs)}')

missing = []
for img in sorted(imgs):
    path = os.path.join(r'e:\source\repos\portifolio', img.replace('/', os.sep))
    if not os.path.exists(path):
        missing.append(img)
    else:
        size = os.path.getsize(path)
        # print(f'OK: {img} ({size} bytes)')

if not missing:
    print(f'SUCCESS: All {len(imgs)} images exist and are readable!')
else:
    print(f'FAIL: {len(missing)} images missing: {missing}')
