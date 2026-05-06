let id, tempo, valorhora, salario

id = Number(prompt("Qual o seu id? "))
valorhora = Number(prompt("Qual o valor recebido por horas trabalhadas? "))
tempo = Number(prompt("Quantas horas você trabalhou esse mês? "))

salario = valorhora*tempo

console.log("id: " + id)
console.log("O seu salário será: R$ " + salario)