import {recuperarUsuario} from "./utils.js"
import {createHeader,createFooter} from "./utils.js"

//Recuperamos los parametros de la url del navegador
const paramsUrl = new URLSearchParams(window.location.search);
//Recuperamos el usuario
const usuarioActivo = paramsUrl.get("usuario");
//Lo filtramos mediante la funcion recuperar usuario y lo almacenamos en la variable usuario
const usuario = recuperarUsuario(usuarioActivo);

////////////////// Header y Footer ///////////////////////////////

createHeader(usuario);
createFooter();

//////////////////// main ////////////////////////////////////////

const body = document.querySelector("body");
const main = document.querySelector("main");

/// Recuperamos todas las listas

const clave = "listas_" + usuario.getUsuario();
const listacompra = JSON.parse(localStorage.getItem(clave)) || [];
console.log(listacompra);


//filstramos las listas del usuario activo

const listaUsuarioActivo = listacompra;

console.log(listaUsuarioActivo);


function mostrarListas (listaCompra){
    
    const fecha = listaCompra.fecha;
    const productosComprados = listaCompra.productos;
    
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
    
    //--------------Productos------------------

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

// Mostramos los productos dentro de main

main.appendChild(contenedorListaCompleta);
}

// ordeno las listas para que se muestre la mas nueva primero

listaUsuarioActivo.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
});

listaUsuarioActivo.forEach(element => {
    mostrarListas(element)
});


// Creamos botones para volver a productos e ir a la ultima lista

const contenedorBotones = document.createElement("div");
contenedorBotones.classList.add("contenedor-botones");

const botonProductos = document.createElement("button");
    botonProductos.textContent = "Productos";
    botonProductos.addEventListener("click", ()=>{
        window.location.href = `productos.html?usuario=${usuario.getUsuario()}`;
    })

 const botonListas = document.createElement("button");
    botonListas.textContent = "Lista";
    botonListas.addEventListener("click", ()=>{
        window.location.href = `lista.html?usuario=${usuario.getUsuario()}`;

    })


   const botonSalir = document.createElement("button");
   botonSalir.textContent = "Salir";
   botonSalir.addEventListener("click", ()=>{
    sessionStorage.removeItem("indiceUltimaLista");
    window.location.href = `login.html`;

    })
    
    contenedorBotones.appendChild(botonProductos); 
    contenedorBotones.appendChild(botonListas);
    contenedorBotones.appendChild(botonSalir); 
    main.appendChild(contenedorBotones)
