import { Usuario } from "./clases.js";

 //creamos una función para recuperar los usuarios almacenados en localStore como objetos de la clase Usuario.

export function recuperarUsuariosAlmacenados(){
    
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

// definimos una función comprobara si el usuario que estamos resgistrando ya existe

export function existeUsuario(nuevoUsuario,usuarios){

    return (usuarios.find(user => user.getUsuario() === nuevoUsuario.getUsuario()))
}

// funcion para validar usurio al hacer login

export function validarUsuario(user,pass){

    const usuarios = recuperarUsuariosAlmacenados();
    const usuarioValido = usuarios.find (u => u.getUsuario() === user && u.getPassword() === pass)
    
    return usuarioValido

}

// Esta funcion sirve para recuperar el usuario activo y transformarlo en un objeto de la clase Usuarios

export function recuperarUsuario(user){

    const usuarios = recuperarUsuariosAlmacenados()

    return usuarios.find(usuario => usuario.getUsuario() === user)

}


// Creamos aqui los header y footers para llamarlo desde todas las secciones del proyecto

///////////////////////// header ///////////////////////////////////

export function createHeader (user){
    const bienBenida = document.createElement("h1");
    (user) 
    ? bienBenida.textContent= `Bienvenido/a ${user.getNombre()} a ${document.title}` 
    : bienBenida.textContent= `Bienvenido/a ${document.title}` 
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

