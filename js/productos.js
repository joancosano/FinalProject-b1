import {categorias} from "./datos.js"
import {productos} from "./datos.js"
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


    function mostrarProductos (){
        containerProductos.innerHTML="";
        const filtroProductos = productos.filter(producto =>{
           return producto.categoria === categoriaSeleccionada;
        })
        
        filtroProductos.forEach(producto =>{
            const marco = document.createElement("div");
            const img = document.createElement("img");
            img.src = `../img/${producto.imagen}`;
            img.alt = producto.nombre;
            marco.appendChild(img);
            containerProductos.appendChild(marco);
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
