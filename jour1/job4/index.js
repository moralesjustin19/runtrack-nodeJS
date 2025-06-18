const fs = require('fs');
const path = require('path');

// Affichage du titre
console.log("Contenu du répertoire courant :");

// Récupérer le dossier parent de job4 (soit jour1)
const parentDir = path.join(__dirname, '..');

// Lire le contenu du dossier parent
fs.readdir(parentDir, (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du dossier :", err);
        return;
    }

    files.forEach(file => {
        const fullPath = path.join(parentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            console.log(file);
        }
    });
});
