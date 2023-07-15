// Ternális operátor vagy feltételes operátor (egysoros if):

var felnott = false;

if (felnott){
    console.log('Béla már felnőtt.');
} else{
    console.log('Béla még gyerek.');
}


var belakora = 26;

if (belakora >= 18){
    console.log('Béla már felnőtt.');
} else{
    console.log('Béla még gyerek.');
}

// feltételes operátorral:

// Ezt akkor érdemes használni amikor kisebb feltételeket akarunk megszabni.
// Használat: feltétel + ?(ez a true ág) + törzs + :(ez a false ág) + törzs + ;
belakora >= 18 ? console.log('Béla már felnőtt.') : console.log('Béla még gyerek.');

// Feltétel eredményét egy változóban tároljuk:

var felnottvagygyerek = belakora >= 18 ? 'felnott' : 'gyerek';
console.log(felnottvagygyerek);

// Switch szerkezet:

// Ezt akkor érdemes használni amikor igazán bonyolult az if szerkezet.
// Használat: switch(feltétel)
// A feltételnek nem muszáj logikai értéknek lennie, lehet szöveg is.
// A case olyan mint az if, ezek is esetek. 
// Kell bele break ugyanis akkor a program végigfutna és a legutólsó lenne az eredmény.
// A default ág (alapértelmezett ág) akkor fut le ha a felette lévők egyike sem teljesül. Nem kell utána break.

var film = 'Terminátor';
var mufaj;

// Ebben az esetben azt nézzük, hogy mi a film nevű változó értéke és aszerint adunk a műfajnak értéket.

switch(film){
    case 'Shrek' : mufaj = 'mese';
        break;
    case 'Terminátor' : mufaj = 'akció';
        break;
    case 'Utazók' : mufaj = 'scifi';
        break;
    default:
        mufaj = 'Besorolatlan';
}

console.log(mufaj);


var kor = 40;
var nev = 'Béla';

// Itt az az ág fog lefutni amely igaz lesz.
switch(true){
    case kor < 13:
        console.log(nev + ' kisfiú');
        break;
    case kor >= 13 && kor < 20: // && jelentése: és.
        console.log(nev + ' tinédzser');
        break;
    case kor >= 20 && kor < 30:
        console.log(nev + ' fiatal ember');
        break;
    default:
        console.log(nev + ' igazi férfi')
}
