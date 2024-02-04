
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


    const winAlert = () => {
        setTimeout(() => {
        `${playerTurn} wins!`
    }, 1000);
    

if (index === 0) { // top row
    winAlert();
    console.log("top row");


} else if (index === 1) { // middle row
    winAlert();
    console.log("middle row");


} else if (index === 2) { // bottom row
    winAlert();
    console.log("bottom row");


} else if (index === 3) { // left column
    winAlert();
   console.log("left column"); 

} else if (index === 4) { // middle column
    winAlert();
    console.log("middle column");

} else if (index === 5) { // right column
    winAlert();
    console.log("right column");


} else if (index === 6) { // top left to bottom right
    winAlert();
    console.log("top left to bottom right");


} else if (index === 7) { // top right to bottom left
    winAlert();
    console.log("top right to bottom left");


} else if (index === 8) { // Draw
    console.log("Draw");

} else {
    return -1;
}
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


        
let playerTurn = true; 
    allCells.forEach((cell, index) => {
        cell.addEventListener("click", function() {
            console.log(playerTurn);
            if (playerTurn === true && cell.textContent !== "X" && cell.textContent !== "O" && checkWin() == -1) {
                cell.textContent = "X";
                playerTurn = !playerTurn;


                game.grid[index] = "X"
                

                ghostLetters.forEach(letter => {
                    letter.textContent = "O";
                });

            } else if (playerTurn === false && cell.textContent !== "X" && cell.textContent !== "O" && checkWin() == -1){
                cell.textContent = "O";
                playerTurn = !playerTurn;

                game.grid[index] = "O"

                ghostLetters.forEach(letter => {
                    letter.textContent = "X";
                });
            } 
            checkWin();
        });
    });


       
}
