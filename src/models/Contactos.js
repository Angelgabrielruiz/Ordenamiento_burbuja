import { LinkedList } from './LinkedList.js';

class Contactos {
    constructor() {
        this.listaContactos = new LinkedList();
    }

    agregarContacto(nombre, apellido, telefono) {
        this.listaContactos.agregarContacto(nombre, apellido, telefono);
    }

    ordenarContactos() {
        this.listaContactos.ordenarContactos();
    }
}

export {Contactos};
