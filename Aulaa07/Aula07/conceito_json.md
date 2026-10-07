// JSON significa JavaScript Object Notation e é um formato de representação e troca de dados.

JSON É COMO FICHA DE CADASTRO.

FICHA FÍSICA:           JSON:
NOME: JOÃO              "nome": "João"
IDADE: 25               "idade": 25
CIDADE: SÃO PAULO       "cidade": "SP"

É UM FORMATO PARA ORGANIZAR DADOS QUE TODO MUNDO ENTENDE (QUALQUER IMAGEM)



{
    "cachorro":{
        "nome": "Max",
        "idade": 3,
        "raca": "Golden",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "joão",
            "telefone": "1199999967"
        }
    }
}
<!-- ========================================= -->
EXPLICAÇÃO
<!-- ========================================= -->
// STIRNG (texto) - sempre com aspas
"nome": "Max"

NUMBER (numero) - Sem aspas
"idade": 3,
"peso": 25.5,

// BOOLEAN (true/false)
"vascinado": true,

// ARRAY (listas) - com colchetes
"brinquedos": ["bola", "osso"]

// OBJECT (objeto) - com chaves
"dono": {
            "nome": "João",
            "telefone": "1199999967"
        }

// NULL (vazio)
"dataFalescimento": null