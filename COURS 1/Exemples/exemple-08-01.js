var salutation = function() {
    alert('Bonjour à tous !');
};

/********************************************
  Calcul moyenne sur les mêmes quatre nombres  
********************************************/

var calculMoyenneUn = function() {
    var total = 17 + 98 + 72 + 41;
    var moyenne = total / 4;
    alert('La moyenne est : ' + moyenne);
};

/**********************************************
  Calcul moyenne sur quatre nombres en argument
**********************************************/

var calculMoyenneDeux = function(a,b,c,d) {
    var total = a + b + c + d;
    var moyenne = total / 4;
    alert('La moyenne est : ' + moyenne);
};

/***********************************************
  Calcul moyenne sur quatre nombres en argument
              avec valeur de retour
***********************************************/

var calculMoyenneTrois = function(a,b,c,d) {
    var total = a + b + c + d;
    var moyenne = total / 4;
    return moyenne;
};

/***********************************************
    Utilisation de la fonction ci-dessus et
            traitement de la réponse
***********************************************/

var actionMoyenneUn = function() {
    var retourMoyenne = calculMoyenneTrois(74,89,156,84);
    alert('La moyenne est ' + retourMoyenne);
};

/***********************************************
   Calcul moyenne sur quatre nombres sous la
  forme d'un seul argument (c.a.d. un tableau)
              avec valeur de retour
***********************************************/

var calculMoyenneQuatre = function(tableauDeNombres) {
    var total = tableauDeNombres[0] + tableauDeNombres[1] + tableauDeNombres[2] + tableauDeNombres[3];
    var moyenne = total / 4;
    return moyenne;
};

var actionMoyenneDeux = function() {
    // Je dois fournir à la fonction externe calculMoyenneQuatre un tableau de quatre nombres
    var retourMoyenne = calculMoyenneQuatre([74,89,156,84]);
    alert('La moyenne est ' + retourMoyenne);
};

/***********************************************
   Calcul moyenne sur quatre nombres sous la
  forme d'un seul argument (c.a.d. un tableau)
              avec valeur de retour.
  Le tableau est traité à l'aide d'une boucle
***********************************************/

var calculMoyenneCinq = function(tableauDeNombres) {
    var indiceTableau = 0;
    var total = 0;
    while (indiceTableau < 4) {
        // indiceTableau aura pour valeur 0 puis 1 puis 2 puis 3 me permettant de cible les différents indices du tableau contenu dans l'argument tableauDeNombres
        total = total + tableauDeNombres[indiceTableau];
        indiceTableau = indiceTableau + 1;
    }
    var moyenne = total / 4;
    return moyenne;
};

var actionMoyenneTrois = function() {
    // Je dois fournir à la fonction externe calculMoyenneCinq un tableau de quatre nombres
    var retourMoyenne = calculMoyenneCinq([74,89,156,84]);
    alert('La moyenne est ' + retourMoyenne);
};

/***********************************************
   Calcul moyenne sur une liste de nombres sous
 la forme d'un seul argument (c.a.d. un tableau)
              avec valeur de retour.
  Le tableau est traité à l'aide d'une boucle
  qui s'arrête quand l'indice visé contient 
  undefined.
***********************************************/

var calculMoyenneSix = function(tableauDeNombres) {
    var indiceTableau = 0;
    var total = 0;
    // Je vérifie à chaque tour que l'indice ciblé du tableau contient bien une valeur
    while (tableauDeNombres[indiceTableau] != undefined) {
        total = total + tableauDeNombres[indiceTableau];
        indiceTableau = indiceTableau + 1;
    }
    var moyenne = total / indiceTableau;
    return moyenne;
};

var actionMoyenneQuatre = function() {
    var retourMoyenne = calculMoyenneSix([74,809,156,84,78,125,741,957,156]);
    alert('La moyenne est ' + retourMoyenne);
};