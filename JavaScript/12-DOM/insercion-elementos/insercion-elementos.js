// 1. appendChild()
// inserta un elemento nuevo como hijo
const miDiv = document.querySelector(".parent");

const parrafo = document.createElement("p");
parrafo.textContent = "Hoy es viernes :D";
miDiv.appendChild(parrafo);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Pidan tutorias =)";
miDiv.insertBefore(parrafo2, miDiv.firstChild);

// 2. removeChild()
const parrHola = document.querySelector(".parent > p ~ p");
miDiv.removeChild(parrHola);

// 3. replaceChild(new, old)
const parrMensaje = document.querySelector(".message");
const parrNuevo = document.createElement("p");
parrNuevo.innerHTML = "<p><b><em>Mi nombre es Maximus tercero mer</em></b></p>";
miDiv.replaceChild(parrNuevo, parrMensaje);

// 4. insertBefore(new, node)
// inserta un elemento nuevo antes de otro elemento.
// El elemento nuevo se agrega la lista de hijos del elemento anterior
const miBoton = document.createElement("button");
miBoton.textContent = "Conquistar JavaScript";
miDiv.insertBefore(miBoton, miDiv.firstChild);

//5. before() after() prepend() append()
// before: antes del container
// after: despues del container
// prepend: dentro y al inicio del container
// append: dentro y al final del container
// documentacion https://khc-sistema-v2.s3.amazonaws.com/editor/1721309225756b124cfe5423b4/attachment-1.png.png
const container = document.querySelector(".container");
const lineaNueva = document.createElement("hr");
const lineaNueva2 = document.createElement("hr");
container.before(lineaNueva);
container.after(lineaNueva2);

// 6. replaceChildren()
// reemplaza TODOS los hijos de un elemento por otro
function reemplazarHijos() {
    container.replaceChildren(parrNuevo);
}

// 7. replaceWith()
// reemplazar todo un elemento por otro.
// https://khc-sistema-v2.s3.amazonaws.com/editor/1721309225756b124cfe5423b4/attachment-2.png.png
function reemplazarContainer() {
    const pVelitas = document.createElement("p");
    pVelitas.textContent =
        "\u{1F382}\u{1F956}\u{1F38A} feliz noche de velitas \u{1F56F}\u{2728}";
    container.replaceWith(pVelitas);
}
