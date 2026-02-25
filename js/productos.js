import {categorias} from "./datos.js"
import {productos} from "./datos.js"
import {Lista} from "./clases.js"
import {Usuario} from "./clases.js"
import {recuperarUsuarios} from "./utils.js"
import { createHeader } from "./utils.js"
import { createFooter } from "./utils.js"

const paramsUrl = new URLSearchParams(window.location.search);
const usuario = paramsUrl.get("usuario");


////////////////// Header y Footer ///////////////////////////////

createHeader(usuario);
createFooter();

//////////////////// main ////////////////////////////////////////

const body = document.querySelector("body");
const main = document.querySelector("main");
const containerCategorias = document.createElement("div");
containerCategorias.classList.add("container-categorias");
const containerProductos = document.createElement("div");
containerProductos.classList.add("grid-productos");
let categoriaSeleccionada = "default";   


main.appendChild(containerCategorias);
main.appendChild(containerProductos);

let listaCompra = []

    function mostrarProductos (){
        
        let filtroProductos = [];
        containerProductos.innerHTML="";

        if (categoriaSeleccionada === "default"){
            filtroProductos = productos
        }else{
            filtroProductos = productos.filter(producto =>{
                return producto.categoria === categoriaSeleccionada;
            })
        }
        
        
        filtroProductos.forEach(producto =>{
            const card = document.createElement("div");
            card.classList.add("card-producto");

            const img = document.createElement("img");
            img.addEventListener("click", ()=> {

            let cantidad = prompt(`Cuantas unidades quieres de ${producto.nombre}:`,1)

               if (cantidad === null){
                    return;
                }

                cantidad = parseInt(cantidad);

                if (cantidad <= 0 || isNaN(cantidad)){
                    alert("Cantidad no valida")
                    return;
                }
                let productoExistente = listaCompra.find(p => p[0] === producto.id);

                if (productoExistente){
                    productoExistente[1] += cantidad
                }else{
                    listaCompra.push([producto.id, cantidad])
                }

                console.log(listaCompra)
            })

           
            img.src = `../img/${producto.imagen}`;
            img.alt = producto.nombre;

            const nombreProducto = document.createElement("div");
            nombreProducto.textContent = producto.nombre;
            nombreProducto.classList.add("nombre-producto");

            card.appendChild(nombreProducto);
            card.appendChild(img);
            containerProductos.appendChild(card);

            

        })}
    
    categorias.forEach(element => {
    const boton = document.createElement("button");
    boton.textContent = element.nombre;
    containerCategorias.appendChild(boton);
    containerCategorias.classList.add("contenedor-botones");
    boton.addEventListener("click", 
        () => {categoriaSeleccionada = element.id
            mostrarProductos();

        })
    })

    const botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar";

    botonGuardar.addEventListener("click", () =>{
        if(listaCompra.length === 0){
            alert ("Lista de la compra vacia");
            return
        }
         const fechaActual = new Date().toLocaleString();
         const nuevaLista = new Lista(usuario, fechaActual, [...listaCompra]);
         let listasGuardadas = JSON.parse(localStorage.getItem("listas")) || [];
         listasGuardadas.push(nuevaLista);
         localStorage.setItem("listas", JSON.stringify(listasGuardadas));
         alert("Lista guardada correctamente");
         listaCompra = [];
    } )

    const botonMostrar = document.createElement("button");
    botonMostrar.textContent = "Mostrar";
    botonMostrar.addEventListener("click", ()=>{
        window.location.href = `lista.html?usuario=${usuario}`;

    })

    const botonListas = document.createElement("button");
    botonListas.textContent = "Listas";
    botonListas.addEventListener("click", ()=>{
        window.location.href = `historial.html?usuario=${usuario}`;

    })

const contenedorBotones = document.createElement("div");
contenedorBotones.classList.add("contenedor-botones");

contenedorBotones.appendChild(botonGuardar);
contenedorBotones.appendChild(botonMostrar);
contenedorBotones.appendChild(botonListas);

main.appendChild(contenedorBotones);
mostrarProductos();

    
