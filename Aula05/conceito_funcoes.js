// FUNÇÕES EM JAVA SCRIPT

// O que é uma função?
// Uma funçao é um bloco de código reutilizável, criado para executar uma tarefa específica.

// ANALOGIA 
// Você coloca parâmetro; Ele processa; devolve um resultado

// =================================
// Estrutura básica para uma função
// =================================

// function nomeDaFuncao(parametro1, parametro2) {
//     codigo que vai ser executado

//     return resultado
// }

// function --> palavvra-chave
// nomeDafuncao --> nome da função
// parâmetros --> valores que a funcção recebe
// return --> valor que a função recebe

// 5 EXEMPLOS

// Somar dois números

function somar(a, b) {
    return a + b;
}

console.log(somar(2,60))

function realParaDolar (valorReal, cotacao) {
    return valorReal / cotacao
}

console.log(realParaDolar(10, 5.20).toFixed(2))
// toFixed = casas decimais

// converter dolar para real

function dolarParaReal (valorReal, cotacao) {
    return valorReal * cotacao
}

console.log(dolarParaReal(1.92, 5.20).toFixed(2))

// aumento de salário (você merece 25% de aumento)

function aumento (salario, aumento) {

    return novoSalario = salario + (salario * (aumento / 100))

}

console.log(aumento(1000, 25))

// verificar se é par ou impar

function par (numero) {
    
    if (numero % 2 === 0) {
        return "Seu número é par"
    } else {
        return "Seu número é ímpar"
    }
}

function imparOuPar (numero1) {
    return numero1 % 2 === 0 ?"par" :"impar"
    // se o resto for zero --> retorna par
    // caso ao contrário --> retorna ímpar
    }