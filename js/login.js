import {recuperarUsuarios} from "./utils.js";
import { createHeader } from "./utils.js"
import { createFooter } from "./utils.js"


/////////////////Header y Footer/////////////////

createHeader();
createFooter();

    
////////////////// main ////////////////////////////

// Creo el formulario
const main = document.querySelector("main");
const form = document.createElement("form");

// Añado el campo para introducir el usaurio
const inputUser = document.createElement("input");
inputUser.type = "text";
inputUser.name = "usuario";
inputUser.id = "usuario";
inputUser.placeholder = "Introduce tu usuario";

// creo la etiqueta del campo usuario
const userLabel = document.createElement("label");
userLabel.textContent = "Usuario";
userLabel.htmlFor = "usuario"

//creamos el campo para introducir el password
const inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.name = "password";
inputPass.id = "password";
inputPass.placeholder = "Introduce tu contraseña";

//creamos las etiqueta del campo password
const passLabel = document.createElement("label");
passLabel.textContent = "Contraseña";
passLabel.htmlFor = "password"

//crear contenedor de botones
const buttons = document.createElement("div");
buttons.classList.add("buttonsForm")

//creamos el botón looging
const loginButton = document.createElement("button");
loginButton.type = "submit";
loginButton.textContent = "Aceptar"


//creamos el botón nuevo usuario
const registerButton = document.createElement("button");
registerButton.type = "button";
registerButton.textContent = "Nuevo Usuario"

registerButton.addEventListener("click", () => {
    window.location.href = "registro.html";
})

//////////////////fondo loging////////////////////////

const loginBackground = document.createElement("div");
loginBackground.classList.add("loginBackground");



//anidamos los elementos
form.appendChild(userLabel)
form.appendChild(inputUser)
form.appendChild(passLabel)
form.appendChild(inputPass)
form.appendChild(buttons)
buttons.appendChild(registerButton);
buttons.appendChild(loginButton);
loginBackground.appendChild(form)
main.appendChild(loginBackground);


// borramos el error al comenzar a escribir de nuevo.

inputUser.addEventListener("input",event =>{

    const error = document.querySelector(".error-usuario");
    if (error){
        error.remove()
    }

})

////// logica de login ////////

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const error = document.querySelector(".error-usuario");
    if (error){
        error.remove()
    }

    const user = inputUser.value
    const pass = inputPass.value

    const usuarios = recuperarUsuarios();

    const usuarioValido = usuarios.find (u => u.getUsuario() === user && u.getPassword() === pass)

    if (usuarioValido){
        window.location.href = `productos.html?usuario=${usuarioValido.getUsuario()}`;
    }else{
        const error = document.createElement("p");
        error.classList.add("error-usuario")
        error.textContent = "Usuario o password incorrecto";
        inputPass.insertAdjacentElement("afterend",error);
        return;
    }
    })
