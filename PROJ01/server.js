// Cronômetro no terminal

//================================
// Bloco 01: Preparando Terminal
//================================
// require = "traga para cá uma ferramenta pronta!"
// readline = "é a ferramenta do Node que sabe conversar com o teclado"
const readline = require('readline');

//process.stdin = a entrada do programa (teclado)
// Esta linha manda o Node AVISAR o programa toda vez que uma tecla for apertada
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Mensagem de Boas-Vindas
console.log('⏱️ Cronômetro iniciado!');
console.log('p = pausar/continuar | r = resetar \ ctrl + c = Sair');

//====================================
// Bloco 02: A memória do cronômetro
//====================================
// tempo guarda QUANTOS SEGUNDOS já passaram.
let tempo =0;

// rodando é um interruptor de luz: true = contando, false = pausado
let rodando = true;

//====================================
// Bloco 03: Deixando o tempo bonito (mm:ss)
//====================================

function formatar(total){
    //math.floor aredonda um número para baixo, sempre retornando um número inteiro.
    // Exemplo: 65/60 = 1.08... -> Math.floor joga fora os decimais -> 1
    const min = Math.floor(total / 60);

    // o simbolo % dá o RESTO da divisão
    const seg = total % 60;


    // String (...) transforma o número em texto
    // padStart (2, 0) = "Se tiver menos de 2 caracteres, complete com 0 na frente"
    // Assim "5" vira "05", depois nós juntamos os pedaços com o ":"
    return String(main).padStart(2, '0') + ':' + String(seg).padStart(2, '0');
}

//====================================
// Bloco 04: O ❤️ do programa
//====================================

    // setInterval = "repita isso a cada X milissegundos"
    // 1000 milissegundos = 1 segundo (veja o número no final do bloco)
setInterval(() =>{
    // só conta se o interruptor estiver ligado
    if (rodando) {
        //soma 1 em tempo. é o mesmo que: tempo = tempo + 1
        tempo ++;
        //limpa a tela para o número "mudar no mesmo lugar"
        console.clear();
        console.log('⏱️' + formatar (tempo));
    }
}, 1000); 

//====================================
// Bloco 05: Ouvindo o teclado 
//====================================