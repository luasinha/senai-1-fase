let nota100 = 100.00
let nota50 = 50.00
let nota20 = 20.00
let nota10 = 10.00
let nota5 = 5.00
let nota2 = 2.00
let nota1 = 1.00
let valor

valor = Number(prompt("digite seu valor: "))

nota100 = Math.floor(valor / 100);
valor = valor %= 100

nota50 = Math.floor(valor / 50);
valor= valor %= 50

nota20 = Math.floor(valor / 20);
valor = valor %= 20

nota10 = Math.floor(valor / 10);
valor = valor %= 10

nota5 = Math.floor(valor / 5);
valor = valor %= 5

nota2 = Math.floor(valor / 2);
valor = valor %= 2

nota1 = Math.floor(valor / 1);
valor = valor %= 1

console.log("Seu valor: " + valor)
console.log(nota100.toFixed(0) + " notas de R$ 100,00.")
console.log(nota50.toFixed(0) + " notas de R$ 50,00." )
console.log(nota20.toFixed(0) + " notas de R$ 20,00.")
console.log(nota10.toFixed(0) + " notas de R$ 10,00.")
console.log(nota5.toFixed(0) + " notas de R$ 5,00.")
console.log(nota2.toFixed(0) + " notas de R$ 2,00.")
console.log(nota1.toFixed(0) + " notas de R$ 1,00.")