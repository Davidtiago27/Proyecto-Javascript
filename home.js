var habitaciones = []
const keyLocalStorageProducts = "habitaciones";
function buscarDatos () { 
    $.get ("./habitaciones.json", function (data) { habitaciones = data} )
}
buscarDatos ()

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


const reservarHabitacion = $("#botonReserva").click(function () { 
    console.log(this);
});



// var reserva1Texto = JSON.stringify(reserva1)
// var reserva1Parse = JSON.parse(reserva1Texto)

// localStorage.setItem(reserva1Texto)


// alert (
//     'Este es el resumen de tu viaje:' +
//     ' \n Nombre: ' + reserva1.nombre +
//     ' \n Ciudad: ' + reserva1.destino +
//     ' \n Numero de noches: ' + reserva1.duracionReserva +
//     ' \n Precio total (€): ' + reserva1.precio
// )

// var reserva3 = new reserva ("Santiago", "Madrid" , 5 , 200)

