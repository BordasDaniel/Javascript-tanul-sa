// Hivatalos sorrend:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var kigyok = 100;
var bekak = 78;
var madarak = 198;

// Sorrend: A két változó összeadása, kiértékelés, hogy nagyobb-e, majd végül érték hozzáfűzése a változóhoz(false).
// A sorrend a hivatalos táblázat alapján működik. A legnagyobb prioritásban az összeadás van, majd a kiértékelés és végül a hozzáfűzés.
var tobbHullo = kigyok + bekak > madarak;
console.log(tobbHullo);

// Mivel az összeadásnál nagyobb a prioritása van az osztásnak ezért bele kell rakni egy zárójelbe. Egyébként az osztással kezdené.
var atlag = (kigyok + bekak + madarak) / 3;
console.log(atlag);


var a, b;
console.log(a);
a = b = (10 + 1) * 2 - 2; // 11 * 2 - 2, 22 - 2 
// a = b = 20; // Itt először a "b" felveszi a 20-at majd az "a" felveszi a b értékét.
// Minden műveletnek, operátornak megvan a maga iránya, ez a hivatalos oldalon az "Associativity". Ez akkor lép érvénybe, ha több operátor van egy helyen.
console.log(a, b);


a = a * 2; // 40
console.log(a);
// Rövidítve:
a*= 2;
console.log(a);


a = a + 1;
console.log(a);
// Rövidítve:
a +=1;
console.log(a);
// Rövidítve:
a++;
console.log(a);

