const gameState = {
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 0,
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
        if (!event.target.innerHTML){  //if no selection, I would like to put something there
            if (gameState.currentPlayer === 0){
                event.target.innerHTML = 'X'
                gameState.currentPlayer = 1
            } else {event.target.innerHTML = 'O'
                gameState.currentPlayer = 0
             }
            
        } 
       
    function ticTacToeChecker (){

        function getRow (board, row){
            return board[row];
        }









    }      
    

  renderState() // show the user the new state
}
