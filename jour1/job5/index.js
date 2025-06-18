const path = require('path');

// Imaginons qu'on travaille avec ce fichier :
const filePath = path.join(__dirname, 'index.js');

// 1. Nom du fichier
const fileName = path.basename(filePath);
console.log("Nom du fichier :", fileName);

// 2. Extension du fichier
const extension = path.extname(filePath);
console.log("Extension du fichier :", extension);

// 3. Répertoire parent
const parentDirectory = path.dirname(filePath);
console.log("Répertoire parent :", parentDirectory);
