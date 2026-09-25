// Objetos_em_javascript.js
console.log("1°-----------------------------------------------------------------------------------------------------------------")
// Exercício 1 – Sistema de Login
// Crie um objeto usuario com:
// login
// senha
// tipo

// Depois, exiba a mensagem:
// O login do administrador é admin e a senha é 1234, muito fraca por sinal.

let usuario = {
    login: "admin",
    senha: "1234",
    tipo: "administrador"
};

console.log("O login do administrador é:", usuario.login ,"e a senha é:", usuario.senha ,",muito fraca por sinal.")
console.log("2°-----------------------------------------------------------------------------------------------------------------")

// Exercício 2 – Cadastro de Aluno
// Crie um objeto aluno com:
// nome
// curso
// turma
// Depois, exiba a mensagem:
// O aluno Lucas está matriculado no curso de Desenvolvimento de Sistemas, na turma 2º DS.

let aluno = {
    nome: "Lucas",
    curso: "Desenvolvimento de Sistemas",
    turma: "2º DS."
};

console.log("O aluno", aluno.nome ,"está matriculado no curso de", aluno.curso,", na turma", aluno.turma)
console.log("3°-----------------------------------------------------------------------------------------------------------------")

// Exercício 3 – Professor
// Crie um objeto professor com:
// nome
// disciplina
// turno
// Depois, exiba a mensagem:
// O professor Carlos ministra a disciplina de JavaScript no turno da manhã.

let professor = {
    nome: "Carlos",
    disciplina: "JavaScript",
    turno: "manhã"
};

console.log("O professor", professor.nome ,"ministra a disciplina de", professor.disciplina ,"no turno da", professor.turno)
console.log("4°-----------------------------------------------------------------------------------------------------------------")

// Exercício 4 – Empresa
// Crie um objeto empresa com:
// nome
// area
// cidade
// Depois, exiba a mensagem:
// A empresa Tech Solutions atua na área de Tecnologia e fica em Fortaleza.

let empresa = {
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Fortaleza"
};

console.log("A empresa", empresa.nome ,"atua na área de", empresa.area ,"e fica em", empresa.cidade)
console.log("5°-----------------------------------------------------------------------------------------------------------------")

// Exercício 5 – Computador
// Crie um objeto computador com:
// marca
// processador
// memoria
// Depois, exiba a mensagem:
// O computador da marca Dell possui processador Intel i5 e memória de 8GB.

let computador = {
    marca: "Dell",
    processador: "Intel i5",
    memoria: "8GB"
};

console.log("O computador da marca", computador.marca ,"possui processador", computador.processador ,"e memória de", computador.memoria)
console.log("6°-----------------------------------------------------------------------------------------------------------------")

// Exercício 6 – Livro
// Crie um objeto livro com:
// titulo
// autor
// paginas
// Depois, exiba a mensagem:
// O livro JavaScript Básico foi escrito por Ana Silva e possui 200 páginas.

let livro = {
    titulo: "JavaScript Básico",
    autor: "Ana Silva",
    paginas: "200 páginas"
};

console.log("O livro", livro.titulo ,"foi escrito por", livro.autor ,"e possui", livro.paginas)
console.log("7°-----------------------------------------------------------------------------------------------------------------")

// Exercício 7 – Filme
// Crie um objeto filme com:
// nome
// genero
// ano
// Depois, exiba a mensagem:
// O filme Matrix é do gênero Ficção e foi lançado em 1999.

let filme = {
    nome: "Matrix",
    genero: "Ficção",
    ano: "1999"
};

console.log("O filme", filme.nome ,"é do gênero", filme.genero ,"e foi lançado em", filme.ano)
console.log("8°-----------------------------------------------------------------------------------------------------------------")

// Exercício 8 – Jogo
// Crie um objeto jogo com:
// nome
// plataforma
// genero
// Depois, exiba a mensagem:
// O jogo Minecraft roda na plataforma PC e pertence ao gênero Sandbox.

let jogo = {
    nome: "Minecraft",
    plataforma: "PC",
    genero: "Sandbox"
};

console.log("O jogo", jogo.nome ,"roda na plataforma", jogo.plataforma ,"e pertence ao gênero", jogo.genero)
console.log("9°-----------------------------------------------------------------------------------------------------------------")

// Exercício 09 – Escola
// Crie um objeto escola com:
// nome
// cidade
// turno
// Depois, exiba a mensagem:
// A escola EEEP funciona na cidade de Fortaleza no turno da manhã.

let escola = {
    nome: "EEEP",
    cidade: "Fortaleza",
    turno: "manhã"
};

console.log("A escola", escola.nome ,"funciona na cidade de", escola.cidade ,"no turno da", escola.turno)
console.log("10°-----------------------------------------------------------------------------------------------------------------")

//Exercício 10 – Cadastro de Usuário
//Crie um objeto chamado conta para representar o cadastro de um usuário.

//O objeto deve possuir as seguintes propriedades:
//usuario
//senha
//nome
//email
//nivel
//curso
//turma
//idade

//Utilize os seguintes dados:
//Usuário: eduardo
//Senha: 1234
//Nome: Eduardo Silva
//E-mail: eduardo@email.com
//Nível: administrador
//Curso: Desenvolvimento de Sistemas
//Turma: DS 2
//Idade: 18

//Depois de criar o objeto, utilize as propriedades do objeto para montar e exibir no console as seguintes informações:
//Nome do usuário
//Nome completo
//E-mail
//Curso
//Turma
//Idade
//Nível de acesso
//Senha

//Por fim, crie uma mensagem utilizando várias propriedades do objeto:

//O usuário eduardo, de 18 anos, está matriculado no curso de Desenvolvimento de Sistemas, turma DS 2. Seu nível de acesso é administrador e seu e-mail é eduardo@email.com. A senha cadastrada é 1234.

let conta = {
    usuario: "eduardo",
    senha: "1234",
    nome: "Eduardo Silva",
    email: "eduardo@email.com",
    nivel: "administrador",
    curso: "Desenvolvimento de Sistemas",
    turma: "DS 2",
    idade: "18"
};

console.log("O usuário", conta.usuario ," de", conta.idade ,"anos, está matriculado no curso de", conta.curso ,", turma", conta.turma ,"Seu nível de acesso é", conta.nivel ,"e seu e-mail é", conta.email ,"A senha cadastrada é", conta.senha)
console.log("-----------------------------------------------------------------------------------------------------------------")
