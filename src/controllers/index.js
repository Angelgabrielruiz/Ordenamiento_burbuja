import { Contactos } from "../models/Contactos.js"; 

const contactos = new Contactos(); 

function inicializar() {
    document.getElementById('addButton').addEventListener('click', agregarNuevoContacto);
    document.getElementById('sortButton').addEventListener('click', ordenarContactos);
    document.getElementById('searchButton').addEventListener('click', buscarContacto);

    mostrarContactos();
}

function agregarNuevoContacto() {
    const nombre = document.getElementById("firstNameInput").value.trim();
    const apellido = document.getElementById("lastNameInput").value.trim();
    const telefono = document.getElementById("phoneInput").value.trim();
    if (nombre === "" || apellido === "" || telefono === "") return;

    contactos.agregarContacto(nombre, apellido, telefono);
    mostrarContactos();
    limpiarInputs();
}

function mostrarContactos() {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    const listaContactos = contactos.listaContactos;
    let temp = listaContactos.head;
    while (temp) {
        const listItem = document.createElement("li");
        listItem.textContent = temp.nombre + " " + temp.apellido + " - " + temp.telefono;
        contactList.appendChild(listItem);
        temp = temp.siguiente;
    }
}


function limpiarInputs() {
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("phoneInput").value = "";
}

function ordenarContactos() {
    contactos.ordenarContactos(); 
    mostrarContactos();
}

function buscarContacto() {
    const searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm === "") return;

    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    const listaContactos = contactos.listaContactos;
    let temp = listaContactos.head;
    while (temp) {
        if (temp.nombre.toLowerCase() === searchTerm.toLowerCase()) {
            const listItem = document.createElement("li");
            listItem.textContent = temp.nombre + " " + temp.apellido + " - " + temp.telefono;
            contactList.appendChild(listItem);
        }
        temp = temp.siguiente;
    }
}

inicializar();
