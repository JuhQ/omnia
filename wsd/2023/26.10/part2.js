
const minunOrFunktio = (a, b) => {
    console.log(a || b || "fallback arvo");
}

// minunOrFunktio();
// minunOrFunktio("hei");
// minunOrFunktio(true);
// minunOrFunktio(false);
// minunOrFunktio(undefined);

// minunOrFunktio("hei", "maailma");
// minunOrFunktio(false, "maailma");
// minunOrFunktio(undefined, "maailma");
// minunOrFunktio(0, "maailma");
// minunOrFunktio(1, "maailma");


const minunAndFunktio = (a, b) => {
    console.log({a, b});
    console.log(a && b && "arvo joka tulee vain jos a ja b on truthy");
}

minunAndFunktio();
minunAndFunktio("hei");
minunAndFunktio(true);

minunAndFunktio(false);
minunAndFunktio(null);
minunAndFunktio(undefined);
minunAndFunktio(0);
minunAndFunktio(1);

minunAndFunktio(false, true);
minunAndFunktio(true, true);
minunAndFunktio("hei", "maailma");

const purettuAndFunktio = (a, b) => {
    console.log("purettu:", {a, b});

    if (a) {
        if (b) {
            console.log("purettu: arvo tulee vain jos a ja b on truthy")
        } else {
            console.log(b);
        }
    } else {
        console.log(a);
    }
}

purettuAndFunktio();
purettuAndFunktio("hei");
purettuAndFunktio(true);

purettuAndFunktio(false);
purettuAndFunktio(null);
purettuAndFunktio(undefined);
purettuAndFunktio(0);
purettuAndFunktio(1);

purettuAndFunktio(false, true);
purettuAndFunktio(true, true);
purettuAndFunktio("hei", "maailma");

