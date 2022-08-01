class Usuario{
    constructor (nombre, clave){
        this.nombre = nombre;
        this.clave = clave;
    }


}

const usuarios = [];
function registro(){
    alert("¡BIENVENIDO! Indique sus datos para registrarse");

    usuarioIngresado= prompt("Indique el usuario: ");
    claveIngresada= prompt("Indique la clave: ");

    usuarios.push(new Usuario(usuarioIngresado, claveIngresada));
    alert("Registro con exito");
   
} 

function validacion(usuario, clave) {
    
    if(usuario == usuarios[0].nombre){
        alert("Usuario correcto");

        if(clave == usuarios[0].clave){
            alert("Ingreso con exito");
            
        }else alert("Clave incorrecta");
    }else alert("Usuario no registrado");

}

registro();
let usuarioIngresado2= prompt("Ingrese el usuario: ");
let claveIngresada2= prompt("ingrese la clave: ");
validacion(usuarioIngresado, claveIngresada);

