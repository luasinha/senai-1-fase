let bombas = 7, bombatotal, show, precobomba, precototal

show = Number(prompt("Quantidade de shows marcados: "))

precobomba = Number(prompt("Qual o valor da bomba? "))

bombatotal = bombas * show

precototal = precobomba * bombatotal

console.log("Quanidade de bombas necesssárias " + bombatotal)
console.log("O custo da bomba é: R$" + precototal)