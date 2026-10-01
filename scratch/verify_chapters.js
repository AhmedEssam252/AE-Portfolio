const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// Find PROJECTS declaration
const startIndex = content.indexOf('const PROJECTS = [');
const endIndex = content.indexOf('// ============================================', startIndex);
const projectsCode = content.substring(startIndex, endIndex);

// Evaluate PROJECTS
const evalCode = projectsCode.replace('const PROJECTS', 'var PROJECTS') + '\nPROJECTS;';
const p = eval(evalCode);

console.log('Wasalna Chapters Count:', p[0].chapters.length);
p[0].chapters.forEach((ch, idx) => {
  console.log(`[${idx+1}] ID: ${ch.id} | Steps: ${ch.steps ? ch.steps.length : 0} | ComingSoon: ${Boolean(ch.isComingSoon)}`);
  console.log(`    AR Tab: ${ch.translations.ar.tabLabel} | Title: ${ch.translations.ar.roleTitle}`);
  console.log(`    EN Tab: ${ch.translations.en.tabLabel} | Title: ${ch.translations.en.roleTitle}`);
});
