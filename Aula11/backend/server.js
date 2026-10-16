// =================================
//     Server.js - BACK-END COMPLETO
// =================================

// PARTE 1: Importar as ferramentas
const express = require('express');               //biblioteca para criar o servidor
const path = require('path');                     //ajuda a montar caminhos de pastas
const { DatabaseSync } = require('node:sqlite');  //banco SQLite (já vem dentro do node!)

//PARTE 2: Criar o Servidor e abrir o banco 
const app = express(); // cria o servidor 
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db')); 
//abre o banco (se não existir, cria o arquivo). ------> __dirname = pasta deste arquivo

// cria a tabela "tarefas" se ela ainda não existir
banco.exec(`
    CREATE TABLE IF NOT EXISTS tarefas(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo      TEXT NOT NULL,
    concluida  INTEGER DEFAULT 0
    )
`);

//Parte 3: Configurar o servidor (Os famosos middlewares)
// app.use: "TODO pedido que chegar, passe primeiro por aqui."

app.use(express.json());// faz o servidor entender JSON
app.use(express.static(path.join(__dirname, '..', 'public')));
//entrega a página da pasta "public"

// -------------------------------------
// PARTE 4: ROTAS (a API)
// -------------------------------------
// ROTA: a combinação do método + endereço
// API: é conjunto dessas rotas
//
// Toda rota recebe 2 coisas (SEMPRE NA ORDEM ABAIXO):
//REQUISIÇÃO = o PEDIDO que chegou
// resposta = o que vamos devolver para o front.
//
// operação | Método HTTP | Endereço | Comando SQL
// -----------------------------------------------
// Create   | POST        | /tarefas     | INSERT       
// Read     | GET         | /tarefas     | SELECT       
// Update   | PUT         | /tarefas/:id | INSERT       
// Delete   | DELETE      | /tarefas/:id | DELETE       

// ===================   CRIAR ===================
// POST /tarefas ----> salva uma tarefa nova no banco de dados (sqlite)
app.post('/tarefas', (requisicao, resposta)=>{
    const titulo = requisicao.body.titulo; //texto enviada pela página

    //se o titulo estiver, vazio, avisa que deu erro (400) e para aqui
    if (!titulo) {
        return resposta.status(400).json({erro: 'Digite um título'});
    }
    // INSERT: adicionar uma linha na tabela. Lembre-se os "?" são trocados pelo valor do título
    banco.prepare('INSERT INTO tarefas (titulo) VALUES(?)').run(titulo);
    resposta.json({ ok: true});// resposta que deu certo.
})

// PASSO A PASSO do que acontece no CREATE
// 1) o usuario digita no campo e clica em "adicionar" no navegador
// 2) O front manda um POST para /tarefas com {"titulo":"..."}
// 3) Chega aqui no server. O express escolhe esta rota porque o metodo POST e o endereço é /tarefas
// 4) "requisição.body.titulo" é o texto que o front mandou, lembrendo só funciona por causa do express.json() que está lá em cima!
// 5) Validação: se vier vazio, respondemos com status 400(= "pedido errado") em um JSON de erro, NUNCA confie no front, sempre valide aqui.
// 6) Insert em tarefas
// 7) resposta

//=========================== LER =============================
// GET /tarefas -> devolve todas as tarefas
app.get('/tarefas', (requisicao, resposta) =>{
    //SELECT: busca todas as linhas da tabela (as mais novas primeiro)
    const tarefas = banco.prepare('SELECT * FROM tarefas ORDER BY id DESC').all();
    resposta.json(tarefas);
});

//========================= ATUALIZAR ===============================
// PUT /tarefas/5 --> muda a tarefa de id 5 (marca como feita ou pendente)
app.put('/tarefas/:id', (requisicao, resposta) => {
    const id = requisicao.params.id;
    const concluida = requisicao.body.concluida;

    //UPDATE: alterar a linha que tem um ID
    banco.prepare('UPDATE tarefas SET concluida = ? WHERE id = ?').run(concluida, id);
    resposta.json({ ok: true});
})

// ========================= APAGAR ==================================
// DELETE /TAREFAS/5 ----> apaga a tarefa de id 5
app.delete('/tarefas/:id', (requisicao, resposta) => {
    const id = requisicao .params.id;

    //DELETE: remove a linha que tem esse id
    banco.prepare('DELETE FROM tarefas WHERE id = ?').run(id);

    resposta.json({ ok: true});
});

//---------------------------------------------------------------------
// PARTE 5: LIGAR O SERVIDOR
//---------------------------------------------------------------------
app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000');

})
