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
console.log(listacompra)

//filstramos las listas del usuario activo

const listaUsuarioActivo = listacompra;

console.log(listaUsuarioActivo);

//Creamos una tabla y un contenedor para mostrar las listas de las compras.

const contenedorListas = document.createElement("div");
contenedorListas.classList.add("contenedor-lista");
const tablaListas = document.createElement("table");

//Creamos un titulo a la lista

const tituloListas = document.createElement("h2");
tituloListas.textContent = `Este es tu historial de compras ${usuario.getNombre()}:`;
contenedorListas.appendChild(tituloListas);

// anidamos la tabla al contenedor

contenedorListas.appendChild(tablaListas);

//anidamos la lista a main.
main.appendChild(contenedorListas);

   
//Esta funcion muestra las listas dentro de la tabla creada

function mostrarListas(listaCompra){

     // Contar cantidades
    const totalUnidades = listaCompra.productos.reduce(
        (total, [producto, cantidad]) => total + cantidad,
        0
    );
    const fila = document.createElement("tr");
    fila.classList.add("fila-lista");

    const celda = document.createElement("td");
    
    celda.textContent =
        `Fecha ${listaCompra.fecha} ------ Productos ${totalUnidades}`;
    fila.appendChild(celda);

    // Hacer que parezca botón
    fila.style.cursor = "pointer";


    // Evento click
    fila.addEventListener("click", () => {
        //creamos una url con los parametros de usuario e id para mostrar la lista correcta.
        window.location.href = 
        `lista.html?usuario=${usuario.getUsuario()}&id=${listaCompra.id}`;
    });

    tablaListas.appendChild(fila);
}

// ordenamos las listas para que se muestre la mas nueva primero

listaUsuarioActivo.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
});

listaUsuarioActivo.forEach((element) => {
    mostrarListas(element);
});


////////////////// Botones Guardar Mostrar Listas Salir ///////////////////////////

const contenedorBotones = document.createElement("div");
contenedorBotones.classList.add("contenedor-botones");

const botonProductos = document.createElement("button");
    botonProductos.textContent = "Productos";
    botonProductos.addEventListener("click", ()=>{
        window.location.href = `productos.html?usuario=${usuario.getUsuario()}`;
    })

const botonListas = document.createElement("button"); 
botonListas.textContent = "Última lista";
botonListas.addEventListener("click", ()=>{
    const idUltimaLista = sessionStorage.getItem("idUltimaLista");

    if(!idUltimaLista){
        alert("No hay ninguna lista en esta sesión");
        return;
    }

    window.location.href =
        `lista.html?usuario=${usuario.getUsuario()}&id=${idUltimaLista}`;
});


   const botonSalir = document.createElement("button");
   botonSalir.textContent = "Salir";
   botonSalir.addEventListener("click", ()=>{
    sessionStorage.removeItem("idUltimaLista");
    window.location.href = `login.html`;

    })
    
    contenedorBotones.appendChild(botonProductos); 
    contenedorBotones.appendChild(botonListas);
    contenedorBotones.appendChild(botonSalir); 
    main.appendChild(contenedorBotones)
