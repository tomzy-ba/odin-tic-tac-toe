



const players = function (player1, player2) {
    player1Name = player1;
    player2Name = player2;
}
function startGame() {
    let player1 = prompt("Player 1, enter your name");
    let player2 = prompt("Player 2, enter your name");
    players(player1, player2);
    console.log(player1Name, player2Name);
    addDom();
}

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startGame);

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
        else if (board[0] !== 1 && board[1] !== 2 && board[2] !== 3 && board[3] !== 4 && board[4] !== 5 && board[5] !== 6 && board[6] !== 7 && board[7] !== 8 && board[8] !== 9) {
            console.log("It's a tie!");
            return "tie";
        }
    }

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
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        gameContainer.innerHTML = "";
        endmsg.innerHTML = "";

        let playerTurn = true;
        board.forEach((cell, index) => {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.innerHTML = cell;
            gameContainer.appendChild(cellDiv);


            const gameStatus = document.getElementById("game-status");

            cellDiv.addEventListener("click", function() {
                console.log(playerTurn);
                

                if (playerTurn === true && board[index] !== "X" && board[index] !== "O") {
                    playerTurn = !playerTurn;
                    board[index] = "X";
                    cellDiv.innerHTML = "X";
                    console.log(board);
                    gameStatus.innerHTML = `${player2Name}'s turn`;

                }   else if (board[index] !== "X" && board[index] !== "O") {
                        playerTurn = !playerTurn;
                        board[index] = "O";
                        cellDiv.innerHTML = "O";
                        console.log(board);
                        gameStatus.innerHTML = `${player1Name}'s turn`;
                    }

                    if (checkWin() === true) {
                        gameStatus.innerHTML = "";
                        setTimeout(() => {
                        gameContainer.innerHTML = "";
                        board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        }, 200);
                        if (playerTurn === false) {
                    
                        const container = document.getElementById("endmsg");
                        const winmsg = document.createElement("h2");
                        winmsg.innerHTML = `${player1Name} wins!`;
                        container.append(winmsg);
                        } else {
                            const container = document.getElementById("endmsg");
                            const losemsg = document.createElement("h2");
                            losemsg.innerHTML = `${player2Name} wins!`;
                            container.append(losemsg);
                        }
                    }
                    else if (checkWin() === "tie") {
                        gameStatus.innerHTML = "";
                        setTimeout(() => {
                            gameContainer.innerHTML = "";
                            board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        }, 200);
                        const container = document.getElementById("endmsg");
                        const tiemsg = document.createElement("h2");
                        tiemsg.innerHTML = "It's a tie!";
                        container.append(tiemsg);
                    }

            });

        });

        }
