// definimos una función que buscará el nuevo usuario dentro de usuarios ya almacenados en localStore. 

export function existeUsuario(nuevoUsuario,usuarios){

    return (usuarios.find(usuario => usuario.usuario === nuevoUsuario.getUsuario()))
}
    