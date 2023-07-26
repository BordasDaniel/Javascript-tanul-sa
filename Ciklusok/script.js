// A ciklusokkal adott folyamatot többször is egymás után végre lehet hajtani, ismételni.

// Többféle ciklus létezik: JS-ben : for és while ciklusok vannak


// Számok kiiratésa 1-től 10-ig:

// Két fajta megoldással:

// Ez a megoldás viszont ha pl.: 100 számról van szó nagyon sok idő telik.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// for ciklussal:

// Használat: for kulcsszó + (kiindulási érték + ; feltétel(hogy meddig tartson a ciklus) + ; + léptetés) + { ciklus törzse }

// kiindulási érték: Ez a ciklus számlálója, ez fogja jelezni minden végrehajtáskor, hogy hányszor futott már le a ciklus.
// A számlálót úgy is hívjuk, hogy ciklus változó, ezt általában i betűvel jelöljük mivel ez az interáció szó kezdőbetűje ami léptetést jelent.

// Működése:

// A kiindulási értéke => feltétel megnézése (ha teljesül) => ciklus törzse => léptetés. Ez ismétlődik míg meg nem törik a ciklus.(break által vagy nem teljesül a feltétel)

console.log('for ciklussal: ');

for (let i = 1; i <= 10; i++){
    console.log(i);
}

// Páros számok kiiratása for ciklussal:

console.log('1-től 10-ig minden páros szám:');

for (let i = 2; i <= 10; i += 2){
    console.log(i);
}

// Lehet visszafelé is számolni a ciklussal:

// Számok kiiratása 20-tól 1-ig:

console.log('Számok kiiratása 20-tól 1-ig');

for (let i = 20; i >= 1; i--){
    console.log(i);
}

// Tömb bejárása for ciklussal:

var tomb = ['Ond', 38, 'vezér', true, 1990];

// for ciklus nélkül:

console.log('Tömb bejárása for ciklus nélkül:')

console.log(tomb[0]);
console.log(tomb[1]);
console.log(tomb[2]);
console.log(tomb[3]);
console.log(tomb[4]);

// for ciklussal:

// Az i 0 lesz mivel a tömb elemek sorszámozása 0-tól kezdődik.
// A tömb hossza 5 viszont az 5. indexű elem nincs a tömbben ezért kevesebbnek kell lennie ettől az i-nek.


console.log('Tömb bejárása for ciklussal:')

for (let i = 0; i < tomb.length; i++){
    console.log(tomb[i]); // Ha csak simán az i-t iratom ki akkor az indexet fogom megkapni nem pedig a tömb elemét.
}


// while ciklus:

// A while és a for ciklus közötti különbség:
// A while-ban mindig egy feltételt vizsgálunk és ameddig ez a feltétel igaznak minősül addig fogjuk a ciklus törzsét ismételten lefuttatni.
// Használat: while (feltétel){ ciklus törzse }
// A változót a ciklus elött kell létrehozni.
// A ciklus utolsó lépése mindig a léptetés.

// Tömb bejárása while ciklussal

console.log('Tömb bejárása while ciklussal:')

let i = 0;
while (i < tomb.length){
    console.log(tomb[i]);
    i++;
}

// A break és a continue utasítások:


// break:

// A break-kel ki lehet lépni a ciklusból, ebben az esetben a ciklus futása megszakad.

// pl.: Akkor akarunk kilépni a ciklusból, ha logikai értéket találunk a tömbben.

console.log('break:')

for (let i = 0; i < tomb.length; i++){
    if (typeof(tomb[i]) === 'boolean') break; // Ha az if egyetlen utasítást hajt végre akkor nem muszáj kirakni a kapcsos zárójelet, elég ha egy sorba írod vele együtt.
    console.log(tomb[i]);
}


// continue

// A continue esetében pedig a ciklus törzsében elhelyezett utasítás nem fog végrehajtódni, hanem megtörténik a léptetés és a következő ciklus körre ugrik a programnak a vezérlése.

// pl.: Csak a "string" típusu elemet írja ki.

console.log('continue:')

for (let i = 0; i <= tomb.length; i++){
    if (typeof(tomb[i]) !== 'string'){
        continue; // Kihagyja az elemeket amelyek nem "string" típusuak.
    }
    console.log(tomb[i]);
}