
local scope
global scope

mdn global scope



```js

// tässä ollaan global scopessa
let muuttuja = 0;

{ // tämä on block scope

    // tässä ollaan local scopessa

// on mahdollista muuttaa local scopessa arvoja jotka on määritelty global scopessa
    muuttuja = 1

    let localMuuttuja = 1;
}

// ei ole mahdollista global scopessa muuttaa muuttujan arvoa joka on määritelty local scopessa
localMuuttuja = 2;

```


```js

{ // tämä on block scope
    const minunMuuttuja = 123;
    console.log("minunMuuttuja", minunMuuttuja);
    console.log({minunMuuttuja: minunMuuttuja});
    console.log({minunMuuttuja});
}

console.log("minunMuuttuja scopen ulkopuolella", minunMuuttuja);

```

```js

const muuttuja1 = "muuttuja";
function minunFunktio() {
    const muuttuja1 = 123;
    const muuttuja2 = "jotain muuta";
    console.log("muuttuja1", muuttuja1);
}

minunFunktio();

console.log("muuttuja1 funktion ulkopuolella", muuttuja1);


if(...) {
    const uusiMuuttuja = 1;
}



```






