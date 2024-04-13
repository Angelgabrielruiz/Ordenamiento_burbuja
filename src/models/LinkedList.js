import { Node } from './Node.js';

class LinkedList {

    constructor() {
        this.head = null;
    }

    agregarContacto(nombre, apellido, telefono) {
        const nuevoNodo = new Node(nombre, apellido, telefono);
        if (!this.head) {
            this.head = nuevoNodo;
        } else {
            let temp = this.head;
            while (temp.siguiente) {
                temp = temp.siguiente;
            }
            temp.siguiente = nuevoNodo;
            nuevoNodo.anterior = temp;
        }
    }

    ordenarContactos() {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            let siguiente = current.siguiente;
            while (siguiente) {
                if (current.nombre.localeCompare(siguiente.nombre) > 0) {
                    this.swap(current, siguiente);
                }
                siguiente = siguiente.siguiente;
            }
            current = current.siguiente;
        }
    }

    swap(node1, node2) {
        [node1.nombre, node2.nombre] = [node2.nombre, node1.nombre];
        [node1.apellido, node2.apellido] = [node2.apellido, node1.apellido];
        [node1.telefono, node2.telefono] = [node2.telefono, node1.telefono];
    }
}

export { LinkedList };
