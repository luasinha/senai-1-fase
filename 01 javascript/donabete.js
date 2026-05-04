let lucro, premiações, presentes, comissões, custos, lucrototal

lucro = Number(prompt("Qual foi o faturamento bruto?"))
premiações = Number(prompt("Qual o valor pago em premiações?"))
presentes = Number(prompt("Qual o valor pago em presentes?"))
comissões = Number(prompt("Qual o valor pago em comissões?"))

custos = premiações + presentes + comissões
lucrototal = lucro - custos

console.log("O lucro total é de: R$" + lucrototal.toFixed(2))