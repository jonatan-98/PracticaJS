
alert("Este sistema crea mensajes en esta pagina");

let mensajes = Number(prompt("ingrese la cantidad de mensajes a publicar:"));
let conteiner = document.createElement("p");

for(let i=0; i<mensajes; i++){
    let mensajeIngresado=prompt(`Escriba el mensaje numero ${i+1} a publicar:`);
    conteiner.innerHTML += `<h2>${mensajeIngresado}</h2>`;
    document.body.append(conteiner);
}

/*---------- PROYECTO PENDIENTE PARA EL PROXIMO TRABAJO ENTREGABLE--------- */
/* class Usuario{
    constructor (nombre, clave){
        this.nombre = nombre;
        this.clave = clave;
    }

}

const usuarios = [];
let opcion=0;


function registro(usuarioRegistrado, claveRegistrada){
    
    usuarios.push(new Usuario(usuarioRegistrado, claveRegistrada));
    alert("Registro con exito");
} 

function validacion(usuario) {

    for(let i of usuarios){
        
        if(usuario == i.nombre){
            alert("Usuario correcto");

            let intentos=5;
            do{
                let clave = prompt("Ingrese la clave"); 
                if(clave == i.clave){
                    alert("Ingreso con exito");
                    intentos = 0;

                }else { intentos--;
                        alert(`Clave incorrecta. Le quedan ${intentos} intentos`);
                    }
            }while(intentos != 0);

        } 
        
    }
}

do{
    opcion = Number(prompt(`¡Bienvenido al sistema!
    Seleccione una opcion:
    1_Registrarse al sistema
    2_Ingresar al sistema
    9_Salir`));

    switch(opcion){
        case 1:
                let usuarioIngresado = prompt("Ingrese el usuario");
                let claveIngresada = prompt("Ingrese la clave");
                registro(usuarioIngresado, claveIngresada);
            break;

        case 2:
                let usuarioIngresado2 = prompt("Ingrese el usuario");
                validacion(usuarioIngresado2);
            break;

        case 9: alert("¡Hasta luego!");
            break;

        default: alert("Opcion incorrecta");
    }
}while(opcion != 9);

 */