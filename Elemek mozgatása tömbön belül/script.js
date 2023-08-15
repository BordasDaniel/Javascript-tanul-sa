
// A tömbön belüli elem mozgatásra 2 lehetőség van:

// 1.: Placeholder használata:

// Az egyik elemet amelyet elfogunk mozgatni elmentjük egy változóban.
// pl.: Az első elemet és a harmadik elemet fel akarjuk cserélni.

console.log('Placeholderrel:')

const INTEGERS= [1, 2, 3, 4, 5];
console.log('Eredeti: ' + INTEGERS);

const placeholder = INTEGERS[0];
INTEGERS[0] = INTEGERS[2];
console.log('Megduplázva: ' + INTEGERS); // Jelenleg az első elem a harmadiknak az értékével egyenlő, tehát megdupláztuk.

// Ezért az azt elemet amelyet megdupláztuk átfogjuk írni a placeholderre.

INTEGERS[2] = placeholder;
console.log('Felcserélve: ' + INTEGERS);

// 2.: .splice metódus használata:

// Alap szintaxis: array.splice(StartIndex, DeleteItemNumber, AddElement);
// Törlés szintaxisa: array.splice(ElementIndex, DeleteItemNumber);
// Hozzáadás szintaxisa: array.splice(InsertIndex, 0, Element);

// Egy listával tér vissza.

console.log('.splice() methódussal:');

const LANGUAGES = ['cpp', 'js', 'ts'];
console.log('Eredeti: ' + LANGUAGES);

// pl.: A cpp-t és a ts-t fel akarjuk cserélni:

// Lekérjük az elemek indexeit.
let fromIndex = LANGUAGES.indexOf('cpp'); // 0
let toIndex = LANGUAGES.indexOf('ts'); // 2

// Eltávolítjuk a mozgatandó elemet a listából.

const element = LANGUAGES.splice(fromIndex, 1)[0]; // Egy listát ad vissza a törölt elemekről ['cpp'] viszont nekünk ez stringként kell ezért kell hivatkozni az 1. elemre.
console.log(element); // 'cpp'
console.log(LANGUAGES); // ['js', 'ts']

// Elem visszahelyezése a megadott pozícióba:

LANGUAGES.splice(toIndex, 0, element);
console.log(LANGUAGES);
