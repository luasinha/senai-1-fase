let custosmensais
let doacoesedizimos, falta

doacoesedizimos = Number(prompt("quantos arrecadamos com doações e dizimos? R$"))
custosmensais = Number(prompt("qual o custo mensal da igreja? R$"))

falta = custosmensais - doacoesedizimos

console.log("o total de doações e dizimos recebidos no dia foi: R$" + doacoesedizimos.toFixed(2))
console.log("o total de custos mensais da igreja é de: R$" + custosmensais.toFixed(2))
console.log("falta R$" + falta.toFixed(2) + "para pagar completamente os custos mensais.")
