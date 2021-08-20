function mostrarResumen () {
    reservaNombre.innerHTML = nombreDeReserva
  reservaCiudad.innerHTML = ciudad
  reservaDias.innerHTML = numeroDeNoches
  reservaPrecio.innerHTML = presupuesto
}


mostrarResumen ()


function resumenDeReserva () {
    var resumenReserv = document.createElement("p");
    var resumenReservComplete = document.createTextNode(reserva1);
    resumenReserv.appendChild(resumenReservComplete); //añade texto al div creado.
  }

resumenDeReserva ()

// parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// // Añadir el nodo Element como hijo de body
// document.body.appendChild(parrafo);

// function resumenR ( {
//   var resumenDeReserva = document.createElement ("h1");
//   resumenDeReserva.innerHTML = "<h1>¡Gracias por reservar con nosotros!</h1>"; 
//   document.body.appendChild(resumenDeReserva);
// })

// function addElement () {
//   // crea un nuevo div
//   // y añade contenido
//   var newDiv = document.createElement("h1");
//   var newContent = document.createTextNode("¡Gracias por reservar con nosotros!");
//   newDiv.appendChild(newContent); //añade texto al div creado.

//   // añade el elemento creado y su contenido al DOM
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("h1");
  var newContent = document.createTextNode("¡Gracias por reservar con nosotros!");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function lista () {
  var lista1 = document.createElement ("LI");
  lista1.innerHTML = nombreDeReserva ;

}

lista ()


$('#boton1').click (function () {

  var ciudad = $('ciudadElegida')

}
  
  
  )