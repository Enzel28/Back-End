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
const carImage = document.getElementById("carImage");
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
const carArea = document.querySelector(".car-area");

//========================================
//URL DA API
//========================================

const API = "http://localhost:3000/api/carros";

//========================================
//FUNÇÃO PRINCIPAL
//========================================

async function buscarCarro(url) {
    //adiciona a classe "loading"
    // normalmente usada para mostrar animação de carregamento
    carArea.classList.add("loading")

    try {
        //faz requisição HTTP para API
        const response = await fetch(url);
        //converte a resposta para JSON
        const data = await response.json();
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
            carImage.src = "";
            //execução da função
            return;
        }

        //coloca a imagem do cachorro na tela
        // o src decide qual imagem será exibida
        carImage.src = data.message;

        //extrai o nome da raça da URL da imagem
        //exemplo da URL:
        //http://localhost:3000/fotos/husky/1.jpg

        //separa a URL em partes usando ("/")
        const partes = data.message.split("/")
        
        //pega a posição 5 do array 
        //que corresponde ao nome da raça
        const modelo = partes[4]

        //coloca a primeira letra maiúscula
        //ex: husky --> Husky
        breedname.textContent =
            //raca.chat(0) - pega a primeira letra
            //.toUpperCase() - Transforma em maiúscula
            //raca.slice(1) - pega o texto a partir da segunda letra
            modelo.charAt(0).toUpperCase() + modelo.slice(1);
            
    } catch (erro){
      //caso o servidor esteja desligado
      //ou aconteça algum erro na requisição
      
      console.error(erro);

      //mostra mensagem na tela
      breedname.textContent =
        "⚠️ servidor offline - rode: node server.js"

      //remove a imagem 
      carImage.src = "";
    } finally {
        //remove a classe de carregamento
        //independente de erro ou sucesso.
        carArea.classList.remove("loading")
    }
}

// ==================================
// AÇÕES
// ==================================

//função que busca o cachorro aleatório
function carroAleatorio(){
    //chamar função principal
    // passando a rota /aleatorio da API
    buscarCarro(`${API}/aleatorio`);
}

//função que busca cachorro por raça
function buscarPorModelo(){
    //pega o texto digitado no Input
    // Trim ele remove os espaços em branco {trim()} do inicio e do fim do texto
    const modelo = breedInput.value.trim().toLowerCase();

    //verificar se o usuario digitou algo
    if (!modelo) {
        // se não digitou, mostra alerta
        alert ("digite um modelo!")
        // interrompe a função
        return;
    }

    //chamar a API passando a raca na URL
    //exemplo: /api/cachorros/husky
    buscarCarro(`${API}/${modelo}`)
}

// ===============================
// EVENTOS
// ===============================

// quando clicar no botão "aleatorio"
randomBtn.addEventListener("click", carroAleatorio);

// quando clicar no botão "buscar"
searchBtn.addEventListener("click", buscarPorModelo);

// quando clicar na imagem do cachorro
// carrega outro cachorro aleatorio
carImage.addEventListener("click", carroAleatorio);

//quando o usuario apertar o ENTER no input
breedInput.addEventListener("keypress", (event) =>{
    //verifica se a tecla pressionada foi enter
    if (event.key === "Enter"){
        //executa a busca por raça
        buscarPorModelo();
    }
})

// Carrega ao abrir a página

carroAleatorio();
