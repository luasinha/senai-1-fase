let resposta = document.getElementById('resultado')

function verificarMeta(){
   
    let totalBruto, premiacoes, presentes, comissoes, lucro
    let meta
    
    totalBruto = Number(prompt("Total bruto: "))
    premiacoes = Number(prompt("Premiações: "))
    presentes = Number(prompt("Presentinhos: "))
    comissoes = Number(prompt("Comissões: "))
    meta = Number(prompt("Meta de hoje:"))
   
    lucro = totalBruto - premiacoes - presentes - comissoes
    let mensagem = ''
    if(lucro >= meta){
            mensagem = 'Batemos a meta, lucro de R$' + lucro.toFixed(2).replace('.','.')
    }else{
        if(lucro > 0){
            mensagem = 'Não batemos a meta, mas tivemos lucro de R$' + lucro.toFixed(2).replace('.','.')
        }else{
            let prejuizo = lucro * -1
            mensagem = 'Não batemos a meta e ainda tivemos prejuízo de R$' + prejuizo.toFixed(2).replace('.','.')
        }
    }
    resposta.innerHTML = '<br>Lucro de hoje: R$' + lucro.toFixed(2).replace('.','.') + '<br>' + mensagem

    // let ponto = '.'
    // let virgula = ','
    // resposta.innerHTML = "Lucro de hoje: R$" + 
    // lucro.toFixed(2).replace(prompt("Digita o ponto aí pra mim"),prompt("E a vírgula?"))
}

function revelarRecreio(){
    document.getElementById('resultado').innerHTML =
    '<br>Início: 20:30' + 
    '<br>Fim: 20:45' + 
    '<br>Chamada: 20:50'
}

function calcularParImpar(){
    let n = Number(prompt("digite um numero:"))
    if(n%2 == 0){
        alert("par")
    }else{
        alert("ímpar")
    }
}

function mostrarDiaDaSemana(){
    // infos
    let numero, dia
    // leitura
    numero = Number(prompt("digite um numero de 1 a 7: "))
    // processamento
    if(numero == 1){
        dia = "domingo"
    }else if(numero == 2){
        dia = "segunda feira"
    }else if(numero == 3){
        dia = "terça feira"
    }else if(numero == 4){
        dia = "quarta feira"
    }else if(numero == 5){
        dia = "quinta feira"
    }else if(numero == 6){
        dia = "sexta feira"
    }else if(numero == 7){
        dia = "sábado"
    }else{
        dia = "Erro #404, dia não encontrado."
    }
    // saídas
    document.getElementById('resultado').innerHTML = 'dia escolhido: ' + dia

}

function adivinharNumero(){
    // let numero = Math.round(Math.random()*10)// 0..10
    // let numero = Math.floor(Math.random()*10) // 0..9
    let numero = Math.ceil(Math.random()*3) // 1..10
    // let numero = Math.random()
    // console.log(numero);
    // numero = numero * 10
    // console.log(numero);
    // numero = Math.ceil(numero)
    // console.log(numero);

    let chute = Number(prompt("chuta ai:"))
    if(chute == numero){
        resposta.innerHTML = "acertouuu!"
    }else{
        resposta.innerHTML = "ERROU!"
    }
}

function verificarIdade(){
    // infos
    let idade
    // entradas
    idade = Number(prompt("digite sua idade:"))
    // processamentos
    // saídas
    if(idade >= 18){
        resposta.innerHTML = "você é maior de idade."
    }else{
        resposta.innerHTML = "você é menor de idade."
    }
}

function verificarProvisoes(){
    // infos
    let marujos, comida
    let comidaPorMarujo
    // entradas
    marujos = Number(prompt("quantidade de marujos:"))
    comida = Number(prompt("quilos de comida:"))
    // processamentos
    comidaPorMarujo = comida / marujos
    // saidas
    if(marujos >= 10 && comidaPorMarujo >= 1.5){ // ||
        document.getElementById('resultado').innerHTML = "<br>Provisões suficientes. <br>Rumo ao horizonte!"
    }else{
        document.getElementById('resultado').innerHTML = "<br>Provisões insuficientes! <br>Nada de mar por hoje."
    }
    
}


function calcularChances(){
    // alert("Aqui vou calcular as chances das criancinhas...")

    document.getElementById("resultado").innerHTML = "Resultado das chances..."
}

function calcularPrecoBrique(){
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS 
    precoCompra = Number(prompt("preço de compra:"))
    // PROCESSAMENTO
    precoVenda = precoCompra * 3
    // SAIDAS
    // console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    // alert("Preço para venda: R$" + precoVenda.toFixed(2));

    document.getElementById("resultado").innerHTML = "preço para venda: R$" + precoVenda.toFixed(2)
}
