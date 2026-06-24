function exercicio1(){
    let soma = 0

    for(let i = 1; i <= 10; i++){
        soma += i
    }

    console.log(soma)
}

function exercicio2(){
    for(let i = 1; i <= 10; i++){
        console.log("5 x " + i + " = " + (5 * i))
    }
}

function exercicio3(){
    for(let i = 1; i <= 10; i++){
        console.log(i * i)
    }
}

function exercicio4(){
    let js = "javascript"

    for(let i = 0; i < js.length; i++){
        console.log(js[i])
    }
}

function exercicio5(){
    for(let i = 1; i <= 30; i++){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}

function exercicio6(){
    let asterisco = ""

    for(let i = 1; i <= 10; i++){
        asterisco += "*"
    }

    console.log(asterisco)
}

function exercicio7(){
    let soma = 0

    for(let i = 0; i <= 20; i += 2){
        soma += i
    }

    console.log(soma)
}

function exercicio8(){
    for(let i = 0; i <= 50; i += 5){
        console.log(i)
    }
}

function exercicio9(){
    for(let i = 1; i <= 8; i++){
        console.log("ola")
    }
}

function exercicio10(){
    let soma = 0

    for(let i = 1; i <= 15; i++){
        if(i % 2 != 0){
            soma += i
        }
    }

    console.log(soma)
}

function exercicio11(){
    let numeros = ["1", "12", "123", "1234", "12345"]

    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i])
    }
}

function exercicio12(){
    let resposta = 1

    for(let i = 1; i <= 5; i++){
        resposta *= i
    }

    console.log(resposta)
}

function exercicio13(){
    let palavra = "ovo"
    let contador = 0

    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] == "o"){
            contador++
        }
    }

    console.log(contador)
}