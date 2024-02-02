



const players = function (player1, player2) {
    player1Name = player1;
    player2Name = player2;
}
function startGame() {
    let player1 = prompt("Player 1, enter your name");
    let player2 = prompt("Player 2, enter your name");
    players(player1, player2);
    console.log(player1Name, player2Name);
    // playGame();
    addDom();
}

let board = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
    ];

    function checkWin() {
        if (board[0] === board[1] && board[0] === board[2] ||
            board[3] === board[4] && board[3] === board[5] || 
            board[6] === board[7] && board[6] === board[8] ||
            board[0] === board[3] && board[0] === board[6] ||
            board[1] === board[4] && board[1] === board[7] ||
            board[2] === board[5] && board[2] === board[8] ||
            board[0] === board[4] && board[0] === board[8] ||
            board[2] === board[4] && board[2] === board[6]) 
            {
                return true;
        }
    }
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startGame);

 function playGame()  {
    game = true;
    while (game == true) {

        console.log(board);
        checkWin();

        


        console.log(board);
        checkWin();
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

            player1Turn = false;
            cellDiv.addEventListener("click", function() {
                player1Turn = !player1Turn;
                console.log(player1Turn);

                if (player1Turn === true && board[index] !== "X" && board[index] !== "O") {
                    board[index] = "X";
                    cellDiv.innerHTML = "X";
                    console.log(board);

                }   else if (board[index] !== "X" && board[index] !== "O") {
                        board[index] = "O";
                        cellDiv.innerHTML = "O";
                        console.log(board);
                    }

                    if (checkWin() === true) {
                        setTimeout(() => {
                        alert("Player 1 wins!");
                        gameContainer.innerHTML = "";
                        board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        }, 200);
                    }

            });

        });

        }
