// var, let, const

// A var:

// Globális vagy függvényszintű változók.
// Globális : Ezt azt jelenti, hogy a program bárhol eléri a változót.
// Függvényszintű vagy Lokális : Ez azt jelenti, hogy a függvényben létrehozott változó nem látható a függvényen kívül csak azon belül. Hívása hibát eredményez.
// Minden függvényben létrehozott változó var-ral lokális lesz.


var nev = 'Pistike';

console.log(nev);

function teszt(){
    var x = 10;
    console.log('Ez a függvényen belül van.');
    console.log(nev);
    console.log(x);
}

teszt();
// console.log(x); // A függvény látja a név nevű változót viszont a kód nem látja az x-et, mivel az már globális.

// Script blokkok

// Egy csoportba foglalnak bizonyos utasításokat.
// Ezt a var kulcsszó nem engedélyezi.

{
    var y = 21;
    console.log(y);
}
console.log(y); // Itt is meghívható hiba nélkül a var miatt.

// Viszont a let már engedélyezi ezt.


// A let:

{
    let z = 22;
    console.log(z);
}

// console.log(z); //  Itt már nem hívható meg.


// Változó újrahasznosítása:

// Itt két különböző változóról van szó.

var x = 30; // Ez globális
console.log(x);

{
    var x = 2; // Ennek lokálisnak kellene lennie viszont a var miatt globális lesz és felülírja az előző értéket.
    console.log(x);
}
console.log(x);


// Változó újradefiniálása:

var x = 10;
console.log(x);

{
   // var x = 2; // Ez felülírja az előzőt.
    let x = 2; // Ez viszont egy teljesen önálló változó.
    console.log(x);
}

console.log(x);


// Változók láthatósága:

var i = 2;
console.log('A változó értéke', i,'a for ciklus elött.');

for (var i = 0; i < 8; i++){ // Itt felül lett írva a változó.
    console.log(i);
}

console.log('A változó értéke', i,'a for ciklus után.'); // Ez az utoljára emelt érték a for ciklusból.

// let-tel:

console.log('--------------');

let v = 3;
console.log('A változó értéke', v,'a for ciklus elött.');

for (let v = 0; v < 8; v++){ // Ez a változó teljesen más mint az elötte lévő. Ugyanis for ciklus esetében is blokkokról beszélünk.
    console.log(v); // Ez a for cikluson belül létrejött változó értéke és nem a blokkon kívülié.
}


console.log('A változó értéke', v,'a for ciklus után.'); // Ez már az eredeti változó amely a for ciklus elött volt.

// var-ral:


function teszt(){
    var asd = 10;
    console.log(asd);
}

teszt();
// console.log(asd); // Hivatkozás hiba ugyanis lokális változó.

// let-tel:


function teszt(){
    let dsa = 10;
    console.log(dsa);
}

teszt();
// console.log(dsa); // Ugyanaz mint a var esetében. Itt sem létezik a változó a tömbön kívül.


// Ha blokkon kívül hozunk létre egy változók akár var-ral akár let-tel akkor az globális szintű lesz.

// var x = 1; //globális ez.

// let y = 2; // és ez is.

// Újra definiálás:

// Var-ral létrehozott változót akármennyiszer újra definiálhatunk hiba nélkül.

var ujra = 2;
console.log(ujra);
var ujra = 233;
console.log(ujra);
var ujra = 2424;
console.log(ujra);
var ujra = 2241412;
console.log(ujra);

// Viszont let-tel csak egyszer hozhatunk létre egy változót ugyanazzal a név, mert különben hibát fog eredményezni.

let nemlehet = 1;
console.log(nemlehet);
// let nemlehet = 3; // Ez már hibát eredményezne.
// console.log(nemlehet);


// Blokk szinten létrehozott let változó:

// Ez nem eredményez hibát ugyanis ez a kettő változó teljesen különböző.


let vissza = 2; // Ez globális.
// let x = 3; // Ez már hiba
{
    let vissza = 4; // Ez lokális.
    // let x = 2; // Ez is hiba.
}

// Ha let-tel létrehozunk egy változót kívül akkor var-ral sem lehet létrehozni még egy ugyanolyan nevű változót.

let alma = 'alma';
// var alma = 'alma'; // Ez itt hiba.

{
    let alma = 'alma';
}

// Ugyenez igaz, ha blokkon belül hozzuk létre var-ral.

let eper = 'eper';


{
    let eper = 'eper';
    // var eper = 'eper'; // Ez itt hiba.
}

// Hoisting:

// Ha hivatkozok egy változóra úgy, hogy nincs deklarálva viszont később ezt megtesszük akkor azt berakja a használat elé.


nev = 'Pisti';
console.log(nev);

var nev;

// let-tel:


nev2 = 'Jani';
console.log(nev2);

// let nev2; // Hibát eredményez (nem fér hozzá).


// const:

// Ugyanaz érvényes rá mint a let-re annyi különbség van a kettő között, hogy a const az egy állandó változót hoz létre(konstans).
// A const-tal létrehozott változókat nem betűvel szokás írni.


const SZIN = 'ffff';
// SZIN = 'white'; // Ez hibát eredményez ugyanis már egyszer adtunk neki értéket.

const SZAM = 100;
// SZAM = SZAM + 10; // Ez is hiba ugyanis a konstans értékét sehogyan sem lehet megváltoztatni.

// A const-tal létrehozott változó is blokk értékű:

var x = 1;

{
    const x = 8;
    console.log(x); // Ez a blokkon belülire hivatkozik.
}

console.log(x); // Ez pedig a blokkon kívülire.

// Amikor const-tal hozunk létre egy változót akkor kötelező neki értéket adni, mert különben hibát eredményez.
// Minden esetben az értékadást a létrehozáskor kell megtenni.

// const ADOKNEKIKESOBB;
// ADOKNEKIKESOBB = 'valami';

// const objektummal:

// Csak akkor kapok hibát, ha teljesen új deklarációt végzek.


const haziallat = {
    neve: 'Blöki',
    kora: 2,
};

console.log(haziallat.neve)

haziallat.neve = 'Jóska';
haziallat.otthona = 'Miskolc';

console.log(haziallat.neve)

/* haziallat = {
    neve: 'Béla',
    kora: 4,
}; 
*/ // Ez már hiba, mivel magát az objektumot változtattam meg nem pedig a tulajdonságát.
