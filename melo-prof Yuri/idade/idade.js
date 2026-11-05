function idade(){ 
    let nome= window.prompt('Qual é seu nome??')
    let anoNascimento= window.prompt('Em que ano você nasceu??')
    let anoAtual= new Date().getFullYear
    let idade = anoAtual - Number(anoNascimento);
    
    alert("Sua idade atual (ou a que você fará esse ano) é: "+ idade + "anos.");
}