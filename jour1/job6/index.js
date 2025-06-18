const fs = require('fs');

// Lecture du fichier "data.txt" de manière synchrone
try {
  const contenu = fs.readFileSync('data.txt', 'utf8');
  console.log("Contenu du fichier :");
  console.log(contenu);
} catch (err) {
  console.error("Erreur lors de la lecture du fichier :", err);
}
