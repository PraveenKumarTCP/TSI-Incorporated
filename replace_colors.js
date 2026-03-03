const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function updateColor(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.css') && !filePath.endsWith('.ts')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/#1277b0/gi, '#1A80C3');
    newContent = newContent.replace(/#0e5c8a/gi, '#14659b'); // slightly darker versions too if necessary, or just rely on CSS
    newContent = newContent.replace(/#0e6393/gi, '#14659b');
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Updated', filePath);
    }
}

walkDir('/home/tcp/Documents/TCP/Projects/tsi-incorporated/app', updateColor);
