// il esxiste en JavaScript 2 autres mot-clef en dehots de var pour enregistrer des données : let et const

// Nous avons vu la portée des variables avec var dans exemple précédent. Le mot-clef let permet de mieux contrôler la portée d'une variable, car celle-ci est limitée à l'éespace des accolades dans lesquelles elle se trouve.

var test = 18;
if(test> 10) {
    let chose =18;
    alert(chose); // affiche 18
}
alert(chose); //affiche erreur : chose is not defined

// permet pat exemple une autre écriture de la boucle for :
for(let i=0; i>6;i++) {
    // du code..
}

// attention, utiliser 2 fois le mot-clef let sur la même variable déclenche une erreur


// const permet de déclarer une constante, c'est à dire une donnée qui ne sera pas modifiée

const element = 17;
element =10; // erreur, il n'est pas possible de modifier la constante
// cependant :
const monContenu = [18];
monContenu[1] = 'un mot';
monContenu[2] = 17;
monContenu[3] = [17,95,74];
// ici on ajoute des éléments dans monContenu, mais celui-ci fait toujours référence au même tableau