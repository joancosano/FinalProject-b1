import {Lista} from "./clases.js"
import {productos} from "./datos.js"
import { createHeader } from "./utils.js";
import { createFooter } from "./utils.js";

const params = new URLSearchParams(window.location.search);
const usuario = params.get("usuario");

const main = document.querySelector("main");

////////////////// Header y Footer ///////////////////////////////

const header = createHeader(usuario);
const footer = createFooter();

//Recuperamos las listas guardadas
const listaCompra = JSON.parse(localStorage.getItem("listas")) || []; 
// filtramos la lista para conseguir la última lista correspondiente al usuario activo
const listaUsuarioActivo = listaCompra.filter(lista => lista.usuario===usuario)
const productosUltimalista = listaUsuarioActivo[listaUsuarioActivo.length-1];
// separamos la fecha y los productos en dos variables
const fecha = productosUltimalista.fecha
const productosComprados = productosUltimalista.productos
//Creamos una taba para mostrar los productos en el DOM
const contenedorLista = document.createElement("table");
const contenedorListaCompleta = document.createElement("div");
contenedorListaCompleta.classList.add("contenedor-lista");

//--------------Cabecera de la lista------------

let cabecera = document.createElement("thead");
let filaCabecera = document.createElement("tr");

let cabeceraProducto = document.createElement("th");
cabeceraProducto.textContent = "Productos";

let cabeceraCantidad = document.createElement("th");
cabeceraCantidad.textContent = "Cantidad";

filaCabecera.appendChild(cabeceraProducto);
filaCabecera.appendChild(cabeceraCantidad);

cabecera.appendChild(filaCabecera);

contenedorLista.appendChild(cabecera);

//------------fecha de la lista------------

let tituloFecha = document.createElement("h2");
tituloFecha.textContent = `Lista del día ${fecha}`;

contenedorListaCompleta.appendChild(tituloFecha);
contenedorListaCompleta.appendChild(contenedorLista)

//--------------Productos------------

let tablebody = document.createElement("tbody")
contenedorLista.appendChild(tablebody);

// iteramos los productos para incluirlos en la tabla

productosComprados.forEach(([producto,cantidad]) => {
    
    let filaProducto = document.createElement("tr");
    
    let celdaProducto = document.createElement("td");
    celdaProducto.textContent =`${producto}`;
    
    let celdaCantidad= document.createElement("td");
    celdaCantidad.textContent =`${cantidad}`;
    
    filaProducto.appendChild(celdaProducto);
    filaProducto.appendChild(celdaCantidad);
    
    tablebody.appendChild(filaProducto);

});


//Creamos botones para volver a productos e ir al historial de listas

const contenedorBotones = document.createElement("div");
contenedorBotones.classList.add("contenedor-botones");

const botonProductos = document.createElement("button");
    botonProductos.textContent = "Productos";
    botonProductos.addEventListener("click", ()=>{
        window.location.href = `productos.html?usuario=${usuario}`;
    })

 const botonListas = document.createElement("button");
    botonListas.textContent = "Listas";
    botonListas.addEventListener("click", ()=>{
        window.location.href = `historial.html?usuario=${usuario}`;

    })
    
    
    contenedorBotones.appendChild(botonProductos); 
    contenedorBotones.appendChild(botonListas); 

    
//mostramos los productos dentro de main
main.appendChild(contenedorListaCompleta);

//mostramos los botones
main.appendChild(contenedorBotones)

