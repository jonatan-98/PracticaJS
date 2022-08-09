class Usuario{
    constructor (nombre, clave){
        this.nombre = nombre;
        this.clave = clave;
    }

}
 /* --------declaro array de ususarios--------- */
const usuarios = [];

 /* ---------capturo todos los input y botones del html----------- */
let usuarioRegistro = document.getElementById("usuarioRegistro");
let claveRegistro = document.getElementById("claveRegistro");
let botonRegistro = document.getElementById("botonRegistro");

let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
let botonSesion = document.getElementById("botonSesion");

 /* -----------agrego eventos a los botones----------- */
botonRegistro.onclick = () => {registro(usuarioRegistro.value , claveRegistro.value)}

botonSesion.onclick = () => {validacion(usuario.value, clave.value)}

 /* ----------agrego los metodos de registro y validacion---------- */
function registro(usuarioRegistrado, claveRegistrada){
    
    usuarios.push(new Usuario(usuarioRegistrado, claveRegistrada));
    alert("Registro con exito");
} 

function validacion(usuario, clave) {

    for(let i=0; i<usuarios.length; i++){
        
        if(usuario == usuarios[i].nombre){
            alert("Usuario correcto");

            if(clave == usuarios[i].clave){
                alert("Ingreso con exito");
                
            }else {alert(`Clave incorrecta.`);}
           

        }else {
            if(usuarios.length == i+1){
                alert(`Usuario incorrecto.`)
            }
            }
        
    }
}