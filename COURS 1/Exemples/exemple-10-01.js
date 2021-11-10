// Création d'une fonction qui prend deux données en arguments et qui retourne un tableau avec ces deux données
// Ici, nous indiquons des valeurs par défaut pour les arguments
var constructionTableau = function(elmt1=0,elmt2=0) {
    return [elmt1,elmt2];
};

var unTableau = constructionTableau(13,'montre');
var autreTableau = constructionTableau(5);
var troisiemeTableau = constructionTableau();

// Création d'une fonction pour ajouter deux indices à la fin d'un tableau
var ajoutTableau = function(tableauOrigine,ajoutUn,ajoutDeux) {
    var indice = 0;
    // Je parcours les différents indices du tableau pour trouver la valeur du premier indice libre. Cela veut dire que ce dernier nous donne undefined
    while(typeof tableauOrigine[indice] != 'undefined') {
        indice++;
    }
    tableauOrigine[indice] = ajoutUn;
    tableauOrigine[indice + 1] = ajoutDeux;
    return tableauOrigine;
};

var quatriemeTableau = ajoutTableau(['un',2,false],89,'autre');
var cinquiemeTableau = ajoutTableau(unTableau,19,74);

//Création d'une fonction pour assembler deux tableaux
var assemblageTableau = function(tableauUn,tableauDeux) {
    var indiceTableauUn = 0;
    // Je parcours les différents indices du tableauUn pour trouver la valeur du premier indice libre. Cela veut dire que ce dernier nous donne undefined
    while(typeof tableauUn[indiceTableauUn] != 'undefined') {
        indiceTableauUn++;
    }
    var indiceTableauDeux = 0;
    //Je parcours les différents indices du tableauDeux pour les ajouter au tableauUn en débutant au premier indice vide dont la valeur m'a été fournie par la boucle précédente
    while(typeof tableauDeux[indiceTableauDeux] != 'undefined') {
        tableauUn[indiceTableauUn] = tableauDeux[indiceTableauDeux];
        indiceTableauUn++;
        indiceTableauDeux++;
    }
    return tableauUn;
};

var sixiemeTableau = assemblageTableau([1,2,3],[14,15,16,17,18]);