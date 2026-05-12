let resposta = document.getElementById('resultado')

let idade, mensagem

idade = Number(prompt("Digite sua idade:"))

if(idade > 16){
    mensagem = 'Você ainda não pode votar.'
}else{
    mensagem = 'Você já pode votar!'
} resposta.innerHTML = mensagem