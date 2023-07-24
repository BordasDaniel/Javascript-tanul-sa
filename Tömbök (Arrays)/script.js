var nev1 = 'Ond';
var nev2 = 'Kond';
var nev3 = 'Tas';

// A tömbök az adatok összefogását szolgálják
// Egy tömbben nem csak aznos típusú elemek lehetnek.
// A tömbökben az elemek indexelése 0-tól kezdődik.
// A JS-ben minden objektum. A tömbök is.

var nevek = ['Ond', 'Kond', 'Tas',];

// Tömb létrehozás másik módszere:
// Itt az array függvényt hívjuk meg a new kulcsszóval, jelezve, hogy itt egy új array-t akarunk létrehozni.
// Itt paraméternek adjuk meg az adatokat.

var korok = new Array(35, 42, 38);

// Az elemeket a sorszámuk(indexük) alapján lehet elérni.

console.log(nevek[0]);
console.log(korok[1]);

console.log(nevek); // Egész tömb kiiratása.
console.log(nevek.length); // Egy tömb hosszúságának kiiratása.

// A tömbben egy elem megváltoztatása:

nevek[1] = 'Huba';
console.log(nevek);

// Egy elem létrehozása bizonyos indexen:

nevek[5] = 'Álmos';
console.log(nevek); // Ebben az esetben mivel, hogy nincs 3. és 4. indexű elem ezért 2 űres hely lesz közötte (empty × 2).

// Ha tudjuk, hogy az utolsó elem micsoda viszont azt nem, hogy elötte mennyi lesz:

var teszt = ['Ond', 'Kond', 'Tas']

teszt[teszt.length] = 'Álmos'; // Az utolsó helyre kerül.
console.log(teszt);

// Egy személy adatainak tárolása:

// Az objektumoknak vannak tulajdonságai(pl.: .length) és metődusai(pl.: .push()) is.
// A metódusok általában valamilyen műveletet hajtanak végre az objektummal.


var Huba = new Array('Huba', 38, 'vezér', true);
console.log(Huba);

// Elem beszúrása a tömb végére a push metódussal:

Huba.push(42);
console.log(Huba);

// Elem beszúrása a tömb elejére az unshift metódussal:

Huba.unshift('Ifj.');
console.log(Huba);

// Az utolsó elem törlése a tömbből a .pop() metódussal:

Huba.pop();
console.log(Huba);

// Az első elem törlése a tömbből a .shift() metődussal:

Huba.shift();
console.log(Huba);

// Elem indexének lekérése a .indexOf() metódussal.

console.log(Huba.indexOf(38));

// Ha olyan elemet kérünk le a .indexOf() metódussal ami nem létezik akkor -1 lesz az eredmény.

console.log(Huba.indexOf(48));


// Hubának szakács-e a foglalkozása?

var szakacs = Huba.indexOf('szakács') === -1 ? 'Huba nem szakács' : 'Huba szakács';
console.log(szakacs);

Huba[2] = 'szakács';

szakacs = Huba.indexOf('szakács') === -1 ? 'Huba nem szakács' : 'Huba szakács';
console.log(szakacs);