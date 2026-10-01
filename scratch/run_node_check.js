const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

// Mock DOM
global.window = {
  addEventListener: () => {},
  innerWidth: 1440,
  innerHeight: 900,
  localStorage: { getItem: () => null, setItem: () => {} }
};
global.document = {
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
  createElement: () => ({
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

eval(code + `
console.log("PROJECTS LENGTH:", PROJECTS.length);
PROJECTS.forEach((p, i) => console.log(i + 1, p.id, p.category, p.code));
`);
