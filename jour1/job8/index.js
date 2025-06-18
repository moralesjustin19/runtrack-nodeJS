const fs = require('fs');

// Lire le contenu de data.txt en UTF-8
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }

  // Extraire une lettre sur deux
  let result = '';
  for (let i = 0; i < data.length; i += 2) {
    result += data[i];
  }

  // Afficher le résultat
  console.log("Lettre sur deux :", result);
});
