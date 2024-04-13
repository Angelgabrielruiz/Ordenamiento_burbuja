 class Node {
    constructor(nombre, apellido, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.anterior = null;
        this.siguiente = null;
    }
}

export {Node};