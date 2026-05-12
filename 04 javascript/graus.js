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