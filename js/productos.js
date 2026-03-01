import {categorias} from "./datos.js"
import {productos} from "./datos.js"
import {Lista} from "./clases.js"
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

// creamos un conenedor para mostrar  los botones de las categorias

const containerCategorias = document.createElement("div");
containerCategorias.classList.add("container-categorias");

// creamos un conenedor para mostrar los productos

const containerProductos = document.createElement("div");
containerProductos.classList.add("grid-productos");
let categoriaSeleccionada = "default";   


main.appendChild(containerCategorias);
main.appendChild(containerProductos);

let listaCompra = []

////////////////// Funcion mostrar productos /////////////////////////


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

                // sumamos cantidad en caso que el usuario añada más cantidad de un producto del que ya habia seleccionado

                let productoExistente = listaCompra.find(p => p[0] === producto.nombre);

                if (productoExistente){
                    productoExistente[1] += cantidad
                }else{
                    listaCompra.push([producto.nombre, cantidad])
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


//////////////////////// Categorias //////////////////////////////////////////


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

////////////////// Botones Guardar-Mostrar-Listas ///////////////////////////

    const botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar";

    botonGuardar.addEventListener("click", () =>{
        if(listaCompra.length === 0){
            alert ("Lista de la compra vacia");
            return
        }
         const fechaActual = new Date().toLocaleString();
         const nuevaLista = new Lista(usuario.getUsuario(), fechaActual, [...listaCompra]);
         const clave = "listas_" + usuario.getUsuario();
         let listasGuardadas = JSON.parse(localStorage.getItem(clave)) || [];
         listasGuardadas.push(JSON.parse(nuevaLista.toString()));
         localStorage.setItem(clave, JSON.stringify(listasGuardadas));

        // utilizamos sesion store para saber que se ha guardado una lista en esta sesion.
         const indiceUltimaLista = listasGuardadas.length - 1;
         sessionStorage.setItem("indiceUltimaLista", indiceUltimaLista);
         
         alert("Lista guardada correctamente");
         listaCompra = [];
    } )

    const botonMostrar = document.createElement("button");
    botonMostrar.textContent = "Mostrar";
    botonMostrar.addEventListener("click", ()=>{
        window.location.href = `lista.html?usuario=${usuario.getUsuario()}`;

    })

    const botonListas = document.createElement("button");
    botonListas.textContent = "Listas";
    botonListas.addEventListener("click", ()=>{
        window.location.href = `historial.html?usuario=${usuario.getUsuario()}`;

    })


// creamos un contenedor para anidar los bótones inferiores

const contenedorBotones = document.createElement("div");
contenedorBotones.classList.add("contenedor-botones");


contenedorBotones.appendChild(botonGuardar);
contenedorBotones.appendChild(botonMostrar);
contenedorBotones.appendChild(botonListas);


// los anidamos a main

main.appendChild(contenedorBotones);

// ejecutamos a la funcion mostrarProductos al abrir la página para que se muestren todos los productos

mostrarProductos();

    
