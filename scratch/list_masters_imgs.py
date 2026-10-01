import os

p = r"E:\source\repos\portifolio\imgs\Masters Globel"
if os.path.exists(p):
    print("Files in", p)
    for f in os.listdir(p):
        fp = os.path.join(p, f)
        print(f"  {f} ({os.path.getsize(fp)} bytes)")
else:
    print("Directory does NOT exist:", p)
