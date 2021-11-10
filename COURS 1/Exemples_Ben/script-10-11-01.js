// creation d'une fonction qui prend 2 données en argument et qui retourne un tableau de ces deux données

// Ici, nous indiquons des valeurs par défaut pour les arguments
var constructionTableau = function(elmt1=0, elmt2=0) {
    return[elmt1,elmt2];
};

var unTableau = constructionTableau(13,'montre');
var autreTableau = constructionTableau(5);
var troisiemeTableau = constructionTableau();

// Création d'une fonction pour ajouter deux indices à la fin d'un tableau

var ajoutTableau = function(tableauOrigine, ajoutUn, ajoutDeux) {
    var indice = 0;
// je parcours les differents indices du tableau pour trouver la valeur du 1er incice libre, cela veur dire que ce dernier nous donne undefined

    while (typeof tableauOrigine[indice] != 'undefined') {
        indice ++;
    }
    tableauOrigine[indice] = ajoutUn;
    tableauOrigine[indice + 1 ]= ajoutDeux;

};

var quatriemeTableau = ajoutTableau(['un', 2, false], 89,'autre');
var cinquiemeTableau = ajoutTableau(unTableau,19,74);

// création d'une fonction pour assembler 2 tableaux

var assemblageTableau = function(tableauUn, tableauDeux) {
var indiceTableau1 = 0;
// je parcours les differents indices du tableau pour trouver la valeur du 1er incice libre, cela veur dire que ce dernier nous donne undefined
    while (typeof tableauUn[indiceTableauUn] != 'undefined') {
        indice ++;
    }
    var indiceTableauDeux =0;
    // Je parcours les differents indices du tableauDeux pour les ajouter au tableauUn en débutant au premier indice vide dont la valeur m'a été fournie par la boucle précédente
    while(typeof tableauDeux[indiceTableauDeux] != 'undefined') {
        tableauUn[indiceTableauUn]= tableauDeux[indiceTableauDeux];
        indiceTableauUn++;
        indiceTableauDeux++;
    }
    returnTableauUn;
;}
var sixiemeTableau = assemblageTableau([1,2,3],[14,15,16,17,18]);
