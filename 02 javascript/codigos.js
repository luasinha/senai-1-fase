let codigop1, quantidadep1, valorp1
let codigop2, quantidadep2, valorp2
let valortotal, valortotalp1, valortotalp2

codigop1 = Number(prompt("Qual o código do produto 1? "))
quantidadep1 = Number(prompt("Qual a quantidade do produto 1? "))
valorp1 = Number(prompt("Qual o valor do produto 1? "))

valortotalp1 = quantidadep1 * valorp1

codigop2 = Number(prompt("Qual o código do produto 2? "))
quantidadep2 = Number(prompt("Qual a quantidade do produto 2? "))
valorp2 = Number(prompt("Qual o valor do produto 2? "))

valortotalp2 = quantidadep2 * valorp2

valortotal = valortotalp1 + valortotalp2

console.log("O valor a pagar é: R$" + valortotal.toFixed(2))
