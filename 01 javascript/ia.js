let precoprompt = 5, caracteres, precotoken, totaltokens, valortotal

caracteres = Number(prompt("Quantas carccates tem  o prompt?"))
precotoken = Number(prompt("Qual o valor do token?"))

totaltokens = caracteres + precoprompt
valortotal = totaltokens * precoprompt

console.log("O total de tokens é: " + totaltokens) 
console.log("Voce ira pagar: R$" + valortotal)