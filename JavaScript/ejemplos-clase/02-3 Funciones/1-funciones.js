// FUNCIONES DECLARATIVAS
/*
    Sintaxis
    function nombre_funcion(parametros) {
        expresiones;
        [return valor_opcional]
    }
*/

// FUNCIONES SIN NOMBRE
/*
    Sintaxis
    let/const var/const = function(parametros) {
        expresiones;
        return valor_retorno;
    }
    
    const areaCirculo = function(radio) {
        return 3.1415926 * (radio ** 2);
    }
    
    ...

    console.log(areaCirculo(10));
*/


// FUNCIONES FLECHA
/*
    Sintaxis
    let/const var/const = (parametros) => {
            expresiones;
            [return valor];
        }
*/

// Funciones autoejecutables
/*
    Sintaxis
    (function (parametros) {
        expresiones
    })(argumentos);

    Ejemplo:
    Saludar a un camper por su nombre.
    (function(nombre) {
        console.log(`Hola, camper ${nombre}`);
    })("Maria");
*/