let nome, salariofixo, vendas, valorfinal, comissao = 0.15

nome = prompt("Qual o seu nome?")
salariofixo = Number(prompt("Qual o seu salario fixo?"))
vendas = Number(prompt("Quanto você vendeu esse mês?"))

valorfinal = (vendas*comissao) + salariofixo

console.log("Nome: " + nome)
console.log("O seu salário será: R$ " + valorfinal.toFixed(2))