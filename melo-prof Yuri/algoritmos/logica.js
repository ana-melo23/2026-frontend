//Entrada do Algoritmo
var nome ="joice"
var idade ="22"
var renda_mensal ="3500.00";
var score_credito ="850"
var possui_restricao =false;

//Saída Espera

if(possui_restricao===true){ 
    resultado = "Empréstimo Negado";
}else { 
 
    var condicao1 = (idade >=22 && renda_mensal > 3000.00);
    var condicao2 = (score_credito > 600);

    if(condicao1 || condicao2) { 
        resultado = "Empréstimo Aprovado"
    }else { 
        resultado = "Empréstimo Negado";
    }
}