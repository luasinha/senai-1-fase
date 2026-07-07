function contador(){

    let i = 0
    while(i < 10){
    i++
        
    console.log(i)
}
}
    
function numeros_pares(){
    for(let i = 0; i <= 20; i++){
    if(i%2 === 0){
    
    console.log(i)
    }
}

}

function arrays(){
    let idades = [12, 3, 5, 48, 91, 32]

    array.pop() // remove o ultimo array
    array.splice(2, 1)// remove o array com os números da posição e quantidade respectivamente
    array.push()//adiciona dentro do array
    idades.length // quantidade de elementos dentro do array

    for(let i = 0; i < idades.length; i++)
    ===
    for(let i = 0; i < 6; i++)
}




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