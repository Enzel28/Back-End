// ===========================================
//  Selecionando elementos do DOM
// ===========================================

// Selecionando por ID
// console.log(document.getElementById("titulo")); -- Para visualização na console

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

// Selecionando por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ============================================
// Função para alterar o conteúdo
// ============================================

function alterar(){
   titulo.innerHTML = "Novo Titulo"
   subtitulo.innerText = "Novo subtitulo"
   paragrafo.innerText = "Novo texto"   

   // Alterando elemento da classe
   caixas[0].innerText = "Primeiro parágrafo alterado"
   caixas[1].innerText = "Segundo parágrafo alterado"

   // Alterando Imagem
   imagem.src = "https://i.pinimg.com/736x/b9/66/7c/b9667cb4b4f531437bda8d783719faf9.jpg"
}


