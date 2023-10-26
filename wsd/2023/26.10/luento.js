
let a = 1;
let b = 1;

// === = verrataan arvoja ja tyyppejä keskenään
if (a === b) {
    console.log("1. a on sama kuin b: sisältö ja tyyppi mätsää");
}

b = "1";

// käytä tätä tapaa
if (a === b) {
    console.log("2. a on sama kuin b: sisältö ja tyyppi mätsää");
}

// .. älä tätä
if (a == b) {
    console.log("3. a on sama kuin b: sisältö mätsää, tyyppi ei välttämättä");
}

// määrittää muuttujan a arvoksi muuttujan b arvo, ei oikea ehtolauseke vaikka "toimii"
if (a = b) {
    console.log("4. = merkki määrittää arvon, ei vertaile arvoja");
}


let message = "Arvot puuttuu";

if (a === b) {
    message = "Arvot löytyy";
}

console.log("Arvomessage:", message);


// ternary operaattori: 3 osaa; ehtolauseke ? true : false
const ternaryArvo = a === b ? "true haara" : "false haara";

// ei kannata tehdä näin, näytän kuitenkin
const ternaryArvo2 = a === b ? a > 0 ? "truen true" : "truen false" : "false haara";

const ternarynTrueHaaranMuuttuja = a > 0 ? "truen true" : "truen false";
const ternaryArvo2_ = a === b ? ternarynTrueHaaranMuuttuja : "false haara";

if (a === b) {
    if(a > 0) {
        console.log("truen true");
    } else {
        console.log("truen false");
    }
} else {
    console.log("false haara");
}

const ternaryArvo3 =
    a === b ?
        a > 0 ?
            "truen true" :
            "truen false" :
        "false haara";
const ternaryArvo4 = a === b ?
    a > 0 ?
        "truen true" :
        "truen false" :
    "false haara";

const ternaryArvo5 =
    a === b
        ? a > 0
            ? "truen true"
            : "truen false"
        : "false haara";


console.log("Ternary arvo 2:", ternaryArvo2);

const ternaryArvoFormatted = a === b ?
    "Arvot löytyy" :
    "Arvot puuttuu";

const ternaryArvoFormatted2 =
    a === b ?
        "Arvot löytyy" :
        "Arvot puuttuu";

console.log("Ternarysta tuleva viesti:", ternaryArvo);

if (a === b) {
    console.log("a === b, olemme true haarassa");
} else {
    console.log("a !== b, olemme false haarassa");
}


const vertailunTulos = a === b;

console.log("Vertailun tulos:", vertailunTulos, a === b);

// jos if-lausekkeen vertailu on truthy, mennään sen block scopeen
// katso: https://dorey.github.io/JavaScript-Equality-Table/
if (vertailunTulos) {
    console.log("Vertailun evaluoituu trueksi");
}

if (vertailunTulos === true) {
    console.log("Vertailun evaluoituu trueksi");
}

let muuttuja = false;

let message2 = muuttuja;
if (muuttuja) {
    message2 = "Jotain sisältöä";
}

console.log("Arvomessage taas täällä:", message2);

let message3 = muuttuja && "Jokin sisältö";
console.log("Message3:", message3);

muuttuja = "Hello maailma";

let message4 = muuttuja && "Jokin sisältö";
console.log("Message4:", message4);

muuttuja = false;
// ctrl+shift+7 kommentoi valitun rivin
// muuttuja = 123;

let message5 = muuttuja || "Jokin muu arvo sillä muuttuja oli falsy";
console.log("Message5:", message5);

// let message2 = muuttuja;
// if (!muuttuja) {
//     message2 = "Jotain sisältöä";
// }


let toinenMuuttuja = "Tämä arvo menee muuttujaan sillä tämä muuttuja ei ole falsy";

let message6 = muuttuja || toinenMuuttuja || "Jokin muu arvo sillä muuttuja oli falsy";
console.log("Message6:", message6);

toinenMuuttuja = false;

let message7 = muuttuja || toinenMuuttuja;
console.log("Message7:", message7);




