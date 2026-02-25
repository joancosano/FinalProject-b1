import { Usuario } from "./clases.js";

 //creamos una función para recuperar los usuarios almacenados en localStore como objetos de la clase Usuario.

export function recuperarUsuarios(){
    
    const usuariosStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarios = usuariosStorage.map(user =>{
        return new Usuario(
            user.nombre,
            user.apellidos,
            user.direccion,
            user.poblacion,
            user.codigoPostal,
            user.telefono,
            user.correo,
            user.usuario,
            user.password
        )
    })
    return usuarios
}


// definimos una función que buscará el nuevo usuario dentro de usuarios ya almacenados en localStore. 

export function existeUsuario(nuevoUsuario,usuarios){

    return (usuarios.find(user => user.getUsuario() === nuevoUsuario.getUsuario()))
}


///////////////////////// header ///////////////////////////////////

export function createHeader (user){
    const bienBenida = document.createElement("h1");
    bienBenida.textContent= `Bienvenido/a ${user} a ${document.title}`
    document.querySelector("header").appendChild(bienBenida); 
};


///////////////////////// footer ///////////////////////////////////

export function createFooter (){
    const containerFooter = document.createElement("div")
    document.querySelector("footer").appendChild(containerFooter);
    const footerText = document.createElement("p");
    footerText.textContent = "website created by Joan";
    containerFooter.appendChild(footerText);
};

