
// this beforeAll code is the same for every html file that we want to load into the DOM we just might want to change file name

const {game} = require("../game")

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

