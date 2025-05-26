const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, 'cypress', 'videos');
const outputFile = path.join(__dirname, 'cypress', 'reports', 'video-report.html');

let html = `
<!DOCTYPE html>
<html>
<head>
  <title>Cypress Test Videos</title>
</head>
<body>
  <h1>Cypress Videos</h1>
  <ul>
`;

fs.readdirSync(videoDir).forEach(file => {
  if (file.endsWith('.mp4')) {
    html += `<li><a href="../videos/${file}">${file}</a></li>\n`;
  }
});

html += `</ul></body></html>`;
fs.writeFileSync(outputFile, html);
console.log('Video report generated at:', outputFile);