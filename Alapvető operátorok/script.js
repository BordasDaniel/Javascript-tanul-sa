// Operátorok:

// Feladata: Mindig valamilyen műveletet hajtanak végre.

// Alapvető matematikai operátorok:

var szam = 10;

var osszeg = szam + 33; // Összeadás
console.log(osszeg);

var kulonbseg = 100 - szam; // Kivonás
console.log(kulonbseg);

var szorzas = szam *2; // Szorzás
console.log(szorzas);

var osztas = szam / 3; // Osztás
console.log(osztas);

// Logikai operátorok:

// Visszatérő értéke true vagy false

var szam1 = 100;
var szam2 = 125;

var szamegynagyobb = szam1 > szam2; // Nagyobb operátor
console.log(szamegynagyobb); 

var szamegykisebb = szam1 < szam2; // Kisebb operátor
console.log(szamegykisebb);

var egyenlo = szam1 == szam2; // Egyenlő operátor
console.log(egyenlo);

var nagyobbegyenlo = szam1 >= szam2; // Nagyobb vagy egyenlő operátor
console.log(nagyobbegyenlo);

var kisebbegyenlo = szam1 <= szam2; // Kisebb vagy egyenlő operátor
console.log(kisebbegyenlo);


// typeof operátor:

// Megmondja egy változónak a típusát.

console.log(typeof szam1); // Number
console.log(typeof 'szoveg'); // String
console.log(typeof egyenlo); // Boolean

var nincserteke;

console.log(typeof nincserteke); // undefined
