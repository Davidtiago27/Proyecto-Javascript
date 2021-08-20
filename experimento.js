const muestraHabitaciones = () => {
    let vistaHabitacionesD = ''
    
    
    
    habitaciones.forEach(p => vistaHabitacionesD += `
    <span id=${habitacionParis}habitacionParis>
    <div class="card d-inline-flex p-2" style="width: 18rem;">
    <div class="card-body"><h5 class="card-title">Hablitacion doble</h5>
    <p class="card-text">Habitacion para maximo dos personas en Paris.</p>
    <button onclick="Comprar(${p.productId})" type="button" class="boton">Reservar</button></div></div> </span>
    `)
}


for( i = 0; i <= 10; i++){
    document.write(1)
}

for( i = 0; i <= 10; i++){
    document.write(1)
}

const vistaHabitaciones = () => {
  let vistaProductos = "";
  let productsList = JSON.parse(localStorage.getItem(keyLocalStorageProducts));

  habitaciones.forEach(
    (p) =>
      (vistaProductos += `
    <div id='${p.habitacionParis}' class="card d-inline-flex p-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${p.ciudad}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Stock: ${p.habitacionesDisponibles}</li>
        <li class="list-group-item">Precio: ${p.precio}</li>
        </ul>
        <div class="card-body">
        <button onclick="Comprar(${p.productId})" type="button" class="btn btn-info">Comprar</button> 
        </div>
    </div>`)
  );

  //document.getElementById("details").innerHTML = vistaProductos;
  $("#habitaciones").html(vistaProductos);
};