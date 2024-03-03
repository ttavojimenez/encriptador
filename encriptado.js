const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    resultado.value = textoEncriptado;
    textArea.valua = "";
    resultado.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    resultado.value = textoDesencriptado;
    textArea.valua = "";
    resultado.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto(){
    let textAreaElement = document.querySelector(".resultado");
    textAreaElement.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}