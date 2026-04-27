// infos
let preco, quantidade
let valorTotal
//leituras
quantidade = Number(prompt("Quantidade:"))
preco = Number(prompt("Preço:"))
valorTotal = quantidade*preco
//proc

//saidas
alert("Valor a receber: R$" + valorTotal.toFixed(2))