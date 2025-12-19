console.log("️ Cliente hace pedido en Rappi");

pedirRestaurante(function(restaurante) {
  console.log(" Restaurante acepta:", restaurante);

  prepararPedido(function(pedido) {
    console.log(" Pedido listo:", pedido);

    asignarDomiciliario(function(domiciliario) {
      console.log(" Sale el domiciliario:", domiciliario);

      entregarPedido(function() {
        console.log(" Cliente recibe el pedido – ¡Todo feliz!");
      });
    });
  });
});

function pedirRestaurante(cb) { setTimeout(() => cb("Corral Gourmet"), 1000); }
function prepararPedido(cb) { setTimeout(() => cb("Hamburguesa + papas"), 3000); }
function asignarDomiciliario(cb) { setTimeout(() => cb("Juan David"), 2000); }
function entregarPedido(cb) { setTimeout(cb, 4000); }