export class Usuario {
    #nombre;
    #apellidos;
    #direccion;
    #poblacion;
    #codigoPostal;
    #telefono;
    #correo;
    #usuario;
    #password;

constructor(nombre,apellidos,direccion,poblacion,codigoPostal,telefono,correo,usuario,password){
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#direccion = direccion;
    this.#poblacion = poblacion;
    this.#codigoPostal = codigoPostal;
    this.#telefono = telefono;
    this.#correo = correo;
    this.#usuario = usuario;
    this.#password = password;
}
    
getNombre(){
    return this.#nombre
}

setNombre(nombre){
    this.#nombre = nombre;
}

getApellidos(){
    return this.#apellidos
}

setApellidos(apellidos){
    this.#apellidos = apellidos;
}

getDireccion(){
    return this.#direccion
}

setDireccion(direccion){
    this.#direccion = direccion;
}

getPoblacion(){
    return this.#poblacion
}

setPoblacion(poblacion){
    this.#poblacion = poblacion;
}

getCodigoPostal(){
    return this.#codigoPostal
}

setCodigoPostal(codigoPostal){
    this.#codigoPostal = codigoPostal;
}

getTelefono(){
    return this.#telefono
}

setTelefono(telefono){
    this.#telefono = telefono;
}

getCorreo(){
    return this.#correo
}

setCorreo(correo){
    this.#correo = correo;
}

getUsuario() {
    return this.#usuario;
}

setUsuario(usuario) {
    this.#usuario = usuario;
}

getPassword() {
    return this.#password;
}

setPassword(password) {
    this.#password = password;
}

toString(){
    return JSON.stringify({
    nombre:this.#nombre,
    apellidos:this.#apellidos,
    direccion:this.#direccion,
    poblacion:this.#poblacion,
    codigoPostal:this.#codigoPostal,
    telefono:this.#telefono,
    correo:this.#correo,
    usuario:this.#usuario,
    password:this.#password,
    })
}
toJSON(){
    return {
    nombre:this.#nombre,
    apellidos:this.#apellidos,
    direccion:this.#direccion,
    poblacion:this.#poblacion,
    codigoPostal:this.#codigoPostal,
    telefono:this.#telefono,
    correo:this.#correo,
    usuario:this.#usuario,
    password:this.#password,
    };
}
}

export class Producto{
    #nombre;
    #tipo;
    #enlace;
constructor(nombre,tipo,enlace){
    this.#nombre = nombre;
    this.#tipo = tipo;
    this.#enlace = enlace;
}

getNombre(){

    return this.#nombre;

}

setNombre(nombre){

    this.#nombre = nombre;

}

getTipo(){

    return this.#tipo;

}

setTipo(tipo){

    this.#tipo = tipo;
}

getEnlace(){

    return this.#enlace;

}

setEnlace(enlace){

    this.#enlace = enlace;

}

}

export class Lista{
    #usuario;
    #fecha;
    #productos;
    constructor(usuario,fecha,productos){
        this.#usuario = usuario;
        this.#fecha = fecha;
        this.#productos = productos;
    }

    getUsuario(){
        return this.#usuario
    }

    setUsuario(usuario){
        this.#usuario = usuario
    }
    
    getFecha(){
        return this.#fecha
    }
    
    setFecha(fecha){
        this.#fecha = fecha
    }

    getProductos(){
        return this.#productos
    }
    
    setProductos(productos){
        this.#productos = productos
    }

toString(){
    return JSON.stringify({
        usuario: this.#usuario,
        fecha: this.#fecha,
        productos: this.#productos,
    });
}
toJSON(){
    return {
        usuario: this.#usuario,
        fecha: this.#fecha,
        productos: this.#productos,
    };
}
}