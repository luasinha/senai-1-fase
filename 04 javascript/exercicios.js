function cachorro(){
let resposta = document.getElementById('resultado')

let idade, idadehumana
let mensagem

idade = Number(prompt("Qual a idade do seu cachorro?"))
idadehumana = idade * 7

if(idadehumana >= 60){
    mensagem = 'Seu cachorro tem ' + idadehumana + ' anos e já pode se aposentar!'
}else{
    mensagem = 'Seu cachorro tem ' + idadehumana + ' anos e ainda não pode se aposentar!'
} resposta.innerHTML = mensagem
}

function compra(){
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

}
function votacao(){
let resposta = document.getElementById('resultado')

let idade, mensagem

idade = Number(prompt("Digite sua idade:"))

if(idade < 16){
    mensagem = 'Você ainda não pode votar.'
}else{
    mensagem = 'Você já pode votar!'
} resposta.innerHTML = mensagem

}
function graus(){
let resposta = document.getElementById('resultado')

let c
let f 

c = Number(prompt("Quantos graus em °C está? " ))
f = (c * (9 / 5)) + 32

if(f > 68){
    mensagem = f + '°f Alerta de super calor!'
}else{
    mensagem = 'Está ' + f + '°f!'
} resposta.innerHTML = mensagem

}
function imc(){
let resposta = document.getElementById('resultado')
let altura, peso, imc
let mensagem

altura = Number(prompt("Digite sua altura:"))
peso = Number(prompt("Digite seu peso:"))
imc = peso / (altura*altura)

if (imc < 25 && imc > 18.5){
    mensagem = 'Peso normal.'
} else if (imc > 25 && imc < 30){
     mensagem = 'Você está acima do peso.'
} else if (imc < 18.5){
    mensagem = 'Você está abaixo do peso.'
} else if (imc > 30) {
    mensagem = 'Você está com obesidade.'
}
    resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} <br>${mensagem}`
}