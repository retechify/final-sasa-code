const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove the static watercolor gradients that were moved to layout
  const newContent = content.replace(
    /\{\/\*\s*BACKGROUND WASHES\s*\*\/\}\s*<div className="watercolor-gradient absolute[^>]+><\/div>\s*<div className="watercolor-gradient absolute[^>]+><\/div>/g,
    ''
  );
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Cleaned ${file}`);
  }
}
