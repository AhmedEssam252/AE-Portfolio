import os
from PIL import Image

p_dark = r"E:\source\repos\portifolio\imgs\Masters Globel\logo_dark.png"
p_white = r"E:\source\repos\portifolio\imgs\Masters Globel\logo_white.png"

im_dark = Image.open(p_dark)
im_white = Image.open(p_white)

print("Dark logo:", im_dark.size, im_dark.mode)
print("White logo:", im_white.size, im_white.mode)

# Check if they are identical bytes or different
with open(p_dark, "rb") as f1, open(p_white, "rb") as f2:
    b1 = f1.read()
    b2 = f2.read()
    print("Same bytes?:", b1 == b2)
