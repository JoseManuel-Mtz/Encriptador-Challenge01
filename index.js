
function mostrarMensaje (texto){
    document.getElementById("mensaje-procesado").value = texto;
}

function displayCajaMensajeEncriptado() {
    document.getElementById("caja-desencriptador-sin-mensaje").style.display = "none";
    document.getElementById("caja-desencriptador-con-mensaje").style.display = "flex";
}

function displayCajaSinMensajeEncriptado() {
    document.getElementById("caja-desencriptador-con-mensaje").style.display = "none";
    document.getElementById("caja-desencriptador-sin-mensaje").style.display = "block";
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
    let texto = document.getElementById("texto-ingresado").value;

    if(texto){

        for(const[indice,valor] of Object.entries(llaves)){
            let textoDesencriptado = texto.replaceAll(valor,indice);
            texto = textoDesencriptado;
        }

        displayCajaMensajeEncriptado();
        mostrarMensaje(texto);
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

document.getElementById("btn-encriptar").onclick = encriptar;
document.getElementById("btn-desencriptar").onclick = desencriptar;
document.getElementById("btn-copiar").onclick = copiar;