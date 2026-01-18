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

// crear la etiqueta para el campo direccion
const labelDireccion = document.createElement("label");
labelDireccion.textContent = "Dirección:"
labelDireccion.htmlFor = "direccion"
 
//crear el campo poblacion
const inputPoblacion = document.createElement("input");
inputPoblacion.type = "text"
inputPoblacion.name = "poblacion"
inputPoblacion.id = "poblacion"
inputPoblacion.placeholder= "introduce el nombre de tu población"

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
inputTelefono.type = "text"
inputTelefono.name = "telefono"
inputTelefono.id = "telefono"
inputTelefono.placeholder= "introduce tu teléfono"

// crear la etiqueta para el campo Telefono
const labelTelefono = document.createElement("label");
labelTelefono.textContent = "Teléfono:"
labelTelefono.htmlFor = "telefono"

//crear el campo Correo
const inputCorreo = document.createElement("input");
inputCorreo.type = "text"
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
form.appendChild(inputPoblacion);
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

form.addEventListener("submit", (event)=>{
event.preventDefault();

    const nombre = inputNombre.value;
    const apellidos = inputApellidos.value;
    const direccion = inputDireccion.value;
    const poblacion = inputPoblacion.value;
    const codigoPostal = inputCP.value;
    const telefono = inputTelefono.value;
    const correo = inputCorreo.value;
    const user = inputUser.value;
    const password = inputPass.value;


    const nuevoUsuario = new Usuario (
        nombre,apellidos,direccion,poblacion,codigoPostal,telefono,correo,user,password
    );

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(JSON.parse(nuevoUsuario.toString()));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";



})