const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
    console.log('---------');
    for (let i = 0; i < 3; i++) {
        console.log(`| ${board[i][0]} | ${board[i][1]} | ${board[i][2]} |`);
        console.log('---------');
    }
}

function makeMove(row, col) {
    if (board[row][col] === ' ') {
        board[row][col] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        printBoard();
        checkWin();
    } else {
        console.log('Invalid move. Try again.');
    }
}

function checkWin() {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]] &&
            board[a[0]][a[1]] !== ' '
        ) {
            console.log(`Player ${board[a[0]][a[1]]} wins!`);
            rl.close();
            return;
        }
    }

    if (board.flat().every(cell => cell !== ' ')) {
        console.log('It\'s a tie!');
        rl.close();
        return;
    }

    rl.question('Next move (row col): ', answer => {
        const [row, col] = answer.split(' ');
        makeMove(Number(row), Number(col));
    });
}

printBoard();
rl.question('First move (row col): ', answer => {
    const [row, col] = answer.split(' ');
    makeMove(Number(row), Number(col));
});