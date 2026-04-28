let frete, peso, distancia, volume

peso = Number(prompt("Qual o peso total:"))
distancia = Number(prompt("Qual a distancia total:"))
volume = Number(prompt("Qual o volume total:"))

frete= 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

console.log("O frete total é equivalente a: R$" + frete.toFixed(2))