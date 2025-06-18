const fs = require('fs');

// Lecture du fichier "data.txt" de manière asynchrone
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }

  console.log("Contenu du fichier :");
  console.log(data);
});
