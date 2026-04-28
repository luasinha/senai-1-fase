let chance, celular

celular = Number(prompt("Quantas vezes o celular foi utilizado? "))
chance = (0.1/(1 + 500 * celular)) * 100

console.log("A chance do aluno ser aprovado é: " + chance.toFixed(4) + "%")