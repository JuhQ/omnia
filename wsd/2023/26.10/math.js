console.log("Math.pow 2^2", Math.pow(2, 2));
console.log("Math.pow 2^4", Math.pow(2, 4));

console.log("pow with **, 2^2", 2 ** 2);
console.log("pow with **, 2^4", 2 ** 4);

/*
*
/
+
-
**

+=
-=
*=
/=


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
*/

let arvo = 2;

console.log("arvo", arvo);
arvo += 1;
console.log("arvo", arvo);
arvo -= 1;
console.log("arvo", arvo);


arvo *= 10;
console.log("arvo", arvo);

arvo /= 10;
console.log("arvo", arvo);

arvo **= 10;
console.log("arvo", arvo);

console.log("arvo", arvo % 2);


for (let i = 0; i < 5; i++) {
    console.log("modulo", i % 2, Boolean(i % 2) ? "jippii" : "Haloo");
}

// https://thenextweb.com/news/google-chromes-javascript-engine-finally-returns-actual-random-numbers


for (let i = 0; i < 10; i++) {
    console.log("Random arvo:", Math.round(Math.random() * 100));
}

for (let i = 0; i < 10; i++) {
    console.log("Random arvo:", Math.random());
}


console.log("Math.min", Math.min(1,2,3,4));
console.log("Math.min", Math.min(1,2,3,4,-5));
console.log("Math.min", Math.min(5,4,3,2,1));
console.log("Math.min from array (tulee NaN)", Math.min([1,2,3,4,5]));
console.log("Math.min from array", Math.min(...[1,2,3,4,5]));


console.log("Math.max", Math.max(1,2,3,4));
console.log("Math.max", Math.max(1,2,3,4,-5));
console.log("Math.max", Math.max(5,4,3,2,1));
console.log("Math.max from array (tulee NaN)", Math.max([1,2,3,4,5]));
console.log("Math.max from array", Math.max(...[1,2,3,4,5]));
