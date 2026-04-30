# Dicee
Un jeu de dés simple, créé dans le cadre d'une formation en utilisant du HTML, CSS et JavaScript.

Le fonctionnement initial est que nous avons un dé pour chacun des deux joueurs, qu'a chaque rafraichissement de la page la valeur des dés change et que le titre vient nous indiquer le joueur ayant eu le plus gros résultat.

J'ai décider de reprendre plus tard ce projet pour modifier son fonctionnement et son apparence :

- Ajout d'un bouton pour faire le lancer de dés à la place que ceux ci soient lancés à chaque rechargement de page. Cela semblait moins laborieux pour l'utilisateur.

- Remplacement des images des dés pour leur donner un aspect un peu plus "moderne" (les images ajoutées et présentent actuellement ont été générées par IA).

- Ajout d'une animation sur les dés pour l'effet visuel d'un lancé de dés.
  
- Ajout d'une option de personnalisation de noms des joueurs. Initialement nous avions simplement "Player 1" et "Player 2", j'ai donc ajouter un nouveau bouton afin de pouvoir entrer le nom des joueurs pour personnaliser un peu le jeu.
Au début ce bouton ouvrait deux fenêtres de prompt du navigateur dans lesquels on entrait le nom des joueurs. Cela fonctionnait bien mais manquait de personnalisation.
Pour permettre la personnalisation de cette fenêtre, je suis parti sur un formulaire par le biais de la balise <dialog> reliée au bouton créé précédemment. J'ai ensuite programmé cette fenêtre pour que les noms entrés changent ceux écrit juste au dessus des dés et que les champs <input> soient réinitialisés lors d'une nouvelle ouverture de cette fenêtre.

Idées d'ajouts futurs :
 - Ajout d'un écran de score et d'un bouton de reset des scores
 - Option de sélection du nombre de dés
