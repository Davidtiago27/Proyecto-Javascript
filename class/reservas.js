class Reserva {
    constructor (pNombre) {
        this.habitaciones = [];
        this.nombre = pNombre;
    }

    setHabitacion (pId) {
        let listaHabitaciones = JSON.parse(localStorage.getItem('habitaciones'));
        let HabitacionSeleccionada= productsList.find((p) => p.productId === pId);

        let nuevahabitacionReservada = new habitacionReservada()
    }



}