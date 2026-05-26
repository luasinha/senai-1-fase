function plumasDeAvalon(){
let salario, emprestimo, prestacoes, porcento, valor

salario = Number(prompt("Qual seu salário?"))
emprestimo = Number(prompt("Qual foi o valor do emprestimo?"))
prestacoes = Number(prompt("São quantas prestações?"))

porcento = salario * 0.30
valor = emprestimo / prestacoes
if(salario != 0 && emprestimo != 0 && prestacoes != 0){

if(porcento < valor){
resultado.innerHTML = "O valor do emprestimo ultrapassou 30% do seu salário. R$:" + valor + " valor dos 30% do salário: R$" + porcento
}else{
resultado.innerHTML = "Valor das prestações: R$" + valor
}
}else{
resultado.innerHTML = "Erro. Tente novamente"
}
}

function starUber(){
let km, tempo, minutos, horas, dias, meses, anos, velocidade = 300000
km = Number(prompt("Quantos km você vai viajar?"))

tempo = km / velocidade
        
resultado.innerHTML = "<br>Você vai chegar em " + tempo + " segundos"
        
if(tempo > 60){
minutos = tempo / 60
resultado.innerHTML += "<br>ou " + minutos + " minutos"
}
if(minutos > 60){
horas = minutos / 60
resultado.innerHTML += "<br>ou " + horas + " horas"
}
if(horas > 24){
dias = horas / 24
resultado.innerHTML += "<br>ou " + dias + " dias"
}
if(dias > 30){
meses = dias / 30
resultado.innerHTML += "<br>ou " + meses + " meses"
}
if(meses > 12){
anos = meses / 12
resultado.innerHTML += "<br>ou " + anos + " anos"
}
}