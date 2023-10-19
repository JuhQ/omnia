
mdn function
mdn function declaration

```js

// määritys
const funktio1 = () => {

}

funktio1(); // kutsu, palautusarvo on undefined


const funktio2 = () => {
    return 1;
}

funktio2(); // palautusarvo on 1

```

```js

function funktio3() { ... }
funktio3();

function funktio3_1() { return "moi"; }
funktio3_1();

const funktio4 = function() { ... }
funktio4();
const funktio4_1 = function() { return 123; }
funktio4_1();
```

funktio ilman aaltosulkeita
```js
const funktioIlmanAaltosulkeita1 = () => 1;
const funktioIlmanAaltosulkeita2 = () => { return 1; }


funktioIlmanAaltosulkeita1(); // 1
funktioIlmanAaltosulkeita2(); // 1

```

funktiot ovat "first class citizen"

```js

const uusiFunktio = (arvo) => arvo();

const toinenFunktio = () => "moi maailma";


uusiFunktio(toinenFunktio);

uusiFunktio(() => "Hello world");

uusiFunktio(function() { return 500; });



```


```js

// const arvo1 = ....
const sum = (arvo1, arvo2) => {
    const summattuArvo = arvo1 + arvo2;

    return summattuArvo;
}

console.log("summaus", sum(1, 2));

```

Funktion yksi hyödyistä on uusiokäytettävyys

```js

const laskeLuvutYhteen = (arvo1, arvo2, arvo3) => {
    const summa = arvo1 + arvo2 + arvo3;
    return summa;
}

laskeLuvutYhteen(1, 2, 3);
laskeLuvutYhteen(1, 2, 3);
laskeLuvutYhteen(1, 2, 3);
laskeLuvutYhteen(1, 2, 3);
laskeLuvutYhteen(1, 2, 3);
laskeLuvutYhteen(1, 2, 3);

1 + 2 + 3
1 + 2 + 3


```

```js
const laskeYhteenPositiivisetLuvut = (arvo1, arvo2, arvo3) => {
    let palautusArvo = 0;

    // if-statement
    if (arvo1 > 0) {
        palautusArvo += arvo1;
        const muuttuja = 1;
        // palautusArvo = palautusArvo + arvo1;
    }

    // muuttuja1 ei näy tässä

    // arvo2 > 0 on boolean vertailu
    if (arvo2 > 0) {
        palautusArvo += arvo2;
    }

    if (arvo3 > 0) {
        palautusArvo += arvo3;
    }

    return palautusArvo;
}

laskeYhteenPositiivisetLuvut(1, 2, 0); // 3
laskeYhteenPositiivisetLuvut(2, 2, 0); // 4
laskeYhteenPositiivisetLuvut(0, 2, 0); // 2
laskeYhteenPositiivisetLuvut(0, 0, 0); // 0
laskeYhteenPositiivisetLuvut(1, 1, 1); // 3


let palautusArvo = 0;

// if-statement
if (arvo1 > 0) {
    palautusArvo += arvo1;
    const muuttuja = 1;
    // palautusArvo = palautusArvo + arvo1;
}

// muuttuja1 ei näy tässä

// arvo2 > 0 on boolean vertailu
if (arvo2 > 0) {
    palautusArvo += arvo2;
}

if (arvo3 > 0) {
    palautusArvo += arvo3;
}


let palautusArvo = 0;

// if-statement
if (arvo1 > 0) {
    palautusArvo += arvo1;
    const muuttuja = 1;
    // palautusArvo = palautusArvo + arvo1;
}

// muuttuja1 ei näy tässä

// arvo2 > 0 on boolean vertailu
if (arvo2 > 0) {
    palautusArvo += arvo2;
}

if (arvo3 > 0) {
    palautusArvo += arvo3;
}


let palautusArvo = 0;

// if-statement
if (arvo1 > 0) {
    palautusArvo += arvo1;
    const muuttuja = 1;
    // palautusArvo = palautusArvo + arvo1;
}

// muuttuja1 ei näy tässä

// arvo2 > 0 on boolean vertailu
if (arvo2 > 0) {
    palautusArvo += arvo2;
}

if (arvo3 > 0) {
    palautusArvo += arvo3;
}


let palautusArvo = 0;

// if-statement
if (arvo1 > 0) {
    palautusArvo += arvo1;
    const muuttuja = 1;
    // palautusArvo = palautusArvo + arvo1;
}

// muuttuja1 ei näy tässä

// arvo2 > 0 on boolean vertailu
if (arvo2 > 0) {
    palautusArvo += arvo2;
}

if (arvo3 > 0) {
    palautusArvo += arvo3;
}


let palautusArvo = 0;

// if-statement
if (arvo1 > 0) {
    palautusArvo += arvo1;
    const muuttuja = 1;
    // palautusArvo = palautusArvo + arvo1;
}

// muuttuja1 ei näy tässä

// arvo2 > 0 on boolean vertailu
if (arvo2 > 0) {
    palautusArvo += arvo2;
}

if (arvo3 > 0) {
    palautusArvo += arvo3;
}

// muuttuja1 ei myöskään näy tässä

```


