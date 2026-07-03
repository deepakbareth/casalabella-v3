const fs = require('fs');

const htmlFile = "C:\\Users\\SHREE NAKODA\\.gemini\\antigravity-ide\\brain\\c9c68671-af3a-44dd-a346-34d357ef9f68\\.system_generated\\steps\\466\\content.md";
const outputFile = "src/vrbo_text.txt";

try {
  const content = fs.readFileSync(htmlFile, 'utf8');
  
  // Extract visible texts by stripping scripts, styles, and HTML tags
  const cleanText = content
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '\n')
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '\n')
    .replace(/<[^>]+>/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n/g, '\n')
    .trim();

  fs.writeFileSync(outputFile, cleanText, 'utf8');
  console.log("SUCCESS");
} catch (err) {
  console.error("Error parsing HTML:", err);
}
