// A futtatási környezet(Execution Context): Ahol a JS kód végrehajtódik.
// A futtatási verem(Execution Stack): A végrehajtási sorrendet jelenti.

// A futtatási környezet azt a környezetet jelenti ahol a kód éppen fut.
// A program vezérlése nem csak egy szinttéren zajlik. Van egy végrehajtási lánc.

// Minden JS kódnak szüksége van egy olyan környezetre ahol végrehajtódhat, lefuthat.
// A futási környezetnek több szintjén, rétegét, hatókörét, idegen szóval scope-ját különböztetjük meg.
// Létezik egy alapértelmezett hatókör, ez a globális hatókör.
// Mik számítanak globálisnak: Minden tartalom amelyek nem egy másik függvény belsején vannak, hanem minden máson kívül.
// A JS-ben minden Objektum éppen ezért minden ami ebben a globális hatókörben van az egy globális objektumhoz tartozik ehhez adódik hozzá aútómatikusan.
// Ez a globális objektum a window nevű objektum.


var teszt = 10;
console.log(teszt); // Ezt a változót elérhetjük a window nevű objektumon belűl is.
console.log(window.teszt);
console.log(window['teszt']);

function tesztt(){
    console.log(teszt); // Mivel globális szinten hoztam létre a változót ezért elérem a függvényen belül is.
}

tesztt(); // Ezt a függvényt elérhetjük a window-on belül is.
window.tesztt();

// Tehát a globális térben létrehozott változók és függványek elérhetők a window objektumon keresztül.

// A függvényen belül lokális vagy helyi futtatási környezet jön létre, nem pedig globális.
// Az előbbi példánál a teszt nevű változó és a tesztt függvény a globális hatókörben vannak.
// Amikor a tesztt függvényt meghívjuk akkor a vezérlés átadódik a függvénynek és bekerül egy lokális futtatási környezetbe, ezután pedig elindul egy végrehajtási lánc.
// Miután a függvény elvégezte dolgát kilépünk a függvényből és ismét a globális futtatási környezetben találjuk magunkat.

// Verem működése:

// A verembe tetszőleges számú dolgot tehetünk és onnan az utolsónak berakott dolog vehető ki először.

// A személy változó és maga a három függvény is globális futtatási környezetben foglal helyet, mert nem egy másik függvényen belül definiáltuk őket.

// A program műküdése:

// Létrehozzuk a személy változót és a három függvényt. Itt vagyunk a globális futtatási környezetben ez a jelenlegi futtatási környezet.
// Meghívjuk az egy függvényt. Amikor belépünk az egy függvénybe akkor létrejön egy újabb futtatási környezet, belerakjuk a verembe az egy függvénynek a futtatási környezetét.

// Tehát belépünk a függvénybe, a függvényen belül létrehozzuk az udv1 nevű változót, ezután a függvényen belül meghívjuk ketto nevű függvényt.
// Tehát a ketto nevű függvénynek adódik át a vezérlés, ebből adódóan a veremhez hozzáadjuk a ketto nevű függvénynek a futtatási környezetét.
// A ketto nevű függvényben létrejön egy udv2 nevű változó ezután meghívjuk a harom nevű függvényt.

// Ezután a veremhez hozzáadódik a harom nevű függvénynek a futtatási környezete.
// A harom nevű függvényben létrejön egy udv3 és egy eredmeny3 nevű változó, majd kiiratjuk az eredmeny3 nevű változót.
// Ezután a függvényből kilépünk, befejezi futását ebből következik, hogy a veremből kiveszi a motor a harom nevű függvény futtatási környezetét, mivel már nincs rá szükség.

// Ezután visszakerül a vezérlés a ketto nevű függvényhez.
// A vezérlés az erdemeny2 nevű változó létrehozására ugrik, majd kiiratja a konzolba.
// Ezután a veremből kikerül a ketto nevű függvény futtatási környezete is és átadódik a vezérlés az egy nevű függvénynek.

// Ezután vezérlés az eredmeny1 nevű létrehozására ugrik, majd a kiiratására.

// Ezután a veremből az egy nevű függvény futtatási környezete is kikerül a veremből.
// Végül visszatérünk a globális futtatási környezetbe. Visszatértünk az egy nevű függvény hivásához, vagyis vissza jött a vezérlés a globális szintre.

// Amit a verembe először rakunk azt fogjuk utoljára kivenni.


var szemely = 'Misi';

function egy(){
    var udv1 = 'Szia ';
    ketto();
    var eredmeny1 = udv1 + szemely;
    console.log(eredmeny1);
}

function ketto(){
    var udv2 = 'Szervusz ';
    harom();
    var eredmeny2 = udv2 + szemely;
    console.log(eredmeny2);
}

function harom(){
    var udv3 = 'Helló ';
    var eredmeny3 = udv3 + szemely;
    console.log(eredmeny3);
}

egy();