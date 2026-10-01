const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

const trackChildren = [];
const dotsChildren = [];

global.window = {
  addEventListener: () => {},
  innerWidth: 1440,
  innerHeight: 900,
  localStorage: { getItem: () => null, setItem: () => {} }
};
global.document = {
  getElementById: (id) => {
    if (id === 'carousel-track') return { innerHTML: '', appendChild: (c) => trackChildren.push(c) };
    if (id === 'carousel-dots') return { innerHTML: '', appendChild: (c) => dotsChildren.push(c) };
    if (id === 'watermark-title') return { innerText: '', style: {} };
    if (id === 't-filter-all') return { innerText: '' };
    return {
      addEventListener: () => {},
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      style: {},
      appendChild: () => {},
      innerHTML: '',
      value: '',
      focus: () => {}
    };
  },
  querySelectorAll: () => [],
  querySelector: () => null,
  createElement: (tag) => ({
    tagName: tag,
    className: '',
    classList: { add: (c) => {}, remove: () => {}, contains: () => false },
    dataset: {},
    style: {},
    appendChild: () => {},
    addEventListener: () => {},
    setAttribute: () => {},
    innerHTML: ''
  }),
  documentElement: { setAttribute: () => {}, dir: 'ltr', lang: 'ar' },
  body: { classList: { add: () => {}, remove: () => {}, contains: () => false } },
  addEventListener: () => {}
};

eval(code + `
renderBookshelf();
console.log("RENDERED CARDS COUNT:", trackChildren.length);
trackChildren.forEach((c, i) => {
  console.log("Card " + (i + 1) + ": has masters?", c.innerHTML.includes("masters"));
});
`);
