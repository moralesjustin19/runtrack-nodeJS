const { URL } = require('url');

// URL d’origine
const originalURL = new URL("https://www.google.com?search=nodejs");

// 1. Récupérer le protocole
console.log("Protocole :", originalURL.protocol);

// 2. Récupérer le nom d'hôte
console.log("Nom d'hôte :", originalURL.hostname);

// 3. Récupérer les paramètres
const params = {};
originalURL.searchParams.forEach((value, key) => {
  params[key] = value;
});
console.log("Paramètres de l'URL :", params);

// 4. Modifier le nom d'hôte
originalURL.hostname = "www.laplateforme.io";
console.log("Nouvelle URL après modification du nom d'hôte :", originalURL.toString());

// 5. Ajouter un paramètre
originalURL.searchParams.append("lang", "fr");

// 6. Afficher la nouvelle URL complète
console.log("Nouvelle URL après ajout d'un paramètre :", originalURL.toString());
