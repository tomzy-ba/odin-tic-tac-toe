
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
    g[0] !== 0 && g[1] !== 1 && g[2] !== 2 && g[3] !== 3 && g[4] !== 4 && g[5] !== 5 && g[6] !== 6 && g[7] !== 7 && g[8] !== 8

    ]
    const checkEnders = gameEnders.find(ender => ender === true);
    const index = gameEnders.indexOf(checkEnders);
    console.log(index);


    function winAlert()  {
        setTimeout(() => {
            if(playerTurn === true) {
                alert("Player 2 wins!");
            } else {
                alert("Player 1 wins!");
            }
        }, 100);
    };
    

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
    setTimeout(() => {
    alert("Draw");
    }, 100);
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
startButton.addEventListener("click", () => {location.reload()});

let playerTurn = true;
let gameEnd = false;

function startGame() {
    const gameBoard = document.querySelector("#game-board");
    const allCells = document.querySelectorAll("#game-board div");
    const ghostLetters = document.querySelectorAll("#game-board span");




ghostLetters.forEach(letter => {
    letter.textContent = "X";
});


    allCells.forEach((cell, index) => {
        cell.addEventListener("click", function() {
            if (playerTurn === true && cell.textContent !== "X" && cell.textContent !== "O" && checkWin() == -1) {
                cell.textContent = "X";
                playerTurn = !playerTurn;


                game.grid[index] = "X"
                

                ghostLetters.forEach(letter => {
                    letter.textContent = "O";
                });
                checkWin();

            } else if (playerTurn === false && cell.textContent !== "X" && cell.textContent !== "O" && checkWin() == -1) { 
                cell.textContent = "O";
                playerTurn = !playerTurn;

                game.grid[index] = "O"

                ghostLetters.forEach(letter => {
                    letter.textContent = "X";
                });
                checkWin();
            } 
        });
    });


       
}
function winAlert()  {
    if (gameEnd === true) {
        return;
    }
    else if (playerTurn === true){
        alert(`${player1} wins!`);
    } else {
        alert(`${player2} wins!`);
    }
    gameEnd = true;
}

enterNames();