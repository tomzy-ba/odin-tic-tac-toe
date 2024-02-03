
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
    g[3] === g[4] && g[5] === g[5],
    g[6] === g[7] && g[7] === g[8],
    g[0] === g[3] && g[3] === g[6],
    g[1] === g[4] && g[4] === g[7],
    g[2] === g[5] && g[5] === g[8],
    g[0] === g[4] && g[4] === g[8],
    g[2] === g[4] && g[4] === g[6]

    ]
    const checkEnders = gameEnders.find(ender => ender === true);
    const index = gameEnders.indexOf(checkEnders);

    return index;
}
if (checkWin(game.grid) === 0) {
    

} else if (checkWin(game.grid) === 1) {

} else if (checkWin(game.grid) === 2) {

} else if (checkWin(game.grid) === 3) {

} else if (checkWin(game.grid) === 4) {

} else if (checkWin(game.grid) === 5) {

} else if (checkWin(game.grid) === 6) {

} else if (checkWin(game.grid) === 7) {

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
            if (playerTurn === "player1" && cell.textContent !== "X" && cell.textContent !== "O") {
                cell.textContent = "X";
                playerTurn = "player2"


                game.grid[index] = "X"
                // console.log(game.grid);
                console.log(checkWin());
                

                ghostLetters.forEach(letter => {
                    letter.textContent = "O";
                });

            } else if (playerTurn === "player2" && cell.textContent !== "X" && cell.textContent !== "O"){
                cell.textContent = "O";
                playerTurn = "player1";

                game.grid[index] = "O"
                // console.log(game.grid);
                console.log(checkWin());

                ghostLetters.forEach(letter => {
                    letter.textContent = "X";
                });
            }
        });
    });

       
}

startGame();