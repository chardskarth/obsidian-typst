const fs = require('fs');
const filePath = 'pkg/obsidian_typst.js';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');
lines[322] = 'if (module.constructor.name === "Response" || (typeof Response === "function" && module instanceof Response)) {';
fs.writeFileSync(filePath, lines.join('\n'), 'utf8');

