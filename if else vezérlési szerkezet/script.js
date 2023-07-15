// If vagy if else:

// Valamilyen logikai érték (igaz vagy hamis) alapján dönti el, hogy milyen műveletet hajtson végre.
// Használat: if kulcsszó + (feltétel) + {Ide jön a törzs}
// else ág akkor fut le, ha az ifben megfogalmazott feltétel nem teljesül(hamis).


var fiuk, lanyok;

fiuk = 23;
lanyok = 15;

if (fiuk > lanyok){
    console.log('A fiúk vannak többen.');
}

fiuk = 23;
lanyok = 35;

if (fiuk < lanyok){
    console.log('A lányok vannak többen.');
}


fiuk = 23;
lanyok = 35;

if (fiuk > lanyok){
    console.log('A fiúk vannak többen.');
} else {
    console.log('A lányok vannak többen.');
}

//--------

var belakora = 12;
var felnott = false;


// Ide nem kell a vizsgálat, hiszen alapból egy boolean értékkel rendelkezünk.
// Az if része csak akkor teljesül, ha a vizsgálat eredménye true.
// Mivel ez itt alapból false ezért az else ág fog rögtön lefutni.

if (felnott === true){
    console.log('Béla már felnőtt');
} else{
    console.log('Béci még gyerek');
}

felnott = true;

if (felnott){
    console.log('Béla már felnőtt');
} else{
    console.log('Béci még gyerek');
}

// Ebben az esetben a false ág soha nem fog lefutni.
// Jelzi is a VSCode szürkével.

if (true){
    console.log('Béla már felnőtt');
} else{
    console.log('Béci még gyerek');
}

// Itt pedig a true ág soha nem fog lefutni.
// Jelzi is a VSCode szürkével.

if (false){
    console.log('Béla már felnőtt');
} else{
    console.log('Béci még gyerek');
}

// else if szerkezet:

// Ez a szerkezet egy újabb feltételt fogalmaz meg.
// Csak akkor kezdi el vizsgálni, ha az if ág nem teljesül.


let ido = 6;

if (ido < 12){
    console.log('Reggel van.');
} else if(ido < 18){
    console.log('délután van');
} else{
    console.log('Este van');
}

ido = 12;

if (ido < 12){
    console.log('Reggel van.');
} else if(ido < 18){
    console.log('délután van');
} else{
    console.log('Este van');
}

ido = 20;

if (ido < 12){
    console.log('Reggel van.');
} else if(ido < 18){
    console.log('délután van');
} else{
    console.log('Este van');
}