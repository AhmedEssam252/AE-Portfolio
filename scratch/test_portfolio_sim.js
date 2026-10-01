const fs = require('fs');

// Read index.html to ensure all IDs exist
const html = fs.readFileSync('index.html', 'utf8');

// Check all IDs required by elements in app.js
const appJs = fs.readFileSync('app.js', 'utf8');
const elemMatches = appJs.match(/document\.getElementById\("([^"]+)"\)/g) || [];
const ids = elemMatches.map(m => m.match(/document\.getElementById\("([^"]+)"\)/)[1]);

console.log('Total document.getElementById calls in app.js:', ids.length);
let missingIds = [];
ids.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    missingIds.push(id);
  }
});

if (missingIds.length > 0) {
  console.log('Missing IDs in index.html:', missingIds);
} else {
  console.log('ALL element IDs exist in index.html! Perfect match!');
}
