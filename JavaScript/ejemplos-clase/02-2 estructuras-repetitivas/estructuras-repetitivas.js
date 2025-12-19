/* FOR

    Sintaxis
    for(inicializacion; parada; incremento) {
        expresiones;
    }
    
    Ejemplo:
    imprima la tabla de multiplicar de un numero dado.
*/

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i} `);
}

/* for .. of

    Sintaxis
    se usa para recorrer array, vectores o string. 
    for (let elemento of array) {
        expresiones;
    }
    
    Ejemplo
    Imprimir las consonantes de una frase.
*/

let frase = "yo solo se que nada se";

let frase_min = frase.toLowerCase();

let frase_result = "";
for (let letra of frase_min) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            break;
        default:
            frase_result += letra;
    }
}

console.log(frase_result);


/* for .. in

    Sintaxis
    Se usa para recorrer las propiedades de un objeto


    for (let clave in objeto) {
        expresiones;
    }
*/

/* while

    Sintaxis
    while (condicion) {
        expresiones;
    }
    
    Ejemplo:
    preguntar por la contraseña hasta se digite la correcta
*/

let contrasena = "shiley123";
let secreto = "sintaxis";
let i = -1;
let pal = ""
while (contrasena !== "sintaxis") {
    console.log("Error. contraseña inválida.\nVuelva a intentarlo.");
    pal += secreto.charAt(++i);
    contrasena = pal;
}
console.log("Bienvenido a la sala de los famosos");

/* do while

    Sintaxis:
    Primero hace y luego evalúa
    do {
        expresiones
    } while (condicion)

*/

i = -1;
pal = "";
contrasena = "";
do {
    console.log("Error. contraseña inválida.\nVuelva a intentarlo.");
    pal += secreto.charAt(++i);
    contrasena = pal;
} while (contrasena !== "sintaxis");