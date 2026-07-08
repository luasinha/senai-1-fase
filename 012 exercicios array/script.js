function exercicio1() {
    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    console.log(dias);
}

function exercicio2() {
    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    dias.reverse();

    console.log(dias);
}

function exercicio3() {
    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    dias.push('Feriado');

    console.log(dias);
}

function exercicio4() {
    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    dias.pop();

    console.log(dias);
}

function exercicio5() {
    let pares = [];

    for (let i = 2; i <= 20; i += 2) {
        pares.push(i);
    }

    console.log(pares);
}

function exercicio6() {
    let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    pares[2] = 12;

    console.log(pares);
}

function exercicio7() {
    let frutas = ['banana', 'uva', 'abacaxi'];

    frutas.push('morango');

    console.log(frutas);
}

function exercicio8() {
    let frutas = ['banana', 'uva', 'abacaxi', 'morango'];

    frutas.splice(1, 1);

    console.log(frutas);
}

function exercicio9() {
    let amigos = ['Luanna', 'Hizabele', 'Ravi'];

    console.log(amigos);
}

function exercicio10() {
    let amigos1 = ['Luanna', 'Hizabele', 'Diego', 'Erick'];
    let amigos2 = ['Mariom', 'Athos', 'Ravi'];

    let todos = amigos1.concat(amigos2);

    console.log(todos);
}

function exercicio11() {
    let idades = [16, 17, 19, 20, 21, 24];

    console.log(idades);
}

function exercicio12() {
    let idades = [16, 17, 19, 20, 21, 24];

    let soma = idades[0] + idades[1];

    console.log(soma);
}

function exercicio13() {
    let idades = [16, 17, 19, 20, 21, 24];
    let soma = 0;

    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    let media = soma / idades.length;

    console.log(media);
}

function exercicio14() {
    let compras = ['Maçãs', 'Pão', 'Leite'];

    console.log(compras);
}

function exercicio15() {
    let compras = ['Maçãs', 'Pão', 'Leite'];

    compras.push('Ovos');
    compras.push('Arroz');

    console.log(compras);
}

function exercicio16() {
    let compras = ['Maçãs', 'Pão', 'Leite', 'Ovos', 'Arroz'];

    compras.splice(2, 1);

    console.log(compras);
}

function exercicio17() {
    let compras = ['Maçãs', 'Pão', 'Leite', 'Ovos', 'Arroz'];

    console.log(compras.includes('Pão'));
}

function exercicio18() {
    let impares = [];

    for (let i = 1; i <= 9; i += 2) {
        impares.push(i);
    }

    console.log(impares);
}

function exercicio19() {
    let numeros = [3, 6, 9];
    let resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2);
    }

    console.log(resultado);
}

function exercicio20() {
    let cidades = ['Paris', 'Nova York', 'Japão'];

    console.log("Eu adoraria visitar " + cidades[0] + " e " + cidades[2] + ".");
}