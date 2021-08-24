var habitaciones = []

const keyLocalStorageProducts = "habitaciones";

$.get ("./habitaciones.json", function (data) { 
    
    habitaciones = data
    // if (localStorage.getItem("habitaciones") == null)
    localStorage.setItem(keyLocalStorageProducts, JSON.stringify(habitaciones));
} )
 // localStorage.setItem('habitaciones',JSON.stringify(habitaciones))

var nombreDelUsuario = prompt('Por favor escribe tu nombre')

var ReservaUsuario = new Reserva(nombreDelUsuario);

// localStorage.setItem('habitaciones',JSON.stringify(habitaciones))

// const keyLocalStorageProducts = "habitaciones";
// if (localStorage.getItem("habitaciones") == null)
//     localStorage.setItem(keyLocalStorageProducts, JSON.stringify(habitaciones));


$("#destino").change (function () {
    const mostar = $("#destino option:selected").text();
    const numeroNoches = $("#Noches option:selected").val();
    $('#habitaciones').html('')
    if ( mostar == "Roma"){
        alert("¡Proximamente tendremos habitaciones disponibles en Roma!")
    } if ( mostar == "Paris"){
        vistaHabitaciones();
        // habitacion1Paris (), habitacion2Paris (), habitacion3Paris ()
    } if ( mostar == "Madrid"){
        alert("¡Proximamente tendremos habitaciones disponibles en Madrid!")
    } 
}

)



// alert (
//     'Este es el resumen de tu viaje:' +
//     ' \n Nombre: ' + reserva1.nombre +
//     ' \n Ciudad: ' + reserva1.destino +
//     ' \n Numero de noches: ' + reserva1.duracionReserva +
//     ' \n Precio total (€): ' + reserva1.precio
// )

// var reserva3 = new reserva ("Santiago", "Madrid" , 5 , 200)

