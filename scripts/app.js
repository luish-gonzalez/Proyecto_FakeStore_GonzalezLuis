const API_URL = "https://fakestoreapi.com"; // evita repetir la URL

const productsEl = document.querySelector("#products"); // accede a los contenedores del DOM: section -> products
const categoryEl = document.querySelector("#category"); // accede a los contenedores del DOM: select -> category
const sortEl = document.querySelector("#sort"); // accede a los contenedores del DOM: select -> sort

let products = []; // guarda los productos en memoria obtenidos de la API para luego filtrar/ordenar.

// función para renderizar mensajes de estado (cargando, error, etc.)
function renderStatus(message) {
  productsEl.innerHTML = `<p>${message}</p>`;
}

// función para renderizar productos en el DOM
function renderProducts(list) {
  productsEl.innerHTML = list
    .map((p) => { // crea una tarjeta por producto, itera sobre la lista de productos y genera el HTML correspondiente
      return `
        <article class="card">
          <img class="card__img" src="${p.image}" alt="${p.title}">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__price">$ ${p.price}</p>
          <button class="btn" data-id="${p.id}">Agregar</button> // eventos del carrito (clic en “Agregar”)
        </article>
      `;
    })
    .join("");
}

// función para obtener productos desde la API
async function fetchProducts() {
  renderStatus("Cargando productos...");

  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Respuesta no válida de la API"); // !res.ok manejo de errores en la respuesta de la API

    products = await res.json(); // guarda los productos en memoria para futuros filtros/ordenamientos
    renderProducts(products);
  } catch (err) {
    renderStatus("No se pudieron cargar los productos.");
    console.error(err);
  }
}

// evento para cargar productos al iniciar la página, asegura que el DOM exista antes de manipularlo
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});


