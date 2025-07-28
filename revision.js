let tableau = [5, 2, 9, 1, 5, 6];



// .reduce permet de réduire un tableau à une seule valeur (utilise pour somme, moyenne, etc.)
let sommeTableau = tableau.reduce((accumulator, valeurActuel) => {
    return accumulator + valeurActuel;
});
console.log("La somme du tableau est : " + sommeTableau);


// .map retourne un nouveau tableau en appliquant un calcul, cela modifie toutes les valeurs du tableau en fonction du calcul voulu
let tableauDouble = tableau.map((valeurActuel) => {
    return valeurActuel * 2;
});
console.log("Le tableau doublé est : " + tableauDouble);


// .filter permet de filtrer les valeurs d'un tableau en fonction d'une condition
let tableauFiltre = tableau.filter((valeurActuel) => {
    return valeurActuel > 5;
});
console.log("Le tableau filtré est : " + tableauFiltre);

// .forEach permet d'appliquer une fonction à chaque valeur du tableau
tableau.forEach((valeurActuel) => {
    console.log("La valeur actuelle est : " + valeurActuel);
});

// .includes permet de vérifier si une valeur est présente dans le tableau
let valeurPresent = tableau.includes(5);
console.log(valeurPresent);

// .indexOf permet de trouver l'index d'une valeur dans le tableau
let indexValeur = tableau.indexOf(5);
console.log("L'index de la valeur 5 est : " + indexValeur);

// .slice permet de créer un nouveau tableau à partir d'une partie du tableau d'origine
console.log("Le tableau d'origine est : " + tableau);
let portionTableau = tableau.slice(0, 4);
console.log("La portion du tableau est : " + portionTableau);

// .splice permet de supprimer ou d'ajouter des éléments dans le tableau
console.log("Le tableau d'origine est : " + tableau);
tableau.splice(0, 2); // Supprime 2 éléments à partir de l'index 0
console.log("Le tableau après splice est : " + tableau);
tableau.splice(0, 0, 10); // Ajoute 10 à l'index 0
tableau.splice(1, 0, 20); // Ajoute 20 à l'index 1
tableau.splice(2, 0, 30); // Ajoute 30 à l'index 2
console.log("Le tableau après splice est : " + tableau);

// ça c'est un objet
const product = {
    name: "Table",
    price: 500,
    brand: "habitat",
}
console.log(product);

// ça c'est un map
// Map est une collection d'éléments où chaque élément est stocké sous forme de paire clé-valeur
const maMap = new Map();
maMap.set("name", product.name);
maMap.set("price", product.price);
maMap.set("brand", product.brand);
console.log(maMap);

// declaration d'une map
// enfait c'est des tableaux associatifs
const autreMap = new Map([
    ["name", "Table"],
    ["price", 500],
    ["brand", "habitat"],
]);

// try et catch (finally), permet de gérer les erreurs, de les anticiper et informer l'utilisateur
function division(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division par zéro");
        }
        return a / b;
    } catch (error) {
        console.error("Erreur : " + error.message);
    } finally {
        console.log("Fin de la fonction division");
    }
}
console.log(division(10, 0));
// console.log(division(10, 2)); // Affiche 5

// les promesses avec resolve et reject
// une promesse est un objet qui représente la valeur d'une opération asynchrone
// ça sert surtout lorsqu'on attend une réponse mais qu'on ne sait pas quand elle va arriver
const maPromesse = new Promise((resolve, reject) => {
    const reussi = true; // Simule le succès ou l'échec de l'opération
    if (reussi) {
        resolve("Opération réussie !");
    } else {
        reject("Opération échouée !");
    }
});
maPromesse
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Fin de la promesse");
    });
    
// async et await
// async permet de déclarer une fonction asynchrone
// await permet d'attendre la résolution d'une promesse avant de continuer l'exécution du code
async function maFonctionAsynchrone() {
    try {
        const resultat = await maPromesse; // Attendre la résolution de la promesse
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
};
console.log("Avant d'appeler la fonction asynchrone");
maFonctionAsynchrone();
console.log("fin de la fonction asynchrone");

//fetch
// permet d'aller chercher des données sur un serveur
// fetch est une fonction asynchrone qui retourne une promesse
// elle est utilisée pour faire des requêtes HTTP

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur réseau : " + response.status);
        }
        return response.json(); // Convertir la réponse en JSON
    })
    .then((data) => {
        console.log(data); // Afficher les données récupérées
    })
    .catch((error) => {
        console.error("Erreur : " + error.message);
    })
    .finally(() => {
        console.log("Fin de la requête fetch");
    });

// GET, POST, PUT, DELETE
// CRUD : Create, Read, Update, Delete
// GET : Récupérer des données
// POST : Envoyer des données
// PUT : Mettre à jour des données
// DELETE : Supprimer des données

// Exemple de requête POST
// Envoi de données au serveur
async function sendData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1,
            }),
        });
        if (!response.ok) {
            throw new Error("Erreur réseau : " + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erreur : " + error.message);
    }
}
sendData();

// Exemple de requête GET
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Erreur réseau : " + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erreur : " + error.message);
    }
}
getData();