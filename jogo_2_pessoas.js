function assertGameIsValid(game)
{
    const jogadasPermitidas = ["pe", "pa", "te"];
    
    if(game.length != 2){
        throw 'Wrong number of players';
    }
    else if (!jogadasPermitidas.includes(game[0][1]) 
             || !jogadasPermitidas.includes(game[1][1])){
        throw 'No Such Strategy Error';
    }
}


function sortPlayersByStrategy(firstPlayer, secondPlayer)
{
    if (firstPlayer[1] < secondPlayer[1]) {
        return -1;
    }
    if (firstPlayer[1] > secondPlayer[1]) {
        return 1;
    }
    return 0;
}

function comparePlayersByStrategy(firstPlayer, secondPlayer)
{
    firstStrategy = firstPlayer[1]
    secondStrategy = secondPlayer[1]
    
    if(firstStrategy == secondStrategy
       || firstStrategy == "pa" && secondStrategy == "pe"
       || firstStrategy == "pe" && secondStrategy == "te"
      ){
        return firstPlayer;
    }

    return secondPlayer;
}


function findWinner(game){
    assertGameIsValid(game)

    players = [game[0], game[1]]

    players.sort(sortPlayersByStrategy);

    winner = comparePlayersByStrategy(players[0], players[1]);
    
    return winner;
}

let jogador1 = ["Guilherme", "pe"];
let jogador2 = ["Renata", "te"];
let game = [jogador1, jogador2];

console.log("ganhador:", findWinner(game));
