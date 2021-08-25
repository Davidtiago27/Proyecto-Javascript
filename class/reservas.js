class Reserva {
    constructor (pNombre) {
        this.habitaciones = [];
        this.nombre = pNombre;
    }

    setHabitacion (pId) {
        // let listaHabitaciones = JSON.parse(localStorage.getItem(keyLocalStorageProducts));
        let habitacionesLista = JSON.parse(localStorage.getItem(keyLocalStorageProducts));
        let HabitacionSeleccionada= habitacionesLista.find((p) => p.habitacionParis === pId);

        //HabitacionSeleccionada.habitacionesDisponibles -= 1;
        //localStorage.setItem(keyLocalStorageProducts, JSON.stringify(HabitacionSeleccionada));
        let nuevahabitacionReservada = new habitacionReservada(HabitacionSeleccionada.habitacionParis, 1)

        this.habitaciones.push(nuevahabitacionReservada);
    }


}