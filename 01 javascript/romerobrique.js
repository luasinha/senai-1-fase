let precoarte, precovenda

precoarte = Number(prompt("Qual o valor da arte comprada?"))

//processamento
precovenda = precoarte * 200 / 100 + precoarte

//saída
console.log("O valor de venda será: R$" + precovenda.toFixed(2)) 