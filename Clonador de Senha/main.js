const numeroSenha = document.querySelector(".parametro-senha-texto");
let tamanhoSenha = 16;
numeroSenha.textContent = tamanhoSenha; 
const botaes = document.querySelectorAll(".parametro-senha-botao");

botaes[0].onclick = diminuirTamanho;
botaes[1].onclick = aumentarTamanho;

function diminuirTamanho(){
    if(tamanhoSenha>5){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
    }
}


function aumentarTamanho(){
     if(tamanhoSenha<16){
     tamanhoSenha = tamanhoSenha+1;
     numeroSenha.textContent = tamanhoSenha
    }
}