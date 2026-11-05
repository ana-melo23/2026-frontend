let idade = 25;
let renda = 3500.00;
let score = 600;
let nomeXujo = false;

if(nomeXujo == true){ 
    console.log("Emprestimo Negado");
}else if(idade >= 22 && renda > 3000.00){ 
    console.log("Emprestimo Aprovado!");
}else if(score > 800){ 
    console.log("Crédito aprovado!");
}else{ 
    console.log("Emprestimo Negado!")
}