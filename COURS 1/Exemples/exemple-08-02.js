var calculMoyenne = function(tableauDeNombres) {
    // Je vérifie que je reçois un tableau dont le premier indice est un nombre
    if (typeof tableauDeNombres[0] == 'number') {
        var indiceTableau = 0;
        var total = 0;
        while (tableauDeNombres[indiceTableau] != undefined) {
            // Je vérifie à chaque tour de boucle que l'indice ciblé ne contient pas autre chose qu'un nombre. Si le test est positif, je retourne false ce qui arrêt aussitôt la fonction calculMoyenne
            if (typeof tableauDeNombres[indiceTableau] != 'number') {
                return false;
            }
            total = total + tableauDeNombres[indiceTableau];
            indiceTableau = indiceTableau + 1;
        }
        var moyenne = total / indiceTableau;
        return moyenne;
    } else {
        return false;
    }
};

var actionMoyenneBonTableau = function() {
    var retourMoyenne = calculMoyenne([74,809,156,84,78,125,741,957,156]);
    if (retourMoyenne) {
        alert('La moyenne est ' + retourMoyenne);
    } else {
        alert('Calcul impossible');
    }
};

var actionMoyenneMauvaisTableau = function() {
    var retourMoyenne = calculMoyenne([74,809,156,84,'intrus',125,741,957,156]);
    if (retourMoyenne) {
        alert('La moyenne est ' + retourMoyenne);
    } else {
        alert('Calcul impossible');
    }
};
