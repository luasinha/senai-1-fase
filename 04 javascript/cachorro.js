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