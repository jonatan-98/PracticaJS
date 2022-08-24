class Usuario{
    constructor (nombre, email, clave){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
    }

}
 /* --------declaro array de ususarios--------- */
const usuarios = [];

 /* ---------capturo todos los input y botones del html----------- */
let nameRegistro = document.getElementById("nameRegistro");
let emailRegistro = document.getElementById("emailRegistro");
let passwordRegistro = document.getElementById("passwordRegistro");
let botonRegistro = document.getElementById("botonRegistro");
let parrafo = document.getElementById("warnings");
let form = document.getElementById("form");

let email = document.getElementById("email");
let password = document.getElementById("password");
let botonSesion = document.getElementById("botonSesion");
let parrafoSesion = document.getElementById("warningSesion");
let formSesion = document.getElementById("formSesion");

/* -------------envento de registro de usuario------------ */

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    
    if(nameRegistro.value.length <= 2){
        warnings += `El nombre es muy corto <br>`;
        entrar = true;
    }
    if(passwordRegistro.value.length < 6){
        warnings += `La clave es muy corta`;
        entrar = true;
    }

    entrar == true ? parrafo.innerHTML = warnings : (usuarios.push(new Usuario(nameRegistro.value, emailRegistro.value, passwordRegistro.value)),
    localStorage.setItem("usuarios", JSON.stringify(usuarios)),
    modalRegistro())

})

/*------------evento de inicio de sesion-------------*/


formSesion.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafoSesion.innerHTML = ""

    for(let i=0; i<usuarios.length; i++){
        
        if(email.value == usuarios[i].email){
            
            password.value == usuarios[i].clave ? modalSesion() : (warnings += `Clave invalida`,
            entrar = true)
           
        }else {
            if(usuarios.length == i+1){
                warnings += `Correo invalido <br>`;
                entrar = true;
            }
        }
        
    }
    if(entrar == true){
        
        parrafoSesion.innerHTML = warnings;
    }
})

function modalSesion(){
    Swal.fire({
        title: 'Genial',
        text: 'Ingresaste con exito',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
}
function modalRegistro(){
    Swal.fire({
        title: 'Genial',
        text: 'Registro con exito',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
}
 /* ------------- animacion del login ------------------- */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Evento para abrir form de registro
signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

// Evento para regresar al form de iniciar sesión
signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);