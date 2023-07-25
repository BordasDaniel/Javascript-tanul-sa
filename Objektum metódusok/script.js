
var huba = {
    nev: 'Huba',
    kor: 38,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond'],
    'csaladi allapot': 'nős',
    szuletesiEvSzamitas: function(kor){
        return 2023 - this.kor;
    }
};

// Metódus létrehozása: Huba születésének kiszámítása.

// Kulcs létrehozása majd egy függvény hozzáfűzése, amelyenek a visszatérési értéke fogja az értéket adni.

console.log(huba.szuletesiEvSzamitas(38));

// Minden objektumnak van egy speciális kulcsszava: this
// A this mindig az aktuális objektumra hivatkozik, ezzel a kulcsszóval elérhetjük az objektum sajét tulajdonságait és metódusait.

console.log(huba.szuletesiEvSzamitas());

// A kapott érték hozzáfűzése egy létrehozandó kulcshoz.

// huba.szuletesiEv = huba.szuletesiEvSzamitas();
// console.log(huba);


// Ha azt akarjuk, hogy a függvény azonnal írja bele az objektumba a születési évet.

huba = {
    nev: 'Huba',
    kor: 40,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond'],
    'csaladi allapot': 'nős',
    szuletesiEvSzamitas: function(kor){
        this.szuletesiEv = 2023 - this.kor;
    }
};

huba.szuletesiEvSzamitas();
console.log(huba);