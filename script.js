
function mostrarMensaje (texto){
    let cajaMensaje = document.getElementById("mensaje-procesado");
    cajaMensaje.textContent = texto;
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
        displayCajaMensajeEncriptado();
        mostrarMensaje(textoIngresado);
    }
    else{
        displayCajaSinMensajeEncriptado();
    }

}

let botonEncriptar = document.getElementById("btn-encriptar");
botonEncriptar.onclick = encriptar;