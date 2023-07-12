// Kommentezés:

// Ezeket a sorokat a kód nem fogja beolvasni.
// Két típusa van:
// Egysoros ez kettő perjellel kezdődik mint ez.
/* 
    Több soros ez perjel csillaggal keződik és csillag perjellel zárul mint ez.
*/

// Típuskényszerítés

// Jelentése: Egyik tipusból a másikba való kényszerítés, ha szükség van rá.
// pl.: Számból lesz szöveg. De nem véglegesen!

var keresztnev = 'Pisti';
var kor = 32;
console.log(typeof kor);

console.log(keresztnev + ' ' + kor); // Összefűzés
console.log(typeof keresztnev, typeof kor);

// Értéket egy változónak később is meglehet adni, miután létrehoztuk.

var vezeteknev, felnott; // Itt most mind a kettő undefined lett.
console.log(felnott);
vezeteknev = 'Kovács';
felnott = true;

console.log(vezeteknev + ' felnőtt? ' + felnott); // Itt most a Boolean értékből String lett.

kor = 'harminc'; // Ez előzőleg egy Number volt most viszont egy String lett. Bármikor bármilyen tipusu lehet egy változó mivel nincs megszabva neki.
console.log(typeof kor);