// Ha van több utasításunk amelyet később többször is le kell futtani a programom belül.
// Akkor ahelyett, hogy ezt többször is megírnánk a kódban ahányszor szükség van rá az utasításokat beletesszük egy függvénybe.
// Soha ne helyezd el ugyanazt az utasítás sorozatot egy programon belül többször! Ez minden nyelvre vonatkozik.
// Helyette inkább csinálj függvényeket és azokat hívd meg ahányszor csak szükségesek.
// A függvényeket tárolókként lehet elképzelni amelyeknek átadunk paramétereket, argumentumokat.
// Illetve a függvény vissza is adhat egy értéket.
// Használata: function kulcsszó + függvény neve + (argumentum, ha nincs akkor üres lesz a zárójel) + kapcsoszárójel nyit + új sorban egy tabulátorral beljebb a függvény törzse + kapcsoszárójel zár.
// Hívása: függvény neve + (argumentum, ha nincs akkor üres) + ;

function hello(nev){
    console.log('Helló ' + nev + '!');
    // alert('Helló ' + nev + '!'); // felugró ablak
}

hello('Géza');

// Ha fel akarjuk használni a függvény által adott értéket akkor return kulcsszót kell használni.

function hello2(nev){
    return ('Helló ' + nev + '!');
}

// Rakhatjuk egy változóba vagy kiirathatjuk a console-ba.//

var kiirat = hello2('Béla');
console.log(kiirat);
console.log(hello2('Béla'));

// Téglalap kerület, terület egy függvényen belül.

function teglalapKeruletTerulet(a, b, funkcio){
    var eredmeny;
    if (funkcio == 'kerület'){
        eredmeny = (a + b) * 2
    } else if (funkcio == 'terület'){
        eredmeny = a * b
    } else {
        return 'Hibás funkció'
    }
    
    return funkcio + ' = ' + eredmeny

}

console.log(teglalapKeruletTerulet(5, 4, 'kerület'));
console.log(teglalapKeruletTerulet(5, 4, 'terület'));
console.log(teglalapKeruletTerulet(5, 4, 'hiba'));

// Kimondatlan szabály:
// Ne csináljunk olyan függvényt ami több fajta műveletet végez.
// Egy függvény egy művelet
// Erre a feladatra a helyes megoldás ha különféle függvényeket írunk.


function TeglalapKerulete(a, b){
    return 'A téglalap kerülete ' + (a+b) * 2
}

function TeglalapTerulete(a, b){
    return 'A téglalap területe: ' + a*b
}


funkcio = prompt('A téglalap területét vagy kerületét szeretnéd kiszámolni?');
a = parseInt(prompt('Kérlek add meg az "a" oldalt:'));
b = parseInt(prompt('Kérlek add meg a "b" oldalt:'));

switch(funkcio){
    case 'kerület': 
    case 'Kerület':
        alert(TeglalapKerulete(a, b));
        break;
    case 'terület':
    case 'Terület':
        alert(TeglalapTerulete(a, b));
        break;
    default:
        alert('Hibás funkció!');
}
