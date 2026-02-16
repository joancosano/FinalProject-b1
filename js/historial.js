import { createHeader } from "./utils.js";
import { createFooter } from "./utils.js";


createHeader();
createFooter();

/*const params = new URLSearchParams(window.location.search);
const usuario = params.get("usuario");*/

const usuario = "joanr";
const main = document.querySelector("main");



/// Recuperamos todas las listas
const listas = JSON.parse(localStorage.getItem("listas"));
console.log(listas);



//filstramos las listas del usuario activo
const listaUsuarioActivo = listas.filter(lista => lista.usuario===usuario);

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

//mostramos los productos dentro de main

main.appendChild(contenedorListaCompleta);
}

listaUsuarioActivo.forEach(element => {
    mostrarListas(element)
});

