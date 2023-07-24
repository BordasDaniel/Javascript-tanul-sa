// Ha az elemet nem index hanem név alapján akarjuk elérni akkor használjunk objektumokat.
// Az objektumban kulcs - érték párokat tárolunk.
// Minden értékhez tartozik egy kulcs (vagyis a neve), és az alapján érjük el.
// A tömbökben számít az elemek sorrendje az objektumokban viszont nem.

// Az objektum létrehozásának két módja van:
// Az első az az objektum literál.

// Egy objektum tulajdonsága lehet tömb is vagy akár még további objektum is.


var huba = {
    nev: 'Huba',
    kor: 38,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond'],
    'csaladi allapot': 'nős', // Mivel két tagból áll a kulcs ezért azt is aposztrófok közé kell tenni.
};

// Az egész objektum kiiratása:

console.log(huba);

// Objektum elemének kiiratása:

console.log(huba['nev']);
console.log(huba.nev);

// console.log(huba.'csaladi allapot') // Kéttagú elemekre nem lehet ponttal hivatkozni.
console.log(huba["csaladi allapot"]);


// Itt egy változóban tároljuk el a 'hazas' kulcsszó értékét.

var h = 'hazas';
console.log(huba[h]);

// Egy tulajdonság megváltoztatása az objektumban:

huba['kor'] = 40;
huba.foglalkozas = 'ács';

console.log(huba);

// A második létrehozási módszer az objektum vagyis new Object szintaxis.
// Ezzel a módszerrel viszont utólag fel kell tölteni az objektumot ugyanis üreset hoz létre.

var tas = new Object();{

    tas.nev = 'Tas';
    tas.kor = 32;
    tas['foglalkozas'] = 'vezér';
}

console.log(tas);