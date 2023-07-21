// sűt a nap és jó idő van:
// és jele : &&

var sutANap = true;
var joIdoVan = true;

if (sutANap && joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}

// Ha bármely a 2 közül hamisnak bizonyul akkor az else ág fog lefutni(false).

sutANap = true;
joIdoVan = false;

if (sutANap && joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}

sutANap = false;
joIdoVan = true;

if (sutANap && joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}


sutANap = false;
joIdoVan = false;

if (sutANap && joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}

// Ha süt a nap vagy jó idő van akkor jó kedvem van:
// vagy jele: ||

sutANap = false;
joIdoVan = true;

if (sutANap || joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}

// Itt ha bármely feltétel teljesül akkor a true ág fog lefutni. Ha mind a 2 igaz akkor is.
// Csak akkor lesz hamis, ha mind a 2 állítás hamis.

sutANap = true;
joIdoVan = false;

if (sutANap || joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}

sutANap = false;
joIdoVan = false;

if (sutANap || joIdoVan){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}


// Tagadás operátor: !

!sutANap // True -> False
sutANap == true, sutANap != false; // Ez a 2 ugyanaz.

sutANap = true;
joIdoVan = false;

if (sutANap != false && joIdoVan != false){
    console.log('Jó kedvem van');
} else{
    console.log('Rossz kedvem van');
}