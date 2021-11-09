/* Une variale (avec le mot clef var) : 
_elle est disponible globalement c'est à dire dans tout le code si elle est déclarée en dehors d'une fonction
_elle est disponible localement dans la fonction où elle est déclarée
*/

// Illustration variable globale

var element = 17;

alert(element);

var maFonction = function() {
    alert(element); // affiche 17
}
maFonction();

// illustration variable locale

var autreFonction = function() {
var autreElement = 'coucou';
alert(autreElement) // affiche 'coucou'
};

autreFonction();
alert(autreElement); //Erreur -> uncaught ReferenceError : autreElement in sot defined

// Conséquence saund le même nom est utilisé dans l'espace global et dans l'espace local

var variableTest = 'Je suis dehors';

var traitement = function() {
    var variableTest = 'Je suis dedans';
    alert(variableTest); // affiche 'Je suis dedans'
};

traitement ();

alert(variableTest); // affiche 'Je suis dehors