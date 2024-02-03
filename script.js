
let game = {
    grid: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
};
console.log(game.grid);


function checkWin(g)  {
    const gameEnders = [
    g[0][0] === g[0][1] && g[0][1] === g[0][2],
    g[1][0] === g[1][1] && g[1][0] === g[1][2],
    g[2][0] === g[2][1] && g[2][1] === g[2][2],
    g[0][0] === g[1][0] && g[1][0] === g[2][0],
    g[0][1] === g[1][1] && g[1][1] === g[2][1],
    g[0][2] === g[1][2] && g[1][2] === g[2][2],
    g[0][0] === g[1][1] && g[1][1] === g[2][2],
    g[0][2] === g[1][1] && g[1][1] === g[2][0]
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




function startGame(){
    let player1 = prompt("Player 1, enter your name: ");
    let player2 = prompt("Player 2, enter your name: ");
    console.log(player1, player2);
    consoleGame();
}

const startButton = document.querySelector("#start-button")
startButton.addEventListener("click", startGame);


function consoleGame() {
    let playerInput = prompt("place your X or O on the grid 1-9:");
    playerInput = parseInt(playerInput);
    
}