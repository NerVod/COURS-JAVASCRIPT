// Il existe en JavaScript deux autres mot-clefs en dehors de var pour enregistrer des données : let et const.

// Nous avons vu la portée des variables, avec var, dans l'exemple précédent. Le mot-clef let permet de mieux contrôler la portée d'une variable, car celle-ci est limitée à l 'espace des accolades dans lesquelles elle se trouve.

var test = 18;
if (test > 10) {
  let chose = 18;
  alert(chose); // affiche 18
}

alert(chose); // Erreur -> Uncaught ReferenceError: chose is not defined

// Ceci nous permet, par exemple, une autre écriture de la boucle for :
for (let i=0;i<6;i++) {
    // du code…
}

// Attention, utiliser deux fois le mot-clef let sur la même variable déclenche une erreur.

// const permet de déclarer une constante, c.a.d. une donnée qui ne sera pas modifiée.

const element = 17;
element = 10; // erreur, il n'est pas possible de modifier la constante
// cependant :
const monContenu = [18];
monContenu[1] = 'truc';
monContenu[2] = 17;
monContenu[3] = [17,95,74];
// Ici, j'ajoute des éléments dans monContenu, mais celui-ci fait toujours référence au même tableau.