// node Arrays_em_JavaScript.js

// Exercício 1 — Criando array simples
// Crie um array chamado cores com três cores e mostre a segunda cor no console.

 let cores = ["vermelho", "verde", "azul"];

 console.log(cores[1]);

// Exercício 2 — Primeiro e último número
// Crie um array numeros com cinco números e mostre o primeiro e o último.

let numeros = ["1", "2", "3", "4", "5"];

console.log(numeros[0], numeros[4]);

// Exercício 3 — Adicionando item ao array
// Crie um array frutas com duas frutas. Depois adicione uma terceira usando push() e mostre o array.

let frutas = ["maçã", "uva"];

frutas.push("laranja"); 
console.log(frutas)

// Exercício 4 — Removendo o último item
// Crie um array nomes com quatro nomes e remova o último usando pop().

let nomes = ["Enzo", "Erick", "Caio", "Miguel"]

nomes.pop();
console.log(nomes)

// Exercício 5 — Contando elementos
// Crie um array times com quatro times e mostre quantos elementos existem nele.

let times = ["São Paulo", "Santos", "Palmeiras", "Vasco"]

console.log(times.length);