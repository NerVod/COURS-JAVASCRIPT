var membresDuClub = [];
var listeMiseEnForme = [];
var listeRole = ['Président(e)', 'Secrétaire', 'Trésorier(e)', 'Simple Membre']

//rangListe fixe l'indice ou doit être stocké un membre du club
var rangListe = 0;

var saisie = function() {
    var profilUtilisateur = [];
// à chaque clic on pose 3 questions pour obtenir prénom, nom et rôle
// chaque réponse est stockée dans un tableau.


    // la boucle permet de récupérer le prénom puis le nom stockés chacuns dans un indice différent du tableau profilUtilisateur
var demandes = ['prenom', 'nom']
for (var i=0; i<2;i++) {
var reponse = '';
while (reponse == null || reponse == '') {
    reponse = prompt('Donnez le ' + demandes[i]);
}
profilUtilisateur[i] = reponse;
}
// demande d'un nombre 1, 2, 3 ou 4 pour le rôle dans le club
reponse =7;
while ( reponse != 1 && reponse != 2 && reponse != 3 && reponse != 4) {
    reponse = prompt('Rôle du membre :\n1 - Président \n2- Secrétaire - \n3 -Trésorier \n4 - Membre simple');
    reponse = parseFloat(reponse);
}
profilUtilisateur[2] = reponse;



//Ce tableau est lui-même stocké dans le tableau membresDuClub
membresDuClub[rangListe] = profilUtilisateur;
rangListe++;

};



var miseEnForme = function() {
    if(rangListe < 5) {
        alert('La liste ne compte pas assez de membre(s).')
    } else {
        var parcoursListe = 0;
        while(membresDuClub[parcoursListe]) {
            //nous récupérons à l'indice donné par parcousListe prénom nom et rôle du membre du club
            listeMiseEnForme[parcoursListe] = membresDuClub[parcoursListe][0] + ' ' + membresDuClub[parcoursListe][1] + ' - ' + membresDuClub[parcoursListe[2]-1];
        }
    }
};

var affichage = function () {
    if (listeMiseEnForme[4]) {
        if (!phraseAffichage) {
        var phraseAffichage = '';
        var indicePhrase = 0;
        while (listeMiseEnForme[indicePhrase]) {
            phraseAffichage += listeMiseEnForme[indicePhrase];
            indicePhrase++;
// Si l'indice suivant contient un nouveau membre, j'ajoute à la fin de la chaine de caracteres un pointvirgule et un retour à la ligne ; sinon j'ajoute le point final

            if(listeMiseEnForme[indicePhrase]) {
                phraseAffichage += ';\n';
            } else {
                phraseAffichage += '.';
            }
        }
        alert(phraseAffichage);
    } else {
        alert('Vous n\'avez pas saisi les utilisateurs et/ou fait la mise en forme des données.');
    }
}
};
