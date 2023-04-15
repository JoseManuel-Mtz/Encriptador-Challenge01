
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


function encriptar() {
    displayCajaMensajeEncriptado();
    mostrarMensaje("")
}

let botonEncriptar = document.getElementById("btn-encriptar");
botonEncriptar.onclick = encriptar;