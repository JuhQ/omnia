let i = 1;
while(i <= 10) {
    console.log("while i", i, Math.floor(i), Math.ceil(i), Math.round(i));

    if (Math.floor(i) === 5) {
        break;
    }

    i += 0.1;
}

console.log("---");

const lista = [12,3,4,5,6];

for (let i = 0; i < lista.length; i += 2) { // i++
    console.log("loop", i, lista[i]);
}

console.log("---");


for (let i = 1; i < lista.length; i += 2) { // i++
    console.log("loop", i, lista[i]);
}

console.log("---");

// for (let i = 0; i <= 100; i += 3) {
//     console.log("loop", i);

//     if ((i > 30 && i < 40) || (i > 50 && i <= 70)) {
//         continue;
//     }

//     console.log("hello");
// }

// console.log("---");


// for (let i = 0; i <= 100; i += 3) {
//     console.log("loop", i);

//     if (i >= 50) {
//         continue;
//     }

//     console.log("hello");
// }

// console.log("---");


// for (let i = 0; i <= 100; i += 3) {
//     console.log("loop", i);

//     break;

//     console.log("hello");
// }

// console.log("---");



// for (let i = 0; i <= 100; i += 3) {
//     console.log("loop", i);

//     if (i >= 50) {
//         break;
//     }

//     console.log("hello");
// }

// console.log("---");


// for (let i = 0; i <= 10; i += 2) {
//     console.log("loop", i);
// }

// console.log("---");

// for (let i = 0; i < 5; i++) {
//     console.log("loop", i);
// }

// console.log("---");

// for (let i = 1; i <= 5; i++) {
//     console.log("loop", i);
// }

// console.log("---");

// for (let i = 5; i >= 0; i--) {
//     console.log("loop", i);
// }
// console.log("---");

// for (let i = 5; i > 0; i--) {
//     console.log("loop", i);
// }