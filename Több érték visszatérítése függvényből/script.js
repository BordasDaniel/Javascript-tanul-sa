// Nem lehet egynél több értéket visszatéríteni a függvényből a JS-ben.

// Ebben az esetben csak az utolsó változó kapja meg az értéket.
// Illetve csakis az utolsó értéket a kettő közül.

function Ertekek_01(){
    let elso_ertek = 12;
    let masodik_ertek = 31;
    return elso_ertek, masodik_ertek 
}

let kapott_ertek01, kapott_ertek02 = Ertekek_01();
console.log(kapott_ertek01, kapott_ertek02); // undefined, 31

// Nem lehet egy változónak több értéket adni, függvényből.
// Ebben az esetben mindig az utolsó értéket amelyet visszatérített fogja megkapni.

let kapott_ertek03 = Ertekek_01();
console.log(kapott_ertek03); // 31

// Viszont tömböket és objektumokat lehet továbbítani.
// Ezt structuring assignment-nek hívjuk.
// Ajánlott az objektumok használata a tömbök helyett.
// Viszont ha az értékek egyszerűek, szimplák pl.: Tuple vagy koordináta adatok.
// A tömbnél könnyen ellehet felejteni, hogy melyik érték melyik és nehezebb később hozzáadni értékeket.

// Tömbbel:

function Ertekek_02(){
    let elso_ertek = 12;
    let masodik_ertek = 31;
    return [elso_ertek, masodik_ertek] // Ebbem az esetben felülírja a már meglévő lista elemeinek az értékét.
}

const [kapott_ertek04, kapott_ertek05] = Ertekek_02();
console.log(kapott_ertek04, kapott_ertek05);

// vagy:

const ertekek = Ertekek_02();
const kapott_ertek06 = ertekek[0];
const kapott_ertek07 = ertekek[1];

console.log(kapott_ertek06, kapott_ertek07);

// Objektummal:

function Ertekek_03(){
    return {
        elso_ertek: 12,
        masodik_ertek: 31,
    }
}

const {elso_ertek, masodik_ertek} = Ertekek_03();
console.log(elso_ertek, masodik_ertek); 

// Szabály: Egyeznie kell a változónak a kulcs nevével! Egyébként undefined lesz.

const {asd, dsa} = Ertekek_03();
console.log(asd, dsa);


const ertekek02 = Ertekek_03();
const kapott_ertek10 = ertekek02.elso_ertek;
const kapott_ertek11 = ertekek02.masodik_ertek;
console.log(kapott_ertek10, kapott_ertek11);