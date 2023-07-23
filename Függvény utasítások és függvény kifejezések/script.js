// Függvény kifejezés

// function kulcsszóval kezdjük és nem adjuk meg a nevét. 
// Ahhoz, hogy viszont működjön hozzá kell rendelni egy változóhoz.


//function(parameters){}

var eletSzakaszok = function(nev, kor){
    switch(true){
        case kor < 13:
            return nev + ' gyerek';
            break;
        case kor >= 13 && kor <= 20:
            return nev + ' tinédzser';
            break;
        case kor > 20 && kor <= 30:
            return nev + ' ifjú';
            break;
        case kor > 30 && kor <= 50:
            return nev + ' középkorú';
            break;
        default:
            return nev + ' idős';
    }
}

console.log(eletSzakaszok('Kati', 12));
console.log(eletSzakaszok('Peti', 20));
console.log(eletSzakaszok('Márk', 67));


// Függvény deklarációval: 
// function eletSzakaszok(nev, kor){}


// Különbség a függvény utasítások és függvény kifejezések között:
// Egy JS kifejezés általában több programkódot rejt maga mögött amely mindig valamilyen értéket rejt maga mögül, függetlenül attól, hogy hány soros a kód a végeredmény mindig egyetlen egy érték lesz.
// Kifejezések pl.: 5*5 (25), typeof 'hello' (string), valamilyen konkrét értéket kapunk vissza.
// Az utasítások valamilyen funkciót hajtanak végre de nem eredményeznek azonali értéket.
// pl.: Maga a függvény deklaráció is egy utasítás.

