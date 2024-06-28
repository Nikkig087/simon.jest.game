let game = {
    score:0,
    currentGame:[], //array
    playerMoves:[], //array
    choices:["button1","button2","button3","button4"] //array

}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}
function addTurn() {
   
    game.playerMoves = []
    game.currentGame.push(game.choices[(Math.floor(Math.random() *4))])

    /**push onto  the computer game sequence,  
    we're going to go to our game.choices  key, which of course contains our four values,
    the IDs of our buttons. 
    
    And then  we're going to use the math.random library to generate a random number between zero and  three. We're going to use that as the index of our choices array and then the resulting  choice is pushed onto the current game array. */
    //showTurns:
}

/**The showTurns function and player clicks should  cause the circle to change colour or to light up.  */
function showTurns(){

}



function showScore() {
    document.getElementById("score").innerText = game.score
}

function lightsOn(circ){
    document.getElementById(circ).classList.add("light")
    setTimeout(()=>{
        document.getElementById(circ).classList.remove("light"),400
    })
    

}

module.exports = {game,newGame,showScore,addTurn,lightsOn} 

// we will be exporting more than one object so they need to go in curley braces, we need to import this in our game.test.js also, its the first line


/**newGame is clearing out  our fake data from the currentGame array  
and then addTurn is pushing a random choice now */