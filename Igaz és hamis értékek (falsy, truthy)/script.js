// A JS-ben hamisnak minősül:
// false: undefined, null, 0, "", NaN(NotaNumber)
// true: Minden más.

var szam;

if (szam){
    console.log('Létezik');
} else{
    console.log('Nem létezik'); // Oka: Ugyan létrehoztuk de nincs értéke(undefined).
}

szam = 20;

if (szam){
    console.log('Létezik');
} else{
    console.log('Nem létezik');
}

szam = 0; 

if (szam){
    console.log('Létezik');
} else{
    console.log('Nem létezik'); // A nulla false-nak minősül.
}

szam = '';

if (szam){
    console.log('Létezik');
} else{
    console.log('Nem létezik');
}

// Ha azt akarjuk, hogy ez igaznak minősüljön:

szam = 0; 

if (szam || szam === 0){ // Az első feltétel ugyan hamisnak minősül, viszont a második már igaz ugyanis azt vizsgálja, hogy szó szerint 0-e.
    console.log('Létezik');
} else{
    console.log('Nem létezik');
}


szam = 'asd'; // Ha már van benne bármilyen szöveg akkor igaznak fog minősülni.

if (szam){
    console.log('Létezik');
} else{
    console.log('Nem létezik');
}

// == és === különbsége:
// A két egyenlőség jel logikai operátort néz, míg a három egyenlőség jel azt vizsgálja, hogy megegyezik-e vele(érték és típus szerint).

szam = 10;
if (szam == '10'){
    console.log('Egyezik'); // Mivel egy számot hasonlít össze egy szöveggel ezért típuskényszerítést fog végrehajtani titokban ezért lesz true.
} else {
    console.log('Nem egyezik');
}

szam = 10;
if (szam === '10'){
    console.log('Egyezik');
} else {
    console.log('Nem egyezik'); // Számot hasonlítok szöveghez szigorúan vagyis nem engedélyezett a típuskényszerítés ezért hamis lesz.
}