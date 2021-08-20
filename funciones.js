// function promedioDePrecio () {
//     var precioPromedio = (numeroDeNoches * presupuesto) ;
//     alert ('El precio de tu estadia en  ' + ciudad + ' es de: €' + precioPromedio)
    
// }

// function reserva (nombre, destino, duracionReserva, precio) {
//     this.nombre = nombreDeReserva;
//     this.destino = ciudad;
//     this.duracionReserva  = numeroDeNoches;
//     this.precio = presupuesto;
// }

// var habitaciones = []
// const keyLocalStorageProducts = "habitaciones";
// function buscarDatos () { 
//     $.get ("./habitaciones.json", function (data) { habitaciones = data} )
// }
// buscarDatos ()

// if (localStorage.getItem("habitaciones") == null)
// localStorage.setItem(keyLocalStorageProducts, JSON.stringify(products));

// function habitacion1Paris () {
//     $('#habitaciones').append('<span>  <div class="card d-inline-flex p-2" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Hablitacion doble</h5><p class="card-text">Habitacion para maximo dos personas en Paris.</p><select class="seleccion" id="Noches"><option value="" selected disabled hidden>Noches</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><button onclick="Comprar(${p.productId})" type="button" class="boton">Reservar</button></div></div> </span> ').hide().fadeIn('slow')
    
//     // .toggle(4000)         
// }

const vistaHabitaciones = () => {
    let vistaProductos = "";
    let productsList = JSON.parse(localStorage.getItem(keyLocalStorageProducts));
  
    habitaciones.forEach(
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
          <button "Comprar(${p.productId})" type="button" id=botonReserva class="boton">Reservar</button> 
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

