const inputNombre = document.getElementById("nombrepoke");
const nombreDisplay = document.getElementById("nompokemon");
const imagenDisplay = document.getElementById("imgpokemon");

function consultar() {
    // if (event) event.preventDefault();
    // nombreDisplay.textContent = "";
    // imagenDisplay.innerHTML = "";
    const nomPoke = inputNombre.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomPoke}`;

    nombreDisplay.textContent = "Buscando el pokemon ...";

    fetch(url)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error(`Error. Pokemon ${nomPoke} no encontrado`);
            }
            return respuesta.json();
        })
        .then((datos) => {
            nombreDisplay.textContent =
                datos.name[0].toUpperCase() + datos.name.slice(1);
            const rutaImg = datos.sprites.front_default;
            imagenDisplay.innerHTML = `<img src=${rutaImg} alt="${datos.name}" >`;
        })
        .catch((error) => {
            nombreDisplay.textContent =
                error.message +
                " ... Estamos trabajando para mejorar su servicio ... ";
        });
}
