// Arrays

const paises = new Array(5);

// paises[0] = "Colombia";
// paises[1] = "Venezuela";
// paises[2] = "Ecuador";
// paises[10] = "Brasil";

// // Recorrido por indice
// for (let i = 0; i < paises.length; i++) {
//     console.log(paises[i]);
// }

// Declaracion literal ([])
const frutas = []; // array vacio
const mixtos = ["papas", "patacones", "chicharrones", "arepas"];

// Declaracion con Array y elementos específicos
const frutasExotica = new Array("Kiwi", "Chontaduro", "Granada");

// Declaracion con Array.from()
const letras = Array.from("Hola"); //['H', 'o', 'l', 'a']

// Declaración con Array.of
const numeros = Array.of(7) //[7]
const numeros2 = Array.of(5, 10, 20) // [5, 10, 20]


// Recorrido de los arrays por los elementos
for (let fe of frutasExotica) {
    console.log(fe);
}

// métodos de los arrays


// Metodo push : Agrega al final
numeros.push(13);
console.log(numeros);

// Metodo unshift : metodo agrega al inicio
numeros.unshift(80);
console.log(numeros);

// metodo pop : metodo elimina el último elemento
numeros.pop();
console.log(numeros);

// metodo shift : elimina el primer elemento
numeros.shift();
console.log(numeros);

// metodos funcionales

// metodo map
// recorre el array y crea uno nuevo aplicandole una funcion a cada elemento

//const frutasExotica = new Array("Kiwi", "Chontaduro", "Granada");
console.log(frutasExotica.map(fruta => fruta.toUpperCase()));

// metodo filter
// crea un array con todos los elementos que cumplen la condicion de una funcion
console.log(
    frutasExotica.filter(f => f.length > 5)
);

console.log(
    frutasExotica.filter(f => { 
        let cantVocales = 0;
        for (let letra of f) {
            switch (letra) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    ++cantVocales;
                    break;
            }
        }
        return cantVocales > 3;
    })
);

// foreach
// ejecuta una funcion por cada elemento del array
// emails.foreach(e => enviarEmail(e));
// for (let email of emails) {
//     enviarEmail(email);
// }

frutasExotica.forEach(f => console.log(f.toUpperCase()));

// some
// verifica si al menos un elemento cumple con la condición
console.log(
    frutasExotica.some(f => f.length > 5)
);

// every
// verifica si todos cumplen con una la condición
console.log(
    frutasExotica.every(f => f.length > 5)
);

// find()
// Busca y devuelve el primer elemento que cumpla con la condición
console.log(
    frutasExotica.find(f => f.length > 5)
);


