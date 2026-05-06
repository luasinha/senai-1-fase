let nota1 = 2, nota2 = 3, nota3 = 5
let respostanota1, respostanota2, respostanota3
let media

respostanota1 = Number(prompt("Qual a nota 1?"))
respostanota2 = Number(prompt("Qual a nota 2?"))
respostanota3 = Number(prompt("Qual a nota 3?"))

media = ((respostanota1*nota1) + (respostanota2*nota2) + (respostanota3*nota3))/10

console.log("A media final sera: " + media.toFixed(1))