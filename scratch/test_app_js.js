const fs = require('fs');

// Create mock DOM environment
const dom = {
  getElementById: (id) => ({
    addEventListener: () => {},
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    style: {},
    appendChild: () => {},
    innerHTML: '',
    value: '',
    focus: () => {}
  }),
  querySelectorAll: () => [],
  querySelector: () => null,
  createElement: (tag) => ({
    className: '',
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    dataset: {},
    style: {},
    appendChild: () => {},
    addEventListener: () => {},
    innerHTML: ''
  }),
  documentElement: { setAttribute: () => {}, dir: 'ltr', lang: 'ar' },
  body: { classList: { add: () => {}, remove: () => {}, contains: () => false } },
  addEventListener: () => {}
};

global.window = {
  addEventListener: () => {},
  innerWidth: 1200,
  innerHeight: 800,
  localStorage: { getItem: () => null, setItem: () => {} },
  location: { reload: () => {} }
};
global.document = dom;
global.localStorage = global.window.localStorage;

try {
  const code = fs.readFileSync('app.js', 'utf8');
  eval(code);
  console.log("SUCCESS! app.js loaded with 0 errors.");
  console.log("PROJECTS count:", PROJECTS.length);
  PROJECTS.forEach((p, i) => console.log(`Project ${i+1}: ${p.id} (${p.category})`));
} catch (err) {
  console.error("ERROR running app.js:", err);
}
