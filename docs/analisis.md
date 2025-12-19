# Análisis de diseño (UI/UX) - FakeStore

## Decisiones de interfaz
- Se usa layout con productos + carrito visible en escritorio para minimizar pasos de compra.
- En móvil, el carrito se muestra como sección inferior para mantener accesibilidad sin ocupar pantalla completa.
- Controles (búsqueda, categoría, orden) se agrupan arriba para facilitar exploración rápida.

## Estructura de datos
- products: arreglo con productos traídos desde la API.
- cart: arreglo de items { id, title, price, image, qty }.
- Persistencia: localStorage ("cart") guarda el arreglo cart en JSON.

## Justificación de filtros y ordenamientos (usabilidad)
- Búsqueda por título: permite encontrar rápido productos específicos.
- Filtro por categoría: reduce ruido y ayuda a navegar el catálogo.
- Orden por precio/título: apoya decisiones rápidas (más barato / orden alfabético).
