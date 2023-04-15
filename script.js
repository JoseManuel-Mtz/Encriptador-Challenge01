
function mostrarMensaje (texto){
    let cajaMensaje = document.getElementById("mensaje-procesado");
    cajaMensaje.value = texto;
}

function displayCajaMensajeEncriptado() {
    let cajaConMensaje = document.getElementById("caja-desencriptador-con-mensaje");
    let cajaSinMensaje = document.getElementById("caja-desencriptador-sin-mensaje");

    cajaSinMensaje.style.display = "none";
    cajaConMensaje.style.display = "grid";
    
}

function displayCajaSinMensajeEncriptado() {
    let cajaConMensaje = document.getElementById("caja-desencriptador-con-mensaje");
    let cajaSinMensaje = document.getElementById("caja-desencriptador-sin-mensaje");

    cajaConMensaje.style.display = "none";
    cajaSinMensaje.style.display = "grid";
}


function encriptar() {
    let textoIngresado = document.getElementById("texto-ingresado").value;
    if(textoIngresado){

        let textoEncriptado = "";
        for (let index = 0; index < textoIngresado.length; index++) {
            if(llaves[textoIngresado[index]]){
                textoEncriptado += llaves[textoIngresado[index]];
            }
            else{
                textoEncriptado += textoIngresado[index];
            }
        }

        displayCajaMensajeEncriptado();
        mostrarMensaje(textoEncriptado);
    }
    else{
        displayCajaSinMensajeEncriptado();
    }

}

function desencriptar(){
    let textoIngresado = document.getElementById("texto-ingresado").value;
    
    if(textoIngresado){
        displayCajaMensajeEncriptado();
        mostrarMensaje(textoIngresado);
    }
    else{
        displayCajaSinMensajeEncriptado();
    }
}

function copiar() {
    let texto = document.getElementById("mensaje-procesado").value;
    navigator.clipboard.writeText(texto);
}


var llaves = {'a':"ai", 'e':"enter", 'i':"imes", 'o':"ober", 'u':'ufat'}

let botonEncriptar = document.getElementById("btn-encriptar");
let botonDesencriptar = document.getElementById("btn-desencriptar");
let botonCopiar = document.getElementById("btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;