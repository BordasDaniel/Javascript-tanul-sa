// var + változó neve = érték + ;(sor lezárása)
var keresztNev = 'Pisti';
console.log(keresztNev);

var vezetekNev = 'Kis';
console.log(vezetekNev)

var kor = 32;

// Adattipusok:

// Number
// String
// Boolean
// undefined
// null
// ------------

// Számok avagy Number: 
Number
// Egész vagy lebegőpontos számokat tárol.
// Minden szám lebegőpontos pl.:
// Number 5 -> 5.0

// ------------

// Szövegtípus avagy String:
String
// Karakterhozatot tárol.

// ------------

// Logikai adattípus avagy Boolean
Boolean
// Igaz(true) vagy hamis(false) állítást képes tárolni.

// ------------

// Értéktelen változó avagy undefined
undefined
// Akkor lesz egy változó undefined, ha létezik viszont nincs értéke.

// ------------

// Nem létező változó avagy null
null
// Ez akkor van, ha a változó nem létezik.

// ------------

// A változókról:

// A JS dinamikus nyelv, amely azt jelenti, hogy nem kell megadni a változó tipusát létrehozáskor.
// A JS érték alapján tudni fogja, hogy milyen tipusú adatként kezelje ezt a változót.
// Nem egy változó neve Boolean érték(true vagy false) vagy szám vagy különleges karakter(két kivétel van: _ (aláhúzás) ; $ (dollárjel)).
// A változó névnek a közepén sem lehet elhelyezni különleges karaktert pl.: kereszt/nev = 'Jani'; Ugyanaz a kettő kivétel itt is.
// Nem lehet változó neve egy foglalt szó. pl.: var function = 'alma';
// ------------


var nagykoru = true;
console.log(nagykoru); // Boolean

var nagykoru = false;
console.log(nagykoru); // Boolean

var magassag;
console.log(magassag); // undefined

console.log(nemletezo); // Hiba, nem létező változó.