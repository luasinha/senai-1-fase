let relatoriospj, relatoriospf
let temporelatoriospf, temporelatoriospj
let valorrecebidopf, valorrecebidopj
let valorrelatorio, somatempo, relatoriorecebidos

relatoriospf = Number(prompt("Quantos relátorios pf? "))
relatoriospj = Number(prompt("Quantos relátorios pj? "))

temporelatoriospf = Number(prompt("Quanto tempo de trabalho pf? "))
temporelatoriospf= Number(prompt("Quanto tempo de trabalho pj? "))

valorrecebidopf = Number(prompt("Qual foi o valor recebido pelo pf: "))
valorrecebidopj = Number(prompt("Qual foi o valor recebido pelo pj: "))

relatoriorecebidos = relatoriospf + relatoriospj
somatempo = temporelatoriospf + temporelatoriospj
valorrelatorio = valorrecebidopf + valorrecebidopj

console.log("O total de relárotios recebido foi: " + relatoriorecebidos)
console.log("O total de tempo trabalhado foi: " + somatempo)
console.log("O valor recebido pelos relatorios foi: " + valorrelatorio)