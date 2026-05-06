let notaA, notaB, notatotal

notaA = Number(prompt("Qual a primeira nota? "))
notaB = Number(prompt("Qual a segunda nota? "))
notatotal = ((notaA*3.5) + (notaB*7.5))/11

console.log("A media final é: " + notatotal.toFixed(5))