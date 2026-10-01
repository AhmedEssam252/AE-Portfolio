with open('app.js', 'r', encoding='utf-8') as f:
    code = f.read()

# find PROJECTS definition
idx = code.find('const PROJECTS = [')
end_idx = code.find('];\n\n// State Management')
print('Found PROJECTS:', idx, end_idx)

js_test = code[:end_idx+2] + '\nconsole.log("PROJECTS COUNT:", PROJECTS.length); PROJECTS.forEach((p, i) => console.log(i, p.id, p.category));'
with open('scratch/test_eval.js', 'w', encoding='utf-8') as f:
    f.write(js_test)
