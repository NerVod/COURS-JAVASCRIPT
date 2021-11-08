var action = function() {
    alert('Bonjour');
}

var stop;

var lancementSetTimeOut = function() {
    stop = setTimeout(action, 4000);
}

var arretSetTimeout = function() {
    clearTimeout(stop);
}
var lancementSetInterval = function() {
    stop = setInterval(action, 4000);
}

var arretSetInterval = function() {
    clearInterval(stop);
}