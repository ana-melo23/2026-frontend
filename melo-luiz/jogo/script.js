var jogador = "x";
function jogar(celula){ 
    //comparar se a celula está vazia para assim escrever
    if(celula.innerHTML == ""){ 
        //escreva no HTML a letra
        celula.innerHTML = jogador;

        //alterna variavel jogador para a proxima jogada
        if(jogador == "x"){ 
            jogador = "o";
            celula.style.backgroundColor = "yellow";
         }else{
            jogador = "x";
            celula.style.backgroundColor = "green";
        }
    }
}
function reiniciar(){ 
   window.location.reload();
}