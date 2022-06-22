const gameState = {
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

function buildInitialState() {

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
const board = document.getElementById('board');

board.addEventListener('click', onBoardClick); //if a player clicks the board, it needs to populate the board (function)
function onBoardClick(event) {
    let selection = event.target.innerHTML
    
        if (!selection){
            event.target.innerHTML = 'X'
            console.log("now this inner html is populated")
        } 
        let player_one = 1;
        function display_input(squares){ 
            if ( player_one == 1 ){
                document.getElementById(squares).innerHTML = "X";
                player_one = 0;
            } else {
                document.getElementById(squares).innerHTML = "O";    
                player_one = 1;
            }   
        }
        

    // let id = event.target.id
    // let row = id[0]
    // let column = id[2]
    // if(gameState.board[row][column] === null){
    //     gameState.board[row][column] === gameState.players[0];
    //     console.log(gameState.board[row][column])
    //     ;
    // }
    

  renderState() // show the user the new state
}
