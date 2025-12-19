const cajaNombre = document.getElementById("nombre");
const txtaNombres = document.getElementById("txtnombres");

function limpiar() {
    txtaNombres.value = "";
}

function agregar() {
    const nombres = txtaNombres.value.trim();
    console.log(`${nombres}`);
    const vnombre = nombres !== "" ? nombres.split("\n") : [];
    const nuevoNombre = cajaNombre.value.trim();

    vnombre.push(nuevoNombre);
    console.log(vnombre);
    vnombre.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a > b ? 1 : a < b ? -1 : 0;
    });
    console.log(vnombre);

    txtaNombres.value = vnombre.join("\n");

    cajaNombre.value = "";
}
