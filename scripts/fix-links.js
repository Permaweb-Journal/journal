import fs from "fs";
import path from "path";

const buildDir = "./public"; // Adjust this if needed

function updateLinks(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Fix incorrect `..html` cases
  content = content.replace(/href="\.\.html"/g, 'href="../index.html"'); 

  // Ensure `href=".."` stays as `href="../index.html"`
  content = content.replace(/href="\.\."(?!\/)/g, 'href="../index.html"');

  // Ensure `href="."` (current dir) stays `href="index.html"`
  content = content.replace(/href="\."(?!\/)/g, 'href="index.html"');

  // Append `.html` to internal links **only if missing**
  content = content.replace(/href="((?!https?:\/\/|#)[^"]+?)(?<!\.html|\.css|\.js)"/g, (match, href) => {
    return `href="${href}.html"`;
  });

  fs.writeFileSync(filePath, content, "utf8");
}

function processDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith(".html")) {
      updateLinks(fullPath);
    }
  });
}

processDirectory(buildDir);
console.log("Fixed incorrect links and prevented duplicate `.html`.");