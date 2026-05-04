let gastos, item, ingresso
let lucro, lucropercentual

gastos = Number(prompt("Qual foi o gasto total em suprimentos e mercadorias:"))
item = Number(prompt("Qual foi o faturamento com a venda de itens?"))
ingresso = Number(prompt("Qual foi o faturamento com os ingressos?"))

lucro = item + ingresso
lucrototal = lucro - gastos
lucropercentual = lucrototal / gastos * 100

console.log("O lucro total é de: " + lucrototal.toFixed(2))
console.log("O lucro percentual é de" + lucropercentual.toFixed(2) + "%")