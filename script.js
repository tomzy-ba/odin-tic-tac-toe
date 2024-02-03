
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
    gameEnders.forEach((ender, index) => {
        return ender[index] == true;
    });
}



function startGame(){
    let player1 = prompt("Player 1, enter your name: ");
    let player2 = prompt("Player 2, enter your name: ");
    console.log(player1, player2);
}

const startButton = document.querySelector("#start-button")
startButton.addEventListener("click", startGame);


checkWin(game.grid);