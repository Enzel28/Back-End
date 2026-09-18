
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