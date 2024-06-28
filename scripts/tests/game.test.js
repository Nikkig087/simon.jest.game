
// this beforeAll code is the same for every html file that we want to load into the DOM we just might want to change file name

const {game,newGame,showScore,addTurn,lightsOn} = require("../game")


beforeAll(()=> {
let fs = require("fs")

let fileContents = fs.readFileSync("index.html","utf-8");
document.open()
document.write(fileContents)
document.close()
})

describe("game object contains correct keys", ()=> {
    test("score key exists",() => {
        // we are testing if the game object contains a key called score
        expect("score" in game).toBe(true)
    })


    test("currentGame key exists",() => {
        // we are testing if the game object contains a key called currentGame
        expect("currentGame" in game).toBe(true)
    })

    test("playerMoves key exists",() => {
        // we are testing if the game object contains a key called playerMoves
        expect("playerMoves" in game).toBe(true)
    })

    test("choices key exists",() => {
        // we are testing if the game object contains a key called choices
        expect("choices" in game).toBe(true)
    })
    test("choices contains correct ids",()=>{
        expect(game.choices).toEqual(["button1","button2","button3","button4"]) //array to have the values of button1,button2...
    })
})

describe("newGame works correctly",()=>{
    /** I want to use another beforeAll  function, because we want to set  
    up the game state with some fake values to  see if the new game function resets them */

    beforeAll(()=> {
        game.score =42;
        game.playerMoves = ["button1","button2"]
        game.currentGame = ["button1","button2"]
        document.getElementById("score").innerText ="42" // we are setting the text on the html to be 42
        newGame() //this should reset the score
    });

    test("should set score to zero",()=>{
        expect(game.score).toEqual(0)
    });

    /**test("should clear the current Game array ",()=>{
    expect(game.currentGame.length).toBe(0) 
    }); // 0 so the array should be empty*/

    test("should one element in the computers array", ()=> {
        expect(game.currentGame.length).toBe(1)
    });

    test("should clear the player Moves array ",()=>{
        expect(game.playerMoves.length).toBe(0)
        });

    test("should display 0 for the element with the id of score ",()=>{
    expect(document.getElementById("score").innerText).toEqual(0)})

    })

describe("gameplay works correctly",()=>{
    beforeEach(()=>{
        game.score = 0;
        game.currentGame = []
        game.playerMoves = []
        addTurn() // to add a new turn to our current game
    });
    afterEach(()=>{
      game.score = 0;
      game.currentGame = []
      game.playerMoves =[]  
    });

    test("addTurn addes a new turn to the game",()=>{
        addTurn()
        expect(game.currentGame.length).toBe(2)
    })

    test("should add the correct class to our button to light it up",()=>{
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0])//get the element at index 0
        expect(button.classList).toContain("light")
    })
})



