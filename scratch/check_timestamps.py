import os, time

p = r"E:\source\repos\portifolio\imgs\Masters Globel"
for f in os.listdir(p):
    fp = os.path.join(p, f)
    mtime = time.ctime(os.path.getmtime(fp))
    ctime = time.ctime(os.path.getctime(fp))
    print(f"{f}: size={os.path.getsize(fp)}, mtime={mtime}, ctime={ctime}")
