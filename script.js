// so first we need to create
const gameBoard = [];

function createUser (player1, player2) {
    return {
        player1: player1,
        player2: player2,
        
        nameOutput: function() {
            console.log(`Hi my name is ${this.player1} and this is ${this.player2}`)
        }

    }

}
const players = createUser("tom", "jerry");
players.nameOutput();