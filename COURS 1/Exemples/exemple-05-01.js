var stock;
stock = 18;
var autre = 'message';

stock = true;
alert(stock); // affiche 'true'
var autreCopie = autre;
alert(autreCopie); // affiche 'message'
autreCopie = 'changement'; // autreCopie contient 'changement' et autre contient toujours 'message'

19;
19.789;
-34;
-356.78;

// Attention à l'échappement :
'Bonjour à tous, c\'est le dernier jour de la semaine aujourd\'hui';

// Les tableaux
var grandeBoite = []; // création d'un tableau vide
grandeBoite[0] = 'coucou';
grandeBoite[1] = 17;
var autreRangement = [96,9.6,true,'message'];

grandeBoite[1]; // contient 17
autreRangement[0]; // contient 96
autreRangement[4] = 'un texte';

grandeBoite[2] = [true,false,'soleil','vent',85];
grandeBoite[3] = -15;
grandeBoite[4] = ['montagne','mer',17];
grandeBoite[4][3] = ['autre','divers','fin'];
grandeBoite[2][2]; // contient soleil
grandeBoite[4][3][1]; // contient divers

// Les fonctions

var affichage = function() {
    var message = 'Bonjour à tous';
    alert(message);
};

affichage();

var puissanceDeux = function(leNombre) {
    var calcul = leNombre * leNombre;
    alert(calcul);
};

puissanceDeux(4);
puissanceDeux(742);

var retourPuissanceDeux = function(leNombre) {
    var calcul = leNombre * leNombre;
    return calcul;
};

var resultatFonction = retourPuissanceDeux(7);
alert('Le résultat du carré de 7 est ' + resultatFonction);

// Les conditions et boucles

var choix = prompt('Dites ok');
if (choix == 'ok') {
    alert('Bonne réponse');
}

var reponse = prompt('Dites oui');
if (reponse == 'oui') {
    alert('Bonne réponse');
} else {
    alert('Vous n\'avez pas dit oui.');
}

var elements = ['lundi','mardi','mercredi','jeudi'];

var compteur = 0;
while (compteur < 4) {
    alert(elements[compteur]);
    compteur = compteur + 1;
}