// so first we need to create
const board = ["lol"];

function gameBoard(topleft, topmid, topright, midleft, midmid, midright, bottomleft, bottommid, bottomright) {
    topleft = topleft;
    topmid = topmid;
    topright = topright;
    midleft = midleft;
    midmid = midmid;
    midright = midright;
    bottomleft = bottomleft;
    bottommid = bottommid;
    bottomright = bottomright;

    return {topleft, topmid, topright, midleft, midmid, midright, bottomleft, bottommid, bottomright };
}
console.log(gameBoard(board))

function createUser (player1, player2) {
        player1 = player1;
        player2 = player2;
        
        return {player1, player2}


}


function makeMove (move, place) {
    move = move;
    place = place;

    return {
        
    }

}