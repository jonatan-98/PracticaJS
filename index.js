class usuario{
    constructor (nombre, clave){
        this.nombre = nombre;
        this.clave = clave;
    }


}

const usuarios = [];
function registro(){
    alert("¡BIENVENIDO! Indique sus datos para registrarse");

    usuarioIngresado= prompt("Indique el usuario: ");
    claveIngresado= prompt("Indique la clave: ");

    usuarios.push(new usuario(usuarioIngresado, claveIngresada));
    alert("Registro con exito");

} 

function validacion(usuario, clave) {
    
    if(usuario == usuarios){
        alert("Usuario correcto");

        if(clave == usuario.clave){
            alert("Ingreso con exito");
            
        }else alert("Clave incorrecta");
    }else alert("Usuario no registrado");

}

registro();
let usuarioIngresado= prompt("Ingrese el usuario: ");
let claveIngresada= prompt("ingrese la clave: ");
validacion(usuarioIngresado, claveIngresada);

/* let usuario = null;
let clave = null;

function registro() {
    alert("¡BIENVENIDO! Indique sus datos para registrarse");

    this.usuario= prompt("Indique el usuario: ");
    this.clave= prompt("Indique la clave: ");

    alert("Registro con exito");
}

function login() {
    
}

function validacion(usuario, clave) {
    
    if(usuario == this.usuario){
        alert("Usuario correcto");

        if(clave == this.clave){
            alert("Ingreso con exito");
            
        }else alert("Clave incorrecta");
    }else alert("Usuario no registrado");

}


registro();
let usuarioIngresado= prompt("Ingrese el usuario: ");
let claveIngresada= prompt("ingrese la clave: ");
validacion(usuarioIngresado, claveIngresada); */
