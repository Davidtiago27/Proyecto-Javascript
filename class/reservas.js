class Reserva {
    constructor (pNombre) {
        this.habitaciones = [];
        this.nombre = pNombre;
    }

    setHabitacion (pId) {
        let listaHabitaciones = JSON.parse(localStorage.getItem(keyLocalStorageProducts));
        let HabitacionSeleccionada= listaHabitaciones.find((p) => p.habitacionParis === pId);

        let nuevahabitacionReservada = new habitacionReservada(HabitacionSeleccionada.habitacionParis, 1)
    }



}