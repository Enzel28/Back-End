

// ROTAS:
// GET /api/carros/aleatorio
// GET /api/carros/:modelo

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importa o módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const carros = require("./data/cars.json");
// cria a aplicação Express
const app = express();
// definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do CORS na aplicacao
app.use(cors());

//=================================================
// SERVIR ARQUIVOS ESTÁTICOS
//=================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
  "/foto",
  express.static(
    path.join(__dirname, "data/foto"), //caminho real da pasta do servidor
  ),
);

//=================================================
// FUNÇÃO AUXILIAR
//=================================================

// função que recebe um array e retorna um item aleatório dele
function sortear(array) {
  // gera um numero aleatório entre 0 e o tamanho do array
  // array.length - conta quantos itens existem na lista
  // math.random() - Sorteia um número decimal entre 0 e 1
  // math.random() - array.length - Multiplica o número sorteado pela quantidade de itens
  // math.floor() - tira a parte decimal, arredondando para baixo.
  const i = Math.floor(Math.random() * array.length);
  // const i = guarda a posição na variavel i
  // retorna o item sorteado
  return array[i];
}

//================================
// ROTAS DA API
//================================

// ROTA 1 - Carro aleatório
app.get("/api/carros/aleatorio", (req, res) => {
  const todasAsFotos = Object.values(carros).flat();
  const item = sortear(todasAsFotos);

  res.json({
    status: "success",
    message: `http://localhost:${PORT}/foto/${item}`, 
  });
});


// ROTA 2 - Carro por modelo
app.get("/api/carros/:modelo", (req, res) => {
  const modelo = req.params.modelo.toLowerCase();

  if (!carros[modelo]) {
    res.status(404).json({
      status: "error",
      message: `Modelo "${modelo}" não encontrado`,
    });
    return;
  }

  const item = sortear(carros[modelo]);

  res.json({
    status: "success",
    message: `http://localhost:${PORT}/foto/${item}`,
  });
});

//======================================
// INICIA O SERVIDOR
//=====================================

//inicia o servidor express
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📂 Coloque as fotos manualmente em: data/foto/`);
});
