



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
    "", "", "",
    "", "", "",
    "", "", ""
    ];


    function checkWin() {
        if (
            (board[0] === board[1] && board[1] === board[2] && board[2] == board[2].match(/X|O/g)) ||
            (board[3] === board[4] && board[4] === board[5] && board[5] == board[5].match(/X|O/g)) ||
            (board[6] === board[7] && board[7] === board[8] && board[8] == board[8].match(/X|O/g)) ||
            (board[0] === board[3] && board[3] === board[6] && board[6] == board[6].match(/X|O/g)) ||
            (board[1] === board[4] && board[4] === board[7] && board[7] == board[7].match(/X|O/g)) ||
            (board[2] === board[5] && board[5] === board[8] && board[8] == board[8].match(/X|O/g)) ||
            (board[0] === board[4] && board[4] === board[8] && board[8] == board[8].match(/X|O/g)) ||
            (board[2] === board[4] && board[4] === board[6] && board[6] == board[6].match(/X|O/g))
            ) 
            {
                return true;
        }
        else if (board[0] !== "" && board[1] !== "" && board[2] !== "" && board[3] !== "" && board[4] !== "" && board[5] !== "" && board[6] !== "" && board[7] !== "" && board[8] !== "") {
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
        gameon = true;
        const gameContainer = document.getElementById("game-board");
        const allCells = document.querySelectorAll("#game-board div");
        allCells.innerHTML = "";
        const gameStatus = document.getElementById("game-status");
        board = ["", "", "", "", "", "", "", "", ""];
        endmsg.innerHTML = "";
        gameStatus.innerHTML = `${player1Name}'s turn`;

        playerTurn = true;
        board.forEach((cell, index) => {
            const cellDiv = document.querySelector("#game-board div");
            cellDiv.innerHTML = cell;
            gameContainer.appendChild(cellDiv);



            cellDiv.addEventListener("click", function() {
                console.log(playerTurn);
                

                if (playerTurn === true && board[index] !== "X" && board[index] !== "O" && checkWin() !== true && checkWin() !== "tie"){
                    playerTurn = !playerTurn;
                    board[index] = "X";
                    cellDiv.innerHTML = "X";
                    console.log(board);
                    gameStatus.innerHTML = `${player2Name}'s turn`;

                }   else if (playerTurn === false && board[index] !== "X" && board[index] !== "O" && checkWin() !== true && checkWin() !== "tie"){
                        playerTurn = !playerTurn;
                        board[index] = "O";
                        cellDiv.innerHTML = "O";
                        console.log(board);
                        gameStatus.innerHTML = `${player1Name}'s turn`;
                    }


                        const container = document.getElementById("endmsg");
                        container.addEventListener("click", () => {
                            container.close();
                        });
                    console.log(checkWin());
                    if (checkWin() === true) {
                        gameStatus.innerHTML = "";
                        setTimeout(() => {
                        }, 50);


                        if (playerTurn === false && gameon === true) {
                            
                         container.showModal();
                         container.innerHTML = `${player1Name} wins!`;
                         gameon = false;
                        } else if (playerTurn === true && gameon === true){
                            container.showModal();
                            container.innerHTML = `${player2Name} wins!`;
                            gameon = false;
                        }
                    }
                    else if (checkWin() === "tie" && gameon === true) {
                        gameStatus.innerHTML = "";
                        container.showModal();
                        container.innerHTML = "It's a tie!";
                        gameon = false;
                    }

            });

        });

        }
