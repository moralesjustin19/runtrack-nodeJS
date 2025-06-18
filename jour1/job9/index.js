const fs = require('fs');

// Nouveau contenu à écrire dans le fichier
const nouveauContenu = "Je manipule les fichiers avec un module node !";

// Écriture dans le fichier (remplace le contenu existant)
fs.writeFile('data.txt', nouveauContenu, 'utf8', (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture :", err);
    return;
  }
  console.log("Fichier mis à jour avec succès !");
});
