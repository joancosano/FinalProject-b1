///////////////////clases/////////////////////////
console.log("hola")
//iportamos las clases

import {Usuario} from "./clases.js"
import {poblaciones} from "./datos.js";
import {existeUsuario} from "./utils.js";


////////////////// header ////////////////////////

const registerText = document.createElement("h1");
registerText.textContent = `${document.title}`
const header = document.querySelector("header");
header.appendChild(registerText);

////////////////   main  //////////////////////

// crear el formulario
const body = document.querySelector("body");
const main = document.createElement("main");
const form = document.createElement("form");

//crear el campo nombre
const inputNombre = document.createElement("input");
inputNombre.type = "text"
inputNombre.name = "nombre"
inputNombre.id = "nombre"
inputNombre.placeholder="Introduce tu nombre"
inputNombre.required = true;

// crear la etiqueta para el campo nombre
const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre:"
labelNombre.htmlFor = "nombre"

//crear el campo apellidos
const inputApellidos = document.createElement("input");
inputApellidos.type = "text"
inputApellidos.name = "apellidos"
inputApellidos.id = "apellidos"
inputApellidos.placeholder = "Introduce tus apellidos"
inputApellidos.required = true;

// crear la etiqueta para el campo apellidos
const labelApellidos = document.createElement("label");
labelApellidos.textContent = "Apellidos:"
labelApellidos.htmlFor = "apellidos"

//crear el campo direccion
const inputDireccion = document.createElement("input");
inputDireccion.type = "text"
inputDireccion.name = "direccion"
inputDireccion.id = "direccion"
inputDireccion.placeholder = "introduce tu dirección"
inputDireccion.required= true;

// crear la etiqueta para el campo direccion
const labelDireccion = document.createElement("label");
labelDireccion.textContent = "Dirección:"
labelDireccion.htmlFor = "direccion"
 
//crear el campo poblacion
const selectPoblacion = document.createElement("select");
selectPoblacion.name = "poblacion"
selectPoblacion.id = "poblacion"
selectPoblacion.placeholder= "introduce el nombre de tu población"

// crear las options de poblacion

const optionDefault = document.createElement("option");
optionDefault.value = "";
optionDefault.textContent = "Selecciona una población";
optionDefault.disabled = true;
optionDefault.selected = true;
optionDefault.hidden = true;

selectPoblacion.appendChild(optionDefault);

poblaciones.forEach(poblacion =>{

    const option = document.createElement("option");
    option.value = poblacion.cp
    option.textContent = poblacion.nombre
    selectPoblacion.appendChild(option);

})

// crear la etiqueta para el campo poblacion
const labelPoblacion = document.createElement("label");
labelPoblacion.textContent = "Población:"
labelPoblacion.htmlFor = "poblacion"

//crear el campo CP
const inputCP = document.createElement("input");
inputCP.type = "text"
inputCP.name = "codigoPostal";
inputCP.id = "codigoPostal";
inputCP.placeholder = "Introdue el código postal de tu población";

// crear la etiqueta para el campo CP
const labelCP = document.createElement("label");
labelCP.textContent = "Código Postal:"
labelCP.htmlFor = "codigoPostal";

//crear el campo Telefono
const inputTelefono = document.createElement("input");
inputTelefono.type = "tel"
inputTelefono.name = "telefono"
inputTelefono.id = "telefono"
inputTelefono.placeholder= "introduce tu teléfono"
inputTelefono.pattern="(\\+34|0034|34)?[0-9]{9}"

// crear la etiqueta para el campo Telefono
const labelTelefono = document.createElement("label");
labelTelefono.textContent = "Teléfono:"
labelTelefono.htmlFor = "telefono"

//crear el campo Correo
const inputCorreo = document.createElement("input");
inputCorreo.type = "email"
inputCorreo.name = "correo"
inputCorreo.id = "correo"
inputCorreo.placeholder = "introduce tu correo"

// crear la etiqueta para el campo User
const labelCorreo = document.createElement("label");
labelCorreo.textContent = "Correo:"
labelCorreo.htmlFor = "correo"

//crear el campo User
const inputUser = document.createElement("input");
inputUser.type = "text"
inputUser.name = "usuario";
inputUser.id = "usuario";
inputUser.placeholder = "introduce tu usuario para registrarte";
inputUser.required = true;

// crear la etiqueta para el campo User
const labelUser = document.createElement("label");
labelUser.textContent = "Usuario:"
labelUser.htmlFor = "usuario";

//crear el campo Pass
const inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.name = "password";
inputPass.id = "password";
inputPass.placeholder = "introduce un password";
inputPass.pattern = "(?=(?:.*[A-Za-z]))(?=(?:.*\\d))(?=(?:.*[^A-Za-z0-9]){2,}).{8,}"

