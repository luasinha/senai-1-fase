let moradia, agua, luz, internet, gasolina, salario, streamings, telefone
let total

salario = Number(prompt("Qual o seu sálario? "))
moradia = Number(prompt("Quanto gasta de moradia? "))
agua = Number(prompt("Quanto você gasta de água? "))
luz = Number(prompt("Quanto você gasta de luz? "))
internet = Number(prompt("Quanto você gasta de internet? "))
gasolina = Number(prompt("Quanto você gasta de gasolina? "))
streamings =  Number(prompt("Quanto você gasta de streamings? "))
telefone = Number(prompt("Quanto você gasta de telefone? "))

total = salario - (internet - gasolina - telefone - streamings - moradia - agua - luz)
console.log("O que te restou foi: " + total.toFixed(2))