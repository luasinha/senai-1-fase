let resposta = document.getElementById('resultado')

let preco, saldo
let mensagem 

saldo = Number(prompt("Qual o seu saldo?"))
preco = Number(prompt("Qual o preço do produto?"))

if(saldo >= preco){
    mensagem = 'Compra realizada!'
}else{
    mensagem = 'Saldo insuficiente! Compra negada.'
}  resposta.innerHTML = mensagem
