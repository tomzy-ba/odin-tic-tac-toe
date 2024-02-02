



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
startGame();


const board = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9];

    function checkWin() {
        if (board[0] === board[1] && board[0] === board[2] ||
            board[3] === board[4] && board[3] === board[5] || 
            board[6] === board[7] && board[6] === board[8]) {
            console.log("GAME OVER");
            game = false;
        }
    }
console.log(board[0]);

function playGame()  {
    game = true;
    while (game == true) {
        checkWin();
        inputPlace = prompt("Player 1, enter the cell you want to play in: 1-9");
        inputPlace = parseInt(inputPlace);
        board[inputPlace-1] = "X";

        console.log(board);
        checkWin();



        inputPlace = prompt("Player 2, enter the cell you want to play in: 1-9");
        inputPlace = parseInt(inputPlace);
        board[inputPlace-1] = "O";

        console.log(board);
        checkWin();
    }

    }



    
    
// how to get these values in the array




playGame();
// how to get a value of a cell in a 2D array