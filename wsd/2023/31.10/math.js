console.log("math?");

console.log("10000", 10000);
console.log("10000", 1e4);
console.log("10000000000", 1e100);
console.log("iso luku", 10000000000000000000000000000000000);

console.log("pieni luku", 6.80370981270912387098744e-11);
console.log("pieni luku suurempi kuin 6?", 6.80370981270912387098744e-11 > 6);
console.log("pieni luku", 6.808744e-6);

console.log("before type casting", "1e10");
console.log("type casting", Number("1e10"));
console.log("type casting", Number("2e-2"));


const exponentti = (base, exponent) => {
    return Number(`${base}e${exponent}`);
}

console.log("exponentti", exponentti(32, 30));

// 6.80370981270912387098744e-11

// +
// -
// *
// /
// **
console.log("--------");


console.log("3+3", 3+3);
console.log("3-3", 3-3);
console.log("3*3", 3*3);
console.log("3/3", 3/3);

// potenssiin kaksi eri tapaa
console.log("3**3", 3**3);
console.log("math pow", Math.pow(3, 3));

const omaPow = (a, b) => {
    return a ** b;
}

const omaPow2 = (a, b) =>
    a ** b;

const omaPow3 = (a, b) => {
    console.log("a", a);
    return a ** b;
}

function omaPow4(a, b) {
    return a ** b;
}

const omaPow5 = function(a, b) {
    return a ** b;
}

const omaPow6 = (a, b) => Math.pow(a, b);

console.log("omapow", omaPow(3, 3));
console.log("omapow2", omaPow2(3, 3));
console.log("omapow3", omaPow3(3, 3));
console.log("omapow4", omaPow4(3, 3));
console.log("omapow5", omaPow5(3, 3));
console.log("omapow6", omaPow6(3, 3));



console.log("Kokeilu");
