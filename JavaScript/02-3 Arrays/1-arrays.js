// ARRAYS

// 1. Definir un array: new Array

const frutas = new Array("Mango", "Banano", "Lulo");

console.log(typeof frutas);
console.log(frutas);

// 2. Indicando la longitud
const campers = new Array(5);

console.log(campers);
campers[0] = 1;
campers[2] = "Paco";
campers[4] = "Luis";
console.log(campers);

// 3. LLenarlo con un valor predeterminado
const votos = new Array(10).fill(0);

console.log(votos);

