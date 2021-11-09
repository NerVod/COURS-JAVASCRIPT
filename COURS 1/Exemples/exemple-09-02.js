/* Une variable (avec le mot-clef var) :
- disponible globalement, c.a.d. dans tout le code si elle est déclarée en-dehors d'une fonction ;
- disponible localement dans la fonction où elle est déclarée.
*/

// Illustration d'une variable globale :

var element = 17;

alert(element); // affiche 17

var maFonction = function() {
    alert(element); // affiche 17
};

maFonction();

// Illustration d'une variable locale :

var autreFonction = function() {
    var autreElement = 'coucou';
    alert(autreElement); // affiche 'coucou'
};

autreFonction();
alert(autreElement); // Erreur -> Uncaught ReferenceError: autreElement is not defined


// Conséquence quand le même nom est utilisé dans l'espace global et dans l'espace local

var variableTest = 'Je suis dehors';

var traitement = function() {
    var variableTest = 'Je suis dedans';
    alert(variableTest); // affiche 'Je suis dedans'
};

traitement();

alert(variableTest); // affiche 'Je suis dehors'
