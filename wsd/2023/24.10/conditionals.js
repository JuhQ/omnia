let a = "5";
let b = "6";
let c = 6;

console.log(a);
console.log(b);

console.log(a === b);

// jos vertailun tulos on tosi (true), siirrytään aaltosulkujen määrittelemään lohkoon (block scope)
if (a === b) {
    // ...
}

// ..

if (a !== b) { // voi esiintyä if-lausekkeessa kerran
    // ...
} else if (a === c) { // voi esiintyä 0-n kertaa
    // ...
} else { // voi esiintyä 0-1 kertaa
    // ...
}


// maagisen luvun kanssa vertailu
if (a > 10) {
    // ...
}

const kengänKoko = 40;

if (kengänKoko > 50) {
    console.log("isot kengät");
}

const isonKenkäKoonRaja = 50;

if (kengänKoko > isonKenkäKoonRaja) {
    // ...
}


// between range -vertailu

const minimiArvo = 5;
const maksimiArvo = 10;

let minunArvo = 7;


if (minimiArvo <= minunArvo && maksimiArvo >= minunArvo) {
    console.log("Annettu arvo on minimi- ja maksimiarvojen sisällä.");
}

// merkkijonojen määritykset:
// "" <- doublequote
// '' <- singlequote
// `` <- backtick


if (minimiArvo <= minunArvo && maksimiArvo >= minunArvo) {
    console.log(`Annettu arvo (${minunArvo}) on minimi- (${minimiArvo}) ja maksimiarvojen (${maksimiArvo}) sisällä.`);
}


// esimerkki, ei tule toimimaan (?)
if (minimiArvo === maksimiArvo && maksimiArvo === minunArvo && a === b && a > 2 && c >= b && b < a) {
    // ...
}


const dateObjekti = new Date();
const tiistainNumero = 2; // maaginen numero muuttuu epämaagiseksi "hyvällä" nimeämiskäytännöllä

if (minimiArvo > a && b === maksimiArvo || dateObjekti.getDay() > tiistainNumero && Boolean("1") === Boolean("0")) {
    // ...
}


// rivityksen avulla pitkiin if-lausekkeisiin järkeä
if (
    minimiArvo > a &&
    b === maksimiArvo ||
    dateObjekti.getDay() > tiistainNumero &&
    Boolean("1") === Boolean("0")
) {
    // ...
}

// toinen tapa rivittää pitkä if-lauseke

if (
    minimiArvo > a
    && b === maksimiArvo
    || dateObjekti.getDay() > tiistainNumero
    && Boolean("1") === Boolean("0")
) {
    // ...
}



// if-lausekkeen ehtoja voidaan ryhmittää käyttämällä sulkuja ()
// huom. huono sisennys esimerkissä(?)

if (
    (minimiArvo > a && b === maksimiArvo || dateObjekti.getDay() > tiistainNumero)
    && Boolean("1") === Boolean("0")

    ) {
    // ...
}


// pitkän if-lausekkeen lyhennys
const hyvinNimetty1 = minimiArvo > a;
const hyvinNimetty2 = b === maksimiArvo;
const hyvinNimetty3 = dateObjekti.getDay() > tiistainNumero;
const hyvinNimetty4 = Boolean("1") === Boolean("0");

if (hyvinNimetty1 && hyvinNimetty2 || hyvinNimetty3 && hyvinNimetty4) {
    // ...
}

if (
    hyvinNimetty1 &&
    hyvinNimetty2 ||
    hyvinNimetty3 &&
    hyvinNimetty4
) {
    // ...
}


const min = 1;
const max = 5;
let arvo = 3;

console.log(min < arvo > max);
