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