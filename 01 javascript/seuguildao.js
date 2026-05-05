let carne = 0.5, cerveja = 1, agua = 0.5, refri = 0.2
let pessoas, totalcarne, totalcerveja, totalagua, totalrefri

pessoas = Number(prompt("Quantas pessoas são? "))
carne = Number(prompt("Quanto cada um vai levar de carne: "))
cerveja = Number(prompt("Quantos fardos de cerveja cada pessoa vai levar: "))
agua = Number(prompt("Quanto cada um vai levar de água: "))
refri = Number(prompt("Quanto cada um vai levar de refrigerante: "))

totalcarne = pessoas * carne * nivel
totalcerveja = pessoas * cerveja * nivel
totalagua = pessoas * agua * nivel
totalrefri = pessoas * refri * nivel

console.log("No total de carne vai ser: " + totalcarne + "Kg")
console.log("\nO total de cerveja vai ser: " + totalcerveja + "L")
console.log("\nO total de água vai ser: " + totalagua + "L")
console.log("\nO total de refrigerante vai ser: " + totalrefri + "L")
