// 1. getAttribute()
const enlace = document.getElementById("miEnlace");

const url = enlace.getAttribute("href");
console.log("URL: " + url);

// 2. setAttribute()
enlace.setAttribute("href", "https://campuslands.com/");

// getAttributeNames() - recupera una lista de tos los nombres de atributos de un elemento
console.log("Nombres de atributos", enlace.getAttributeNames());

// 3. toggleAttribute()
// sintaxis: elemento.toggleAttribute("atributo", force); force:true agrega | force:false elimina | force:none alterna
function alternarEnlace() {
    enlace.toggleAttribute("hidden");

    // document.getElementsByTagName("button")[0].textContent =
    //     enlace.hasAttribute("hidden") ? "Mostrar" : "Ocultar";

    if (enlace.hasAttribute("hidden")) {
        document.getElementsByTagName("button")[0].textContent = "Mostrar";
    } else {
        document.getElementsByTagName("button")[0].textContent = "Ocultar";
    }

    // 4. removeAttribute()
    enlace.removeAttribute("target")
}


