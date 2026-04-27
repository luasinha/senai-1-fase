// infos

let salario, dias, salariodias

// entradas

salario = Number(prompt("salario: "))
dias = Number(prompt("dias trabalhados: "))

//processamentos

salariodias = salario / dias

//saidas

alert("salario por dia: R$" + salariodias.toFixed(2))