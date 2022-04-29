function assertGameIsValid(game){
    const jogadasPermitidas = ["pe", "pa", "te"];
    
    if(game.length != 2){
        throw 'Wrong number of players'; 
    }
        
    else if (!jogadasPermitidas.includes(game[0][1])
           || !jogadasPermitidas.includes(game[1][1])){
        throw 'No Such Strategy Error';
    }
}

function whoWins(game){
  assertGameIsValid(game);
  
  let escolhaJogador1 = game[0][1];
  let escolhaJogador2 = game[1][1];
  
    if(escolhaJogador1 == escolhaJogador2
       || escolhaJogador1 == "pa" && escolhaJogador2 == "pe"
       || escolhaJogador1 == "pe" && escolhaJogador2 == "te"
       || escolhaJogador1 == "te" && escolhaJogador2 == "pa"
      ){
        return game[0];
    }else {
        return game[1];
    }
}

function definindoGanhadores(game) {    
    if (!Array.isArray(game[0][0])) {
        return whoWins(game)
    }

    let ganhador1 = definindoGanhadores(game[0])
    let ganhador2 = definindoGanhadores(game[1])

    return definindoGanhadores([ganhador1, ganhador2])
}


let torneio = 
[  
    [
        [
            [
                ["Guilherme", "pe"],
                ["Renata",    "te"]
            ], 
            [
                ["Pedro",     "pe"],
                ["Leo",       "pa"]
            ],
        ],
        [
            [
                ["Carol",     "pe"],
                ["Amanda",    "te"]
            ], 
            [
                ["Gustavo",   "te"], 
                ["Sofia",     "pe"]
            ],
        ],
    ],
    [
        [
            [
                ["Carlos", "pe"],
                ["Fabio",    "te"]
            ], 
            [
                ["André",     "pe"],
                ["João",       "pa"]
            ],
        ],
        [
            [
                ["marcus", "pe"],
                ["mauricio",    "te"]
            ], 
            [
                ["kelly",   "te"],
                ["jessica",     "pe"]
            ],
        ]
    ]
]

try {
    ganhador = definindoGanhadores(torneio);
    console.log(ganhador)
}
catch(e) {
    console.error(e)   
}

