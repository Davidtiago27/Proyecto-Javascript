Codigo de respaldo

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="main.css">    
    <title>Java Curso</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Reserva tu hotel aqui</h1>
    <h2>Estos son nuestros destinos disponibles</h2>
    <ul id="top">
        <li>Paris</li>
        <li>Madrid</li>
        <li>Roma</li>
        <li>Francfort</li>
    </ul>

    <form action="">
        <input class="formulario" id="ciudadElegida" type="text" placeholder="Escribe tu ciudad de destino" onchange="mostarciudad ()">
        <input class="formulario" id="numeroPersonas" type="number" placeholder="¿Cuantas personas son?" >
        <input class="formulario" id="numeroNoches" type="number" placeholder="¿Cuantas noches estaras en el hotel?" >
        <!-- <input class="boton" type="submit" value="Enviar" onclick="alert (ciudad)" > -->
        <!-- <input class="boton" value="Confirmar" onchange="mostrarinfo ()" >  -->
        <input  class="boton" value="Ver Reserva" onclick="alert (
            'Este es el resumen de tu viaje:' +
            ' \n Nombre: ' + reserva1.nombre +
            ' \n Ciudad: ' + reserva1.destino +
            ' \n Numero de noches: ' + reserva1.duracionReserva +
            ' \n Precio total (€): ' + reserva1.precio
        )">
        <!-- <button class="boton" id="boton1">Confirmar aqui</button> -->
        <input type="submit" class="boton" id="boton1" value='Confirmar aqui' >

    </form>
        <!-- <script>
            let boton = document.getElementById("btnPrincipal")
            boton.onclick = agradecimiento ()
          </script> -->


    <script src="./funciones.js"></script>
    <script src="./home.js"></script>
    
</body>
</html> 


<!-- Javascript -->

// const ciudades = [' \n Paris' , ' \n Madrid' , ' \n Roma' , ' \n Francfort'];
// alert('Estas son nuestras ciudades' + ciudades)

// var nombreDeReserva =prompt("Para comenzar, escribe tu nombre:");
// var ciudad =prompt("Ingresa tu ciudad de destino:");
// var numeroDePersonas = parseInt(prompt("Por favor, dinos el numero de personas para la estadia:"));
// var numeroDeNoches =parseInt(prompt("Por favor, indicanos el numero de noches de tu estadia:"));
// var presupuesto =parseInt(prompt("Cuentanos tu presupuesto en €:"));

// var reservaNombre = document.getElementById ("reservaNombre")
// var reservaCiudad = document.getElementById ("reservaCiudad")
// var reservaDias = document.getElementById ("reservaDias")
// var reservaNombre = document.getElementById ("reservaPrecio")


//var ciudad  = document.getElementById("ciudadElegida").value

// function mostrarinfo () {
//     var ciudad  = document.getElementById("ciudadElegida").value
// //     alert(ciudad)
// }

// var ciudad = $('#ciudadElegida').value

// alert(ciudad)

// mostarciudad ()

// var cod = document.getElementById("producto").value;
function agradecimiento1 () {
    var newDiv = document.createElement("h1");
    var newContent = document.createTextNode("¡Gracias por reservar con nosotros!");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
// $('#h2').fadeOut('slow')
// $('h2').css({'color': 'blue' , 'font-size' : '10px'})


$("#destino").change (function () {
    const mostar = $("#destino option:selected").text();

    if ( mostar == "Roma"){
        imagenRoma ()
    } if ( mostar == "Paris"){
        habitacion1Paris ()
    } if ( mostar == "Madrid"){
        imagenMadrid ()
    } 
}

)

promedioDePrecio ()

const reserva1 = {
    nombre: nombreDeReserva,
    destino: ciudad,
    duracionReserva: numeroDeNoches,
    precio: presupuesto
};

var reserva1Texto = JSON.stringify(reserva1)
var reserva1Parse = JSON.parse(reserva1Texto)

localStorage.setItem(reserva1Texto)


// alert (
//     'Este es el resumen de tu viaje:' +
//     ' \n Nombre: ' + reserva1.nombre +
//     ' \n Ciudad: ' + reserva1.destino +
//     ' \n Numero de noches: ' + reserva1.duracionReserva +
//     ' \n Precio total (€): ' + reserva1.precio
// )

var reserva3 = new reserva ("Santiago", "Madrid" , 5 , 200)


agradecimiento ()


// if ( mostrar === "Roma"){
//     agradecimiento1 ()
// } else {
//     alert('Lo sentimos, tu nota es menor de 7 por lo que repruebas :(')
// }

// $("#destino").change (function () {
//     const mostar = $("#destino option:selected").text();
//     alert(mostar)
//     if ( mostar == "Roma"){
//         agradecimiento1 ()
//     } else {
//         alert('Lo sentimos, tu nota es menor de 7 por lo que repruebas :(')
//     }
// }

// )

function habitacion2Paris () {
    $('#habitaciones').append('<div class="card d-inline-flex p-2" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Hablitacion triple</h5><p class="card-text">Habitacion para maximo tres personas en Paris.</p><a href="#" class="card-link">Card link</a><a href="#" class="card-link">Another link</a></div></div>') 
}
