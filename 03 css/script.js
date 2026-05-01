function VerificarProvisoes() {
// INFO
let marujos, comida
let comidapormarujo
// ENTRADA 
marujos = Number(prompt("Quantidade de marujos: "))
comida = Number(prompt("Quilos de comida: "))
// PROCESSAMENTO
comidapormarujo = comida / marujos
// SAIDA
if(marujos >= 10 && comidapormarujo >= 1.5){
    alert("vai viajar!")
    document.getElementById("resultado").innerHTML = "Provisoes suficientes. Rumo ao mar!"
}else{
    alert("não vai!")
    document.getElementById("resultado").innerHTML = "Provisoes insuficientes. Sem mar hoje."
}
}

function CalcularChances() {

document.getElementById("resultado").innerHTML = "Resultado das chances ..."
}

function CalcularPrecoBrique() {
    
// INFOS
let precoCompra
let precoVenda
// LEITURA
precoCompra = Number(prompt("Preço da compra"))
// PROCESSOS
precoVenda = precoCompra * 3
// SAIDAS
console.log("preço para venda: R% " + precoVenda.toFixed(2));
alert("preço para venda: R% " + precoVenda.toFixed(2));

document.getElementById("resultado").innerHTML ="Preço para venda: R$ " + precoVenda.toFixed(2)
}