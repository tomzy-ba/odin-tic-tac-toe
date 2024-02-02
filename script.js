


let player1Name, player2Name, player1, player2;

const players = function (player1, player2) {
    player1Name = player1;
    player2Name = player2;
    this.player1 = 'X';
    this.player2 = 'O';

}
function startGame() {
    let player1 = prompt("Player 1, enter your name");
    let player2 = prompt("Player 2, enter your name");
    players(player1, player2);
    console.log(player1Name, player2Name);
}
startGame();


const obj = {board: [
        [
        1, 2, 3, 
        4, 5, 6, 
        7, 8, 9
    ]
    ]}

    const winningCombos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ]

function playGame()  {
    let score = 0;
    while (score < 1) {
        inputPlace = prompt("Player 1, enter the cell you want to play in: 1-9");
        inputPlace = parseInt(inputPlace);
        obj.board[0][inputPlace-1] = player1Name;
        console.log(obj.board[0]);


        inputPlace = prompt("Player 2, enter the cell you want to play in: 1-9");
        inputPlace = parseInt(inputPlace);
        obj.board[0][inputPlace-1] = player2Name;
        console.log(obj.board[0]);

    }



    
    
}
playGame();
// how to get a value of a cell in a 2D array