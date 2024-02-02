



const players = function (player1, player2) {
    player1Name = player1;
    player2Name = player2;
}
function startGame() {
    let player1 = prompt("Player 1, enter your name");
    let player2 = prompt("Player 2, enter your name");
    players(player1, player2);
    console.log(player1Name, player2Name);
}


const board = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
    ];

    function checkWin() {
        if (board[0] === board[1] && board[0] === board[2] ||
            board[3] === board[4] && board[3] === board[5] || 
            board[6] === board[7] && board[6] === board[8]) {
            game = false;
        }
    }

function playGame()  {
    game = true;
    while (game == true) {
        inputPlace = prompt("Player 1, enter the cell you want to play in: 1-9");
        board[inputPlace-1] = "X";
        addDom();

        console.log(board);
        checkWin();
        if (game == false) {console.log("Player1 Wins!"); break; }

        

        inputPlace = prompt("Player 2, enter the cell you want to play in: 1-9");
        board[inputPlace-1] = "O";
        addDom();

        console.log(board);
        checkWin();
        if (game == false) {console.log("Player2 Wins!"); break; }
    }

    }

    function addDom() {
        const gameContainer = document.getElementById("game-board");
        gameContainer.innerHTML = "";
        board.forEach((cell, index) => {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.innerHTML = cell;
            gameContainer.appendChild(cellDiv);
        });

        }

console.log(board)
startGame();
playGame();
addDom();