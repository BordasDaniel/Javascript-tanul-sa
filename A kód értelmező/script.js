// A JS kód futtatásához mindig valamilyen futtatási környezetre van szükség.
// Ezek általában a böngészők szoktak lenni.
// Maga a böngésző amely futtatja a JS kódot tartalmaz egy úgynevezett JS motort, enginet.
// Maga a JS motor is egy program amely futtatja a JS kódunkat.
// Minden böngésző más és más (saját) motort használ a JS kódnak az értelmezésére.

// 1. fázis: Értelmezés és hiba keresése:

// Amikor a JS motor megkapja a kódot akkor először elkezdi értelmezni azt.
// Tehát a JS motoron belül van egy úgynevezett értelmező vagy angolul Parser.
// Ez az értelmező elkezdi sorról sorra beolvassa a kódot és ellenőrzi azt, hogy megfelel-e az előírásoknak.
// Tehát a Parser pontosan tudja, a JS formai és tartalmi szabályait, hogy eltudja dönti a kód helyes-e vagy hibás.
// Ha ez a Parser valamilyen hibát talál akkor azt jelzi valahogyan(pl.: fejleszői konzolban) és megszakítja a JS kód futtatását.

// 2. fázis: Gépi kóddá alakítás:

// Ha az értelmező hibátlannak találja a kódunkat akkor az értelmező előállít egy másikfajta adatstruktúrát a kódunkból amelyből el fog keszülni az úgynevezett gépi kód.
// Vagyis ez egy olyan nyers kódformátum amelyet a számítógép közvetlen értelmezni tud.

// 3. fázis: Gépi kód futtatása:

// Végül pedig ezt a gépi kódunkat fogja a számítógép futtatni.