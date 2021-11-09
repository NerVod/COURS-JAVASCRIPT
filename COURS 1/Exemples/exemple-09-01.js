var membresDuClub = [];
var listeMiseEnForme = [];
var listeRoles = ['Président(e)','Secrétaire','Trésorier(e)','Simple membre'];
// rangListe fixe l'indice où doit être stocké un membre dans membresDuClub
var rangListe = 0;

var saisie = function() {
    var profilUtilisateur = [];
    // À chaque clique, on pose trois questions pour obtenir prénom, nom et rôle
    // Chaque réponse est stockée dans un tableau.
        // La boucle permet de récupérer le prénom puis le nom stockés chacun dans un indice différent du tableau profilUtilisateur
        var demandes = ['prenom','nom']
        for (var i=0;i<2;i++) {
            var reponse = '';
            while (reponse == null || reponse == '') {
                reponse = prompt('Donnez le ' + demandes[i]);
            }
            profilUtilisateur[i] = reponse;
        }
        // Demande d'un nombre 1, 2, 3 ou 4 pour le rôle dans le club
        reponse = NaN;
        while (reponse != 1 && reponse != 2 && reponse != 3 && reponse != 4) {
            // \n permet de faire un retour à la ligne
            reponse = prompt('Rôle du membre :\n1 - Président\n2- Secrétaire\n3 - Trésorier\n4 - Membre simple');
            reponse = parseFloat(reponse);
        }
        profilUtilisateur[2] = reponse;
    // Ce tableau est lui-même stocké dans le tableau membresDuClub
    membresDuClub[rangListe] = profilUtilisateur;
    rangListe++;
};

var miseEnForme = function() {
    if (rangListe < 5) {
        alert('La liste ne compte pas assez de membre(s).');
    } else {
        var parcoursListe = 0;
        while (membresDuClub[parcoursListe]) {
            // Nous récupérons à l'indice donné par parcoursListe prénom nom et rôle du membre du club
            listeMiseEnForme[parcoursListe] = membresDuClub[parcoursListe][0] + ' ' + membresDuClub[parcoursListe][1] + ' - ' + listeRoles[membresDuClub[parcoursListe][2] - 1];
            parcoursListe++;
        }
    }
};

var affichage = function() {
    if (listeMiseEnForme[4]) {
        if (!phraseAffichage) {
            var phraseAffichage = '';
            var indicePhrase = 0;
            while (listeMiseEnForme[indicePhrase]) {
                phraseAffichage += listeMiseEnForme[indicePhrase];
                indicePhrase++;
                // Si l'indice suivant contient un nouveau membre, j'ajoute à la fin de la chaîne de caractères un point virgule et un retour à la ligne ; sinon j'ajoute le point final.
                if (listeMiseEnForme[indicePhrase]) {
                    phraseAffichage += ' ;\n';
                } else {
                    phraseAffichage += '.';
                }
            }
        }
        alert(phraseAffichage);
    } else {
        alert('Vous n\'avez fait la saisie des utilisateurs et/ou la mise en forme des données.');
    }
};