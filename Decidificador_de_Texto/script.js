const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

const divDesaparece = document.querySelector('.boneco')
const divAparece =document.querySelector('.mensagem') 
const divMensagens = document.querySelector('.mensagens-box')
const botaoCopiar = document.querySelector('.copiar') 


function btnEncriptar(){
    
    divDesaparece.style.display = 'none';
    divAparece.style.display = 'block';
    divMensagens.style.display = 'none';
    botaoCopiar.style.display = 'flex';
    
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado 
          
}  

function encriptar(stringEncriptada) {
   let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat'] ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
    
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat'] ];
     stringDesencriptada = stringDesencriptada.toLowerCase();
 
     for(let i = 0; i < matrizCodigo.length; i++){
         if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
         }
     }
     return stringDesencriptada;
 }

 function copiar() {
    navigator.clipboard.writeText(mensagem.value)

 }

//clipboard javascript