/*
=========================================
    FRONT - END - consome nossa API local
=========================================

Este arquivo roda no navegador.
Ele faz requisições para nossa API Node.js
e mostra os dados na tela.
*/

//========================================
//ELEMENTOS DO HTML
//========================================
//foto do cachorro
const dogImage = document.getElementById("dogImage");
//nome raça
const breedname = document.getElementById("breedName");
//cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
//botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");
//campo de texto onde o úsuario digita a raça
const breedInput = document.getElementById("breedInput");
//area onde fica a imagem do cachorro
//usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area");

//========================================
//URL DA API
//========================================

const API = "http://localhost:300/api/cachorros";

//========================================
//FUNÇÃO PRINCIPAL
//========================================

async function buscaCachorro(url) {
    //adiciona a classe "loading"
    // normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading")

    try {
        //faz requisição HTTP para API
        const response = await fetch(url);
        //converte a resposta para JSON
        const data = awaitresponse.json();
        //mostra no console a resposta da API
        console.log("Resposta da API:", data)

        //Vamos verificar se a API retornou erro
        if (data.status === "error"){
            //mostra a mensagem de erro na tela
            //breedName - Elemento HTML
            //.textContent - propriedade que define o texto do elemento
            //data - Objeto com os dados recebidos da API
            //.message - propriedade que contém a mensagem ou URL
            breedname.textContent = data.message;
            //remove a image
            dogImage.src = "";
            //execução da função
            return;
        }

        //coloca a imagem do cachorro na tela
        // o src decide qual imagem será exibida
        dogImage.src = data.message;

        //extrai o nome da raça da URL da imagem
        //exemplo da URL:
        //http://localhost:3000/fotos/husky/1.jpg

        //separa a URL em partes usando ("/")
        const partes = data.message.split("/")
        
        //pega a posição 5 do array 
        //que corresponde ao nome da raça
        const raca = partes[5]

        //coloca a primeira letra maiúscula
        //ex: husky --> Husky
        breedname.textContent =
            //raca.chat(0) - pega a primeira letra
            //.toUpperCase() - Transforma em maiúscula
            //raca.slice(1) - pega o texto a partir da segunda letra
            raca.charAt(0).toUpperCase() + raca.slice(1);
            
    } catch (erro){
      //caso o servidor esteja desligado
      //ou aconteça algum erro na requisição
      
      console.error(erro);

      //mostra mensagem na tela
      breedname.textContent =
        "⚠️ servidor offline - rode: node server.js"

      //remove a imagem 
      dogImage.src = "";
    } finally {
        //remove a classe de carregamento
        //independente de erro ou sucesso.
        dogArea.classList.remove("loading")
    }
}

// ============================================
// AÇÕES
// ============================================