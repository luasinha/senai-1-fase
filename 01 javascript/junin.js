// infos

let salario, dias, salariodias

// entradas

salario = Number(prompt("salário: "))
dias = Number(prompt("dias trabalhados: "))

//processamentos

salariodias = salario / dias

//saidas

console.log("salário por dia: R$" + salariodias.toFixed(2))