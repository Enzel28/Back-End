// 2- Number (Números)
// Exercício 1 - Crie dois números e exiba a soma.

//verifique se é numero par
//let numero = 4;
//console.log(numero % 2 === 0)

let espacamento = "--------------------------------------------------";

let númeroTrinta = 30;
let númeroVinte = 20;

console.log(númeroTrinta);
console.log(númeroVinte);

console.log(espacamento)

let soma = númeroTrinta + númeroVinte;
console.log(" o resultado da soma é:", soma);

console.log(espacamento);
// Exercício 2 - Calcule a subtração.

let subtracao = númeroTrinta - númeroVinte;
console.log(" o resultado da subtração é:", subtracao);

console.log(espacamento);
// Exercício 3 - Calcule a multiplicação.

let multiplicacao = númeroTrinta * númeroVinte;
console.log(" o resultado da multiplicação é:", multiplicacao);

console.log(espacamento);
// Exercício 4 - Calcule a divisão.

let divisao = númeroTrinta / númeroVinte;
console.log(" o resultado da divisão é:", divisao);

console.log(espacamento);
// Exercício 5 - Calcule a média de dois números.

let media = (númeroTrinta + númeroVinte) / 2;

console.log("A média de 30 e 20 é:", media);

console.log(espacamento);
// Exercício 6 - Calcule o dobro de um número.

let dobro30 = númeroTrinta * 2;
let dobro20 = númeroVinte * 2;

console.log("O dobro de 30 é:", dobro30); // 60
console.log("O dobro de 20 é:", dobro20); // 40

console.log(espacamento);
// Exercício 7 - Calcule o resto da divisão.

let resto = 30 % 20;
console.log(" o resto da divisão é:", resto);

console.log(espacamento);
// Exercício 8 - Crie um preço e um desconto.

let precoOriginal = 150.00;

let desconto30 = precoOriginal * 0.30;
let desconto20 = precoOriginal * 0.20;

let precoCom30 = precoOriginal - desconto30;
let precoCom20 = precoOriginal - desconto20;

console.log("Preço original: R$ " + precoOriginal.toFixed(2));
console.log("Desconto de 30%: R$ " + desconto30.toFixed(2) + " | Preço final: R$ " + precoCom30.toFixed(2));
console.log("Desconto de 20%: R$ " + desconto20.toFixed(2) + " | Preço final: R$ " + precoCom20.toFixed(2));

console.log(espacamento);
//Exercício 9 - Converta idade em meses.

function calcularIdadeEmMeses(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  const anos = hoje.getFullYear() - nascimento.getFullYear();
  const meses = hoje.getMonth() - nascimento.getMonth();

  return (anos * 12) + meses;
}

console.log(calcularIdadeEmMeses('2024-01-15'));

console.log(espacamento);
// Exercício 10 - Calcule o quadrado de um número.3