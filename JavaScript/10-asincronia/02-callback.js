// Callback es una funcion que recibe como parámetro o devuelve otra función
// Ejemplo
// Calculadora dinámica

// function calcular(number, number, function)
function calcular(precio, cantidad, funCallback) {
    console.log(`\nCalculando ${cantidad} productos de $${precio.toLocaleString('es-CO')}`);
    funCallback(precio, cantidad);
}

const conIVA = (precio, cant) => {
    const total = precio * cant * 1.19;
    console.log(`Total con IVA: $${total.toLocaleString('es-CO')}`);
}

const conDescuento = (precio, cant) => {
    const total = precio * cant * 0.85;
    console.log(`Total con 15% descuento: $${total.toLocaleString('es-CO')}`); 
}

const conBlackFriday = (precio, cant) => {
    const total = precio * cant * 0.60;
    console.log(`Total con 15% BlackFriday: $${total.toLocaleString('es-CO')}`); 
}

calcular(45000, 3, conIVA);
calcular(45000, 3, conDescuento);
calcular(45000, 3, conBlackFriday);