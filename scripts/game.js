let game = {
    score:0,
    currentGame:[], //array
    playerMoves:[], //array
    choices:["button1","button2","button3","button4"] //array

}

module.exports = {game} 
// we will be exporting more than one object so they need to go in curley braces, we need to import this in our game.test.js also, its the first line