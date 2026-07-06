let idades = []

function maisiIdades(){

    idades.push(Number(prompt("Qual sua idade?")))
    console.log(idades)
    todasIdades()
}
function removeridades(){
    let valor = Number(prompt("Qual idade vc quer remover? " + idades))
    let i = idades.indexOf(valor)
    let filtrado = idades.filter((idade) => idade != valor)
    console.log(filtrado)
    // idades.splice(i,1)
    // console.log(idades)
    idades = filtrado
    todasIdades()
}
function todasIdades(){
    
    document.getElementById("suasIdade").innerHTML = ""
    for(let i = 0; i<idades.length; i++){                                           
    document.getElementById("suasIdade").innerHTML += "<br>" + idades[i]
    }

}