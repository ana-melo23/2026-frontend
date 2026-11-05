
function media(){ 
    let nome = window.prompt('Qual o nome do Aluno??')
    let nota1 = Number(window.prompt(`Insira a primeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Alem da nota de${nome1}, qual foi a segunda nota?`))
    med= (nota1+nota2)/2
}
    let msg //criar uma variavel e deixar ela vazia
    if(med>=6){//se por acaso a media foi 6.0 ou mais...
        msg='meus parabéns! aprovado!!'
    }else{ 
        msg= 'Estude um pouco mais!! Reprovado'
    }
// o if é uma estrutura que cria uma condição, que execulta um bloco
// de comando ou outro, dependendo do resultado de um teste logico.

let res=document.getElementById('situacao')
res.innerHTML=`<p> Calculando a média final de <mark>${nome}</mark>.</P>`
res.innerHTML+=`<p> As notas obtidas foram<mark>${nota1}e${nota2}</mark>.</P>`
res.innerHTML+=`<p> A média final será<mark>${med}</mark>.</P>`
res.innerHTML+=`<p> A mensagem que temos é:<strong style='color:blue'>${msg}</strong>.</P>`