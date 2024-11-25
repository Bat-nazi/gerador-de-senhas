const numeroSenha = document.querySelector(".parametro-senha-texto");
let tamanhoSenha = 30;
numeroSenha.textContent = tamanhoSenha; 
const botaes = document.querySelectorAll(".parametro-senha-botao");
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "QWERTYUIOPASDFGHJKLÇZXCVBNM";


botaes[0].onclick = diminuirTamanho;
botaes[1].onclick = aumentarTamanho;
geraSenha();

function diminuirTamanho(){
    if(tamanhoSenha>10){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
    }
}

function aumentarTamanho(){
     if(tamanhoSenha<30){
     tamanhoSenha = tamanhoSenha+1;
     numeroSenha.textContent = tamanhoSenha
    }
}


function geraSenha(){
    let senha=" ";
    for(let i= 0; i<tamanhoSenha; i ++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha+letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value=senha;
}