
const vistaHabitaciones = () => {
    let vistaProductos = "";
    // let habitacionesLista = JSON.parse(localStorage.getItem(keyLocalStorageProducts));
    let habitacionesLista = JSON.parse(localStorage.getItem(keyLocalStorageProducts))
    habitacionesLista.forEach(
      (p) =>
        (vistaProductos += `
      <div id='${p.habitacionParis}' class="card d-inline-flex p-2" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">¡Solo quedan ${p.habitacionesDisponibles}!</li>
          <li class="list-group-item">Precio: € ${p.precio}</li>
          </ul>
          <div class="card-body">
          <button onclick="ReservaUsuario.setHabitacion(${p.habitacionParis})" type="button" id=botonReserva class="boton">Reservar</button> 
          </div>
      </div>`)
    );
  
    //document.getElementById("details").innerHTML = vistaProductos;
    $("#habitaciones").html(vistaProductos).hide().fadeIn('slow');
  };

// function habitacion2Paris () {
//     $('#habitaciones').append('<div class="card d-inline-flex p-2" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Hablitacion triple</h5><p class="card-text">Habitacion para maximo tres personas en Paris.</p><button onclick="Comprar(${p.productId})" type="button" class="boton">Reservar</button></div></div>') 
// }

// function habitacion3Paris () {
//     $('#habitaciones').append('<div class="card d-inline-flex p-2" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Hablitacion familiar</h5><p class="card-text">Habitacion para maximo cuatro personas en Paris.</p><button onclick="Comprar(${p.productId})" type="button" class="boton">Reservar</button></div></div>') 
// }

