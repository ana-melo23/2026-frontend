function jogarJokenpo(escolhaUsuario){ 
//pegar os elementos do HTML onde textos seraõ Exibidos
let divEscolhas =document.getElementById("texto-escolhas")
let divREsultado =document.getElementById("texto-resultados")

//Gerando a escolha do computador usando apenas if e else
    let numeroAleatorio =Math.random();
    let escolhaComputador=" ";

    if (numeroAleatorio<0.33){
        escolhaComputador="pedra"

    }else if (numeroAleatorio<0.66){ 
        escolhaComputador="papel";
    }else{                          
        escolhaComputador="tesoura"
    }

 //Mostrar na tela o que cada um escolheu

 divEscolhas.innerHTML="Você:" +escolhaUsuario +"| Computador:" + escolhaComputador;
 //Logica de Determinação do vencedor
 if(escolhaUsuario===escolhaComputador){ 
    divREsultado.innerText="empate!"

 }else if(escolhaUsuario==="pedra"&& escolhaComputador==="tesoura"){ 
      divREsultado.innerText="Jogador Venceu!"

 }else if(escolhaUsuario==="papel"&& escolhaComputador==="pedra"){ 
      divREsultado.innerText="Jogador Venceu!"

 }else if(escolhaUsuario==="tesoura"&& escolhaComputador==="pedra"){ 
      divREsultado.innerText="Jogador Venceu!"

 }else if(escolhaComputador==="pedra"&& escolhaUsuario==="tesoura"){ 
    divREsultado.innerText="Computador Venceu!"

 }else if(escolhaComputador==="papel"&& escolhaUsuario==="pedra"){ 
    divREsultado.innerText="Computador Venceu!"

 }else if(escolhaComputador=="tesoura"&& escolhaUsuario==="pedra"){
    divREsultado.innerText="Computador Venceu!"
 
 }
}