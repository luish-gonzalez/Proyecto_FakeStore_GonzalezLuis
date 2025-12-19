// PROMESAS
/*
    Sintaxis

    1. DECLARACION
    const miPromesa = new Promisse((resolve, reject) => { ... });

    2. EJECUCION
    miPromesa
        .then(resuelve => { ... })
        .catch(error => { ... });
*/

// Construcción de la promesa
const miPromesa = new Promise((resolve, reject) => {
    const exito = false;

    if (exito) {
        console.log("Esperando...");
        setTimeout(() => resolve("Promesa cumplida"), 2000);
    } else {
        reject("Promesa rechazada");
    }
});

// Ejecución de la promesa
miPromesa
    .then(respuesta => {
        console.log("No hubo errores en la promesa");
        console.log(respuesta);
    })
    .catch(error => {
        console.log("ERROR en la promesa");
        console.log(error);
    });
