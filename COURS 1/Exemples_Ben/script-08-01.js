var salutation = function() {
    alert('Bonjour à tous !');

}

// calcul moyenne sur les mêmes 5 nombres
var calculMoyenneUn = function() {
    var total = 17 + 98 + 72 + 41 + 95;
    var moyenne = total/5;
    alert('La moyenne est : ' + moyenne)
}

// calcul moyenne sur les nombres en argument
var calculMoyenneDeux = function(a,b,c,d) {
    var total = a + b + c + d;
    var moyenne = total/4;
    alert('La moyenne est : ' + moyenne)
}

// calcul moyenne sur nombres en argument avec valeur de reour
var calculMoyenneTrois = function(a,b,c,d) {
    var total = a + b + c + d;
    var moyenne = total / 4;
    return moyenne;
}


// calcul moyenne sur 4 nombres sous la forme d'1 seul argument 'tableau' avec valeur de retour

var calculMoyenneQuatre = function(tableauDeNombres) {
    var total = tableauDeNombres[0] + tableauDeNombres[1] + tableauDeNombres[2] + tableauDeNombres[3];
    var moyenne = total / 4;
    return moyenne;
};


// calcul moyenne sur 4 nombres sous la forme d'1 seul argument 'tableau' avec valeur de retour
// le tableau est traité à l'aide d'une boucle
var calculMoyenneCinq = function(tableauDeNombres) {
    var indiceTableau =0;
    var total =0;
// je vérifie qu'indiceTableau contient bien une valeur
    while (tableauDeNombres[indiceTableau] != undefined) {
        
    indiceTableau = indiceTableau +1;
    total = total + tableauDeNombres[indiceTableau];
    indiceTableau = indiceTableau +1;
}
    var moyenne = total / indiceTableau;
    return moyenne;
};


// calcul moyenne lur liste nombres, 1 seul argument Tableau
// tableau traité avec boucle qui s'arrête quand l'indice est undefined

var calculMoyenneSix = function(tableauDeNombres) {
    var indiceTableau =0;
    var total =0;
// je vérifie qu'indiceTableau contient bien une valeur
    while (tableauDeNombres[indiceTableau] != undefined) {
        
    indiceTableau = indiceTableau +1;
    total = total + tableauDeNombres[indiceTableau];
    indiceTableau = indiceTableau +1;
    var moyenne = total / indiceTableau;
    return moyenne;
}
};


var actionMoyenneUn = function() {
var retourMoyenne = calculMoyenneTrois(74,89, 156,84);
alert('La moyenne est ' + retourMoyenne);
};

var actionMoyenneDeux = function() {
var retourMoyenne = calculMoyenneQuatre([74,89, 156,84]);
alert('La moyenne est ' + retourMoyenne);
};

var actionMoyenneTrois = function() {
var retourMoyenne = calculMoyenneCinq([74,89, 156,84]);
alert('La moyenne est ' + retourMoyenne);
};
var actionMoyenneQuatre = function() {
var retourMoyenne = calculMoyenneSix([74,89, 156,84,110,240,180,62,38,45,900,1200,4500]);
alert('La moyenne est ' + retourMoyenne);
};
