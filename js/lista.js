import {recuperarUsuario} from "./utils.js"
import {createHeader,createFooter} from "./utils.js"



//Recuperamos los parametros de la url del navegador
const paramsUrl = new URLSearchParams(window.location.search);
//Recuperamos el usuario
const usuarioActivo = paramsUrl.get("usuario");
//Lo filtramos mediante la funcion recuperar usuario y lo almacenamos en la variable usuario
const usuario = recuperarUsuario(usuarioActivo);

if (!usuario) {
    window.location.href = "login.html";
}


const main = document.querySelector("main");

////////////////// Header y Footer ///////////////////////////////

const header = createHeader(usuario);
const footer = createFooter();



// --------------- Creamos las listas----------------

//Recuperamos las listas guardadas
const clave = "listas_" + usuario.getUsuario();
const listaCompra = JSON.parse(localStorage.getItem(clave)) || [];


const indiceUltimaLista = sessionStorage.getItem("indiceUltimaLista");

if (indiceUltimaLista === null) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Todavía no hay ninguna lista en esta sesión.";
    mensaje.classList.add("mensaje-vacio")
    main.appendChild(mensaje);
}else{
        // filtramos la lista para conseguir la última lista correspondiente al usuario activo
        const productosUltimalista = listaCompra[indiceUltimaLista];
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

})
main.appendChild(contenedorListaCompleta);
sessionStorage.removeItem("listaRecienGuardada");
};


//Creamos botones para volver a productos e ir al historial de listas

const contenedorBotones = document.createElement("div");
contenedorBotones.classList.add("contenedor-botones");

const botonProductos = document.createElement("button");
    botonProductos.textContent = "Productos";
    botonProductos.addEventListener("click", ()=>{
        window.location.href = `productos.html?usuario=${usuario.getUsuario()}`;
    })

 const botonListas = document.createElement("button");
    botonListas.textContent = "Listas";
    botonListas.addEventListener("click", ()=>{
        window.location.href = `historial.html?usuario=${usuario.getUsuario()}`;
    })
    
    
    contenedorBotones.appendChild(botonProductos); 
    contenedorBotones.appendChild(botonListas); 

    
//mostramos los productos dentro de main


//mostramos los botones
main.appendChild(contenedorBotones)

