
let game = {
    grid: [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ],
};


function checkWin()  {
    g = game.grid;
    const gameEnders = [
    g[0] === g[1] && g[1] === g[2],
    g[3] === g[4] && g[4] === g[5],
    g[6] === g[7] && g[7] === g[8],
    g[0] === g[3] && g[3] === g[6],
    g[1] === g[4] && g[4] === g[7],
    g[2] === g[5] && g[5] === g[8],
    g[0] === g[4] && g[4] === g[8],
    g[2] === g[4] && g[4] === g[6],

    ]
    const checkEnders = gameEnders.find(ender => ender === true);
    const index = gameEnders.indexOf(checkEnders);
    
console.log(game.grid);
if (index === 0) { // top row
    console.log("top row");


} else if (index === 1) { // middle row
    console.log("middle row");


} else if (index === 2) { // bottom row
    console.log("bottom row");


} else if (index === 3) { // left column
   console.log("left column"); 

} else if (index === 4) { // middle column
    console.log("middle column");

} else if (index === 5) { // right column
    console.log("right column");


} else if (index === 6) { // top left to bottom right
    console.log("top left to bottom right");


} else if (index === 7) { // top right to bottom left
    console.log("top right to bottom left");


} else if (index === 8) { // Draw
    console.log("Draw");

} else {
    return -1;
}
}
 


function enterNames(){
    let player1 = prompt("Player 1, enter your name: ");
    let player2 = prompt("Player 2, enter your name: ");
    console.log(player1, player2);
    startGame();
}


const startButton = document.querySelector("#start-button")
startButton.addEventListener("click", enterNames);


let playerTurn = "player1";
function startGame() {
    const allCells = document.querySelectorAll("#game-board div");
    const ghostLetters = document.querySelectorAll("#game-board span");


ghostLetters.forEach(letter => {
    letter.textContent = "X";
});


        
        
 
    allCells.forEach((cell, index) => {
        cell.addEventListener("click", function() {
            if (playerTurn === "player1" && cell.textContent !== "X" && cell.textContent !== "O" && checkWin() == -1) {
                cell.textContent = "X";
                playerTurn = "player2"


                game.grid[index] = "X"
                

                ghostLetters.forEach(letter => {
                    letter.textContent = "O";
                });

            } else if (playerTurn === "player2" && cell.textContent !== "X" && cell.textContent !== "O" && checkWin() == -1){
                cell.textContent = "O";
                playerTurn = "player1";

                game.grid[index] = "O"

                ghostLetters.forEach(letter => {
                    letter.textContent = "X";
                });
            } 
            checkWin();
        });
    });


       
}

startGame();