const fs = require("fs");
const path = require("path");

// Create the frontend-scaffold folder

const frontEndScaffoldFolder = "frontend-scaffold";
if (!fs.existsSync(frontEndScaffoldFolder)) {
  fs.mkdirSync(frontEndScaffoldFolder);
}

// The Html file
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Welcome</h1>
    <script src="./js/script.js"></script>
</body>
</html>
`;

const htmlPath = path.join(frontEndScaffoldFolder, "index.html");
fs.writeFileSync(htmlPath, htmlContent);

// The CSS FOLDER
const cssFolder = path.join(frontEndScaffoldFolder, "css");
if (!fs.existsSync(cssFolder)) {
  fs.mkdirSync(cssFolder);
}

const styleContent = `
h1 {
    text-align: center;
}
`;

const cssPath = path.join(cssFolder, "style.css");
fs.writeFileSync(cssPath, styleContent);

// Create the js folder and script.js file
const jsFolder = path.join(frontEndScaffoldFolder, "js");
if (!fs.existsSync(jsFolder)) {
  fs.mkdirSync(jsFolder);
}

const jsAlert = 'alert("Welcome");';
const jsPath = path.join(jsFolder, "script.js");
fs.writeFileSync(jsPath, jsAlert);

// Create the images folder
const imagesFolder = path.join(frontEndScaffoldFolder, "images");
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder);
}

if (fs.existsSync(cssFolder) && fs.existsSync(jsFolder)) {
  console.log("Frontend scaffold created successfully!");
}
