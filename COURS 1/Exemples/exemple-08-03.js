var nombre = 1;
var stop, arret;

var action = function() {
    alert('Bonjour');
};


var changement = function() {
    alert('Action numéro ' + nombre);
    nombre++;
};


var lancementSetTimeout = function() {
    stop = setTimeout(action,4000);
};

var arretSetTimeout = function() {
    clearTimeout(stop);
};

var lancementSetInterval = function() {
    arret = setInterval(changement,2000);
};

var arretSetInterval = function() {
    clearInterval(arret);
    nombre = 1;
};