// C >> create >> cadastrar

// R >> read >> ler

// U >> update >> alterar/atualizar/editar/mudar

// D >> delete >> apagar

// ======================================================

// const nomes = []
// const alturas = []

// let dino = {
//     nome: "velocirraptor", 
//     altura: 3,
//     cor: "marrom",
//     custo: 14
// }

// console.log(dino);

const dinos = []

function cadastrarDino(){
    const novoDino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById('input-altura').value),
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-custo').value),
    }

dinos.push(novoDino)

console.log(dinos);

limparFormulario()
}


function limparFormulario(){

document.getElementById('input-nome').value = ''
document.getElementById('input-altura').value = ''
document.getElementById('input-cor').value = ''
document.getElementById('input-custo').value= ''

document.getElementById('input-nome').focus()
document.getElementById('input-altura').focus()
document.getElementById('input-cor').focus()
document.getElementById('input-custo').focus()
}


function testar(){
    const novoDino = {
       nome: prompt('nome'), 
       altura: 3,
       cor: "marrom",
       custo: 14
    }

dinos.push(novoDino)

console.log(dinos)
}
