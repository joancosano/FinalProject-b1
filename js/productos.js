import {categorias} from "./datos.js"
import {productos} from "./datos.js"
import {Lista} from "./clases.js"
import {Usuario} from "./clases.js"

const paramsUrl = new URLSearchParams(window.location.search);
const usuario = paramsUrl.get("usuario");

///////////////////////// header ///////////////////////////////////

const bienBenida = document.createElement("h1");
bienBenida.textContent= `Bienvenido/a a ${document.title}`
document.querySelector("header").appendChild(bienBenida); 

///////////////////////// footer ///////////////////////////////////

const containerFooter = document.createElement("div")
document.querySelector("footer").appendChild(containerFooter);
const footerText = document.createElement("p");
footerText.textContent = "website created by Joan";
containerFooter.appendChild(footerText);

//////////////////// main ////////////////////////////////////////

const body = document.querySelector("body");
const main = document.querySelector("main");
const containerCategorias = document.createElement("div");
const containerProductos = document.createElement("div");
let categoriaSeleccionada = null;   


main.appendChild(containerCategorias);
main.appendChild(containerProductos);

let listaCompra = []

    function mostrarProductos (){
        containerProductos.innerHTML="";
        const filtroProductos = productos.filter(producto =>{
           return producto.categoria === categoriaSeleccionada;
        })
        
        filtroProductos.forEach(producto =>{
            const marco = document.createElement("div");
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
            marco.appendChild(img);
            img.src = `../img/${producto.imagen}`;
            img.alt = producto.nombre;
            const nombreProducto = document.createElement("div");
            nombreProducto.textContent = producto.nombre;
            nombreProducto.appendChild(marco);
            containerProductos.appendChild(nombreProducto);
        })}
    
    categorias.forEach(element => {
    const boton = document.createElement("button");
    boton.textContent = element.nombre;
    containerCategorias.appendChild(boton);
    boton.addEventListener("click", 
        () => {categoriaSeleccionada = element.id
            mostrarProductos();

        })
    })

    const botonGuardar = document.createElement("button");
    botonGuardar.textContent = "Guardar";
    main.appendChild(botonGuardar);

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
    main.appendChild(botonMostrar);
    botonMostrar.addEventListener("click", ()=>{
        window.location.href = "lista.html";

    })
    
