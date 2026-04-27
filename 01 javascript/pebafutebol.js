let vitorias,empates
let pontos
//leituras
vitorias = prompt("vitórias:")
vitorias = Number(vitorias)
empates = Number(prompt("empates:"))
//processamentos
pontos = vitorias*3 + empates
//saida
alert("total de pontos: " + pontos)