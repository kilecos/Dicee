const modal = document.querySelector("#player-modal");  //Définition de la constante modal qui renvoit au formulaire

// On demande le nom des joueurs //

document.querySelector(".name").addEventListener("click", enterName);  // activation de la fonction par click sur le bouton

function enterName() {

    modal.showModal();  //ouvre la fenêtre du formulaire
}

modal.addEventListener("close", close);  //ferme la fenêtre du formulaire et récupération des données

function close() {

    if (modal.returnValue === "save") {  //défini ce qu'il se passe lorsque que l'on appui sur le bouton save
        let p1 = document.querySelector("#player1").value.trim() || "Player 1";  //Enregistrement et affichage du nom du joueur 1 si renseigné ou non. trim() permet d'éviter que le joueur ne mette que des espaces
        document.querySelector(".player1").innerHTML = p1;
        let p2 = document.querySelector("#player2").value.trim() || "Player 2";  //Enregistrement et affichage du nom du joueur 2 si renseigné ou non.
        document.querySelector(".player2").innerHTML = p2;
    }
    modal.querySelector("form").reset();  //Réinitialise la fenêtre afin qu'aucuns noms ne soient affichés à une réouverture de la fenêtre
}

// Programmation du lancement du jeu par click sur le bouton et fonctionnement du jeu //

document.querySelector(".roll").addEventListener("click", roll);  // activation de la fonction par click sur le bouton

function roll() {

    document.querySelectorAll("img").forEach(function(dice) {   //On active l'animation sur les dés lors du click sur le bouton Roll !
        dice.classList.add("shaking");
    });
    
    setTimeout(function() {  //On programme l'activation différée de l'affichage des résultat pour que cela arrive après l'animation

        document.querySelectorAll("img").forEach(function(dice) { //On désactive l'animation sur les dés
            dice.classList.remove("shaking");
        });

        const randomNumber1 = Math.floor(Math.random()*6)+1;  //On génère un nombre entre 1 et 6 pour les deux dés
        const randomNumber2 = Math.floor(Math.random()*6)+1;

        document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);   //On remplace les visuels et descriptions des dés selon les résultats
        document.querySelector(".img1").setAttribute("alt", `Dice showing ${randomNumber1}`);
        document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
        document.querySelector(".img2").setAttribute("alt", `Dice showing ${randomNumber2}`);

        const currentName1 = document.querySelector(".player1").innerHTML;  //On retrouve les noms des joueurs (entrés ou non)
        const currentName2 = document.querySelector(".player2").innerHTML;

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = `🚩 ${currentName1} Wins !`;  //On affiche un message personnalisé selon le résultat du lancé
        } else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = `${currentName2} Wins 🚩 !`;
        } else {
            document.querySelector("h1").innerHTML = "🚩 Draw 🚩 !";
        }
    }, 500); //La valeur du délai, ici 500ms
}

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("contextmenu", (e) => {e.preventDefault()});    // Fonction empêchant les utilisateurs de pouvoir faire un clic droit sur les images pour les récupérer
});
