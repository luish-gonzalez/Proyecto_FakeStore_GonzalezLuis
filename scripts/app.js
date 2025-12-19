const API_URL = "https://fakestoreapi.com"; // evita repetir la URL

const productsEl = document.querySelector("#products"); // accede a los contenedores del DOM: section -> products
const categoryEl = document.querySelector("#category"); // accede a los contenedores del DOM: select -> category
const sortEl = document.querySelector("#sort"); // accede a los contenedores del DOM: select -> sort

let products = []; // guarda los productos en memoria obtenidos de la API para luego filtrar/ordenar.

// Crear el “estado” de filtros/orden
const state = {
  search: "",
  category: "all",
  sort: "default",
};

// Referencias del carrito y estado
const cartItemsEl = document.querySelector("#cartItems"); // accede a los contenedores del DOM: section -> cartItems
const cartTotalEl = document.querySelector("#cartTotal"); // accede a los contenedores del DOM: span -> cartTotal
const clearCartEl = document.querySelector("#clearCart"); // accede a los contenedores del DOM: button -> clearCart

let cart = []; // guarda los productos agregados al carrito

// referencias del input de búsqueda
const searchEl = document.querySelector("#search");

// Cargar carrito desde localStorage al iniciar
function loadCart() {
  const saved = localStorage.getItem("cart"); // Si existe cart guardado, lo recupera
  cart = saved ? JSON.parse(saved) : []; // si no existe, inicializa un carrito vacío
}

// Guardar carrito en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart)); 
}

// Calcular total del carrito
function calcTotal() {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// función para renderizar el carrito en el DOM
function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Tu carrito está vacío.</p>";
    calcTotal();
    return;
  }

  cartItemsEl.innerHTML = cart
    .map((item) => {
      return `
        <div class="cart-item">
          <img class="cart-item__img" src="${item.image}" alt="${item.title}">
          <div class="cart-item__info">
            <p class="cart-item__title">${item.title}</p>
            <p>$${Number(item.price).toFixed(2)}</p>
            <div class="cart-item__actions">
              <button class="btn btn--small" data-action="dec" data-id="${item.id}">-</button>
              <span>${item.qty}</span>
              <button class="btn btn--small" data-action="inc" data-id="${item.id}">+</button>
              <button class="btn btn--small" data-action="remove" data-id="${item.id}">Eliminar</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  calcTotal();
}

// Agregar al carrito (usando productos ya cargados)
function addToCart(productId) {
  const id = Number(productId);
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }

  saveCart();
  renderCart();
}

// Acciones del carrito: + / - / eliminar
function updateQty(productId, delta) {
  const id = Number(productId);
  const item = cart.find((x) => x.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter((x) => x.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  const id = Number(productId);
  cart = cart.filter((x) => x.id !== id);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}



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
          <p class="card__price">$${Number(p.price).toFixed(2)}</p>
          <button class="btn" data-id="${p.id}">Agregar</button>
        </article>
      `;
    })
    .join("");
}

// Click en productos (botón Agregar)
productsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;

  addToCart(btn.dataset.id);
});

// Click en acciones del carrito
cartItemsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const { action, id } = btn.dataset;

  if (action === "inc") updateQty(id, 1);
  if (action === "dec") updateQty(id, -1);
  if (action === "remove") removeFromCart(id);
});

// Vaciar carrito
clearCartEl.addEventListener("click", clearCart);

// función para obtener productos desde la API
async function fetchProducts() {
  renderStatus("Cargando productos...");

  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Respuesta no válida de la API"); // !res.ok manejo de errores en la respuesta de la API

    products = await res.json(); // guarda los productos en memoria para futuros filtros/ordenamientos
    applyFilters();
  } catch (err) {
    renderStatus("No se pudieron cargar los productos.");
    console.error(err);
  }
}

// Llenar el select de categorías desde la API
async function fetchCategories() {
  try {
    const res = await fetch(`${API_URL}/products/categories`);
    if (!res.ok) throw new Error("No se pudieron cargar categorías");
    const categories = await res.json();
    renderCategories(categories);
  } catch (err) {
    console.error(err);
    renderCategories([]); // al menos deja "Todas"
  }
}

function renderCategories(categories) {
  categoryEl.innerHTML = `
    <option value="all">Todas</option>
    ${categories.map((c) => `<option value="${c}">${c}</option>`).join("")}
  `;
}

// Llenar el select de ordenamientos (sin API)
function renderSortOptions() {
  sortEl.innerHTML = `
    <option value="default">Orden por defecto</option>
    <option value="price-asc">Precio: menor a mayor</option>
    <option value="price-desc">Precio: mayor a menor</option>
    <option value="title-asc">Título: A → Z</option>
    <option value="title-desc">Título: Z → A</option>
  `;
}

// Función central: aplicar filtros + orden y renderizar

function applyFilters() {
  let list = [...products];

  // 1) filtro por categoría
  if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  // 2) búsqueda por título (case-insensitive)
  if (state.search.trim() !== "") {
    const q = state.search.trim().toLowerCase();
    list = list.filter((p) => p.title.toLowerCase().includes(q));
  }

  // 3) ordenamiento
  if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "title-asc")
    list.sort((a, b) => a.title.localeCompare(b.title));
  if (state.sort === "title-desc")
    list.sort((a, b) => b.title.localeCompare(a.title));

  renderProducts(list);
}

// evento para cargar productos al iniciar la página, asegura que el DOM exista antes de manipularlo
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderCart();

  renderSortOptions();
  fetchCategories();

  fetchProducts();
});

// Eventos en controles (search/category/sort)
searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;
  applyFilters();
});

categoryEl.addEventListener("change", (e) => {
  state.category = e.target.value;
  applyFilters();
});

sortEl.addEventListener("change", (e) => {
  state.sort = e.target.value;
  applyFilters();
});



