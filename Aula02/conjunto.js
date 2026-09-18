// 1- String (Textos)

let nome = "Enzo "
let sobrenome = "Miguel";

let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

let frase = "Olá mundo.";
console.log(frase);

let nomeEscola = "Senai";
console.log(nomeEscola);

let StringUm = "Hello";
let StringDois = " every one";

let fraseCompleta = StringUm + StringDois;
console.log(fraseCompleta);

let mensagem = 'Sejam bem vindos!';
console.log(mensagem);

let seuSistemaFoiBom =  "Zerou!";
console.log(seuSistemaFoiBom.length);

let rule = ("não pode celular");
console.log(rule.toUpperCase());

let minus = ("PODE CELULAR");
console.log(minus.toLowerCase());

let fraseA = "Eu sou Enzo,";
let fraseB = " Moro em Guarulhos";

let fraseC = fraseA + fraseB;
console.log(fraseC);
 
// 2- Number (Números)
// Exercício 1 - Crie dois números e exiba a soma.
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
  let hoje = new Date();
  let nascimento = new Date(dataNascimento);

  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();

  return (anos * 12) + meses;
}

console.log(calcularIdadeEmMeses('2024-01-15'));

console.log(espacamento);
// Exercício 10 - Calcule o quadrado de um número.3

let numero = 3;
let quadrado = numero ** 2;

console.log(`O quadrado de ${numero} é ${quadrado}`);

console.log(espacamento)
//--------------------------------------------------------------------------------------------------
// node 2-number.js

//console.log(numero % 2 === 0)
// node 3-Boolean.js
// Exercício 1 - Crie uma variável ativo com true.
let espacamento = "--------------------------------------------------";

let maioridade = true;

let variavel = 10;
let podeDirigir = variavel >= 7;
console.log(" número é:", podeDirigir);

console.log(espacamento);
//Exercício 2 - Verifique se um número é maior que 10.

let maiorQ = true;

let numr = 10;
let numr2 = maiorQ >= 12;
console.log(" número é:", numr2);

console.log(espacamento);
//Exercício 3 - Verifique se a idade é maior ou igual a 18.

let maiorDeidade = true;
let menorDeidade = false;

let idade = 16;
let maiorIgual = idade >= 18;
console.log("A idade é:",maiorIgual);

console.log(espacamento);
//Exercício 4 - Compare dois números iguais.

let num1 = 10;
let num2 = 10;


console.log(num1 === num2); 

console.log(espacamento)

let nume1 = 5;
let nume2 = 10;

if (nume1 < nume2) {
  console.log(`${nume1} é menor que ${nume2}`);
} else if (nume1 > nume2) {
  console.log(`${nume1} é maior que ${nume2}`);
} else {
  console.log("Os números são iguais");
}

console.log(espacamento)
//Exercício 6 - Verifique se um número é par.

let numero = 4;

console.log(numero % 2 === 0)

console.log(espacamento)
//Exercício 7 - Use AND (&&) em uma condição.

let temDinheiro = true
let lojaAberta = true

if (temDinheiro&& lojaAberta) {
    console.log("podeComprar")
}

console.log(espacamento)
//Exercício 8 - Use OR (||) em uma condição.

let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
  console.log("É fim de semana!");
} else {
  console.log("É dia útil.");
}

console.log(espacamento)
//Exercício 9 - Negue um valor boolean.

let ativo = true;
let inativo = !ativo; 

console.log(inativo); 

console.log(espacamento)
//Exercício 10 - Compare texto e número.

let numero6 = 10
let texto = "10"
console.log(numero6 === texto)