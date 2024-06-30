let game = {
    score:0,
    currentGame:[], //array
    playerMoves:[], //array
    choices:["button1","button2","button3","button4"], //array
    turnNumber : 0

}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    for (let circle of document.getElementsByClassName("circle")){
        if (circle.getAttribute("data-listener")!== "true") {
            circle.addEventListener("click",(e) => {
                let move = e.target.getAttribute("id")
                lightsOn(move)
                game.playerMoves.push(move)
                playerTurn()
            })
            circle.setAttribute("data-listener","true")
    }
}
    showScore();
    addTurn();
}
function addTurn() {
   
    game.playerMoves = []
    game.currentGame.push(game.choices[(Math.floor(Math.random() *4))])
    showTurns()

    /**push onto  the computer game sequence,  
    we're going to go to our game.choices  key, which of course contains our four values,
    the IDs of our buttons. 
    
    And then  we're going to use the math.random library to generate a random number between zero and  three. We're going to use that as the index of our choices array and then the resulting  choice is pushed onto the current game array. */
    
   
}

/**The showTurns function and player clicks should  cause the circle to change colour or to light up.  */


function showScore() {
    document.getElementById("score").innerText = game.score
}

function lightsOn(circ){
    document.getElementById(circ).classList.add("light")
    setTimeout(function(){
        document.getElementById(circ).classList.remove("light")},400
    )
}

function showTurns(){
    game.turnNumber = 0
    let turns = setInterval(function() {
        lightsOn(game.currentGame[game.turnNumber])
        game.turnNumber++
        if(game.turnNumber>=game.currentGame.length){
            clearInterval(turns)
        }
    },800)
}
    /** it's setting this  interval turning the lightsOn,  
    incrementing the game turnNumber,  and then turning them off again.
 */


    function playerTurn() {
        let i = game.playerMoves.length - 1; 
        /**Get the index  of the last element from our playerMoves array.  
        Because what we're going to do is compare that  with the same index in the current game array,  
        if our player gets the answers  correct then these two should match.
        This is convenient because it means that we can  just compare elements at the same index number.   */
        if (game.currentGame[i] === game.playerMoves[i]) {
            if (game.currentGame.length === game.playerMoves.length) {
                game.score++;
                showScore();
                addTurn();
            }
        } else {
            alert("Wrong move!");
            newGame();
        }
    }


module.exports = {game,newGame,showScore,addTurn,lightsOn,showTurns,playerTurn} 

// we will be exporting more than one object so they need to go in curley braces, we need to import this in our game.test.js also, its the first line


/**newGame is clearing out  our fake data from the currentGame array  
and then addTurn is pushing a random choice now */