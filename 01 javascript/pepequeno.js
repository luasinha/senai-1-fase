// infos
let preco, quantidade
let valorTotal
//leituras
quantidade = Number(prompt("Quantidade:"))
preco = Number(prompt("Preco:"))
valorTotal = quantidade*preco
//proc

//saidas
alert("Valor a receber: R$" + valorTotal.toFixed(2))