// crear la etiqueta para el campo Pass
const passLabel = document.createElement("label");
passLabel.textContent = "Password:"
passLabel.htmlFor = "password";

//creamos el botón registro
const registerButton = document.createElement("button");
registerButton.type = "submit";
registerButton.textContent = "Registrarme"

///////////////////footer//////////////////////
const footer = document.querySelector("footer");
const containerFooter = document.createElement("div")
const textFooter = document.createElement("p")
textFooter.textContent="website created by Joan"
footer.appendChild(containerFooter);
containerFooter.appendChild(textFooter);

//////////////////fondo registro////////////////////////

const loginBackground = document.createElement("div");
loginBackground.classList.add("loginBackground");

////// anidamos todos los elementos ///////////////////

body.insertBefore(main, footer);
form.appendChild(labelNombre);
form.appendChild(inputNombre);
form.appendChild(labelApellidos);
form.appendChild(inputApellidos);
form.appendChild(labelDireccion);
form.appendChild(inputDireccion);
form.appendChild(labelCP);
form.appendChild(inputCP);
form.appendChild(labelPoblacion);
form.appendChild(selectPoblacion);
form.appendChild(labelTelefono);
form.appendChild(inputTelefono);
form.appendChild(labelCorreo);
form.appendChild(inputCorreo);
form.appendChild(labelUser)
form.appendChild(inputUser);
form.appendChild(passLabel)
form.appendChild(inputPass);
form.appendChild(registerButton);
loginBackground.appendChild(form);
main.appendChild(loginBackground);

//////////////// Eventos y lógica/////////////////////


// validamos el teléfono para mostrar una error en el caso de ser invalido en el DOM

inputTelefono.addEventListener("change", event =>{

    const regEx = /^(\+34|0034|34)?[0-9]{9}$/;
    const tel = inputTelefono.value.replaceAll(/\s+/g,"");

    if (!regEx.test(tel) && tel != ""){
        const error = document.createElement("p");
        error.classList.add("error")
        error.textContent = "Formato de número de teléfono incorrecto";
        inputTelefono.insertAdjacentElement("afterend",error);
    }
})

inputTelefono.addEventListener("input",event =>{

    const error = document.querySelector(".error");
    if (error){
        error.remove()
    }
    
})

// validamos el e-mail para mostrar una error en el caso de ser invalido en el DOM

inputCorreo.addEventListener("change", event =>{

const regEx = /^[^\s@ñ]+@[^\s@ñ]+\.[^\s@ñ]+$/
const email = inputCorreo.value.replaceAll(/\s+/g,"")

  if (!regEx.test(email) && email != ""){
        const error = document.createElement("p");
        error.classList.add("error")
        error.textContent = "Formato de número de e-mail incorrecto";
        inputCorreo.insertAdjacentElement("afterend",error);
    }

})

inputCorreo.addEventListener("input",event =>{

    const error = document.querySelector(".error");
    if (error){
        error.remove()
    }
    
})

//creamos los listener del CP y las Poblaciones

selectPoblacion.addEventListener("change", event =>{

    inputCP.value = selectPoblacion.value || "";
    
});

inputCP.addEventListener("input", event => {
    
    selectPoblacion.value = inputCP.value || "";
});

// creamos un evento para borrar el mensaje de error al comenzar a modificar el usuario.

inputUser.addEventListener("input",event =>{

    const error = document.querySelector(".error");
    if (error){
        error.remove()
    }
    
})

// definimos el evento del botón submit del formulario.

form.addEventListener("submit", (event)=>{
event.preventDefault();

// creamos las variales para almacenar las entradas de los imputs.

    const nombre = inputNombre.value;
    const apellidos = inputApellidos.value;
    const direccion = inputDireccion.value;
    const poblacion = selectPoblacion.value;
    const codigoPostal = inputCP.value;
    const telefono = inputTelefono.value;
    const correo = inputCorreo.value;
    const usuario = inputUser.value;
    const password = inputPass.value;

// cramos un nuevo usuario 

    const nuevoUsuario = new Usuario (
        nombre,apellidos,direccion,poblacion,codigoPostal,telefono,correo,usuario,password
    );

 //recuperamos los usuarios almacenados en localStore

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// si habia un error en pantalla al tratar de registrar un usuario duplicado lo borramos. 

    const errorPrevio = document.querySelector(".error");

    if (errorPrevio){
        errorPrevio.remove()
    };

/* si el usuario existe añadimos al el DOM un mensaje de error, justo debajo del input usuario.
si no existe error lo almacenamos en localStore y redirigimos a login */

    if (existeUsuario(nuevoUsuario,usuarios)){
        const error = document.createElement("p");
        error.classList.add("error")
        error.textContent = "El usuario ya existe";
        inputUser.insertAdjacentElement("afterend",error);
        return;
    }else{
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Usuario registrado correctamente");
        window.location.href = "login.html";
    };
    
});