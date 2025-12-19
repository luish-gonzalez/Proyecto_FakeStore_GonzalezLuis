// ESTRUCTURAS CONDICIONALES

// IF
// sintaxis
/*
    if (condicion) {
        instrucciones;
    }
    
    Ejemplo:
    hacer un programa que imprima si una persona es mayor o menor de edad
*/

let edad = 17;
if (edad >= 18) {
    console.log("Es mayor de edad");
}

// IF - ELSE
/*
    Sintaxis
    if (condicion) {
        expresion-verdadero;
    } else {
        expresion-falso;
    }
*/

edad = 22;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// IF - ELSE IF - ELSE IF ..... - ELSE
/*
    Sintaxis
    if (condicion1) {
        expresion 1
    } else if (condicion2) {
        expresion 2
    }
    ...
    else {
        expresion-else;
    }
    
    Ejemplo: Imprimir el mensaje correspondiente (niño, adolecente, adulto, adulto mayor) de acuerdo con la edad ingresada.
*/

edad = 38;

if (edad > 59) {
    console.log("Es un adulto mayor");
} else if (edad > 17) {
    console.log("ES un adulto");
} else if (edad > 14) {
    console.log("Es un Adolecente");
} else {
    console.log("Es un niño");
}


// OPERADOR TERNARIO ?
/*
    Sintaxis
    (condicion) ? Expresion-verdadera : Expresion-falsa;
*/

console.log((edad > 59) ? "Es una adulto mayor" :
    (edad > 17) ? "Es un adulto" :
        (edad > 14) ? "Es un adolecente" :
            "Es un niño");

// SWITCH
// Sintaxis
/*
    switch(variable) {
        case valor1:
            expresion1;
            break;
        case valor2:
            expresion2;
            break;
        case valorn:
            expresionn;
            break;
        default:
            expresion-default;
        
    }
    
    Ejemplo: dado el valor numerico de un dia a la semana, devuelva que día es.
*/

let valDia = 7;
switch (valDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miercoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    default:
        console.log("Sabado");    
}


