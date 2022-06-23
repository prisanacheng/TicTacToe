const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: 0,
};

function buildInitialState() {}

// render
function renderState() {}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
const board = document.getElementById("board");

board.addEventListener("click", onBoardClick); //if a player clicks the board, it needs to populate the board (function)
function onBoardClick(event) {
  if (!event.target.innerHTML) {
    //if no selection, I would like to put something there
    if (gameState.currentPlayer === 0) {
      event.target.innerHTML = "X";
      gameState.currentPlayer = 1;
    } else {
      event.target.innerHTML = "O";
      gameState.currentPlayer = 0;
    }
  }

  //function for row array
  function getRow(board, row) {
    return board[row];
  }

  //function for column array
  function getColumn(board, column) {
    let columnArray = [];
    for (let i = 0; i < board.length; i++) {
      //looping through each array
      let eachArray = board[i]; // hole each array in a variable
      let value = eachArray[column]; // pull out value from each array
      columnArray.push(value);
    }
    return columnArray;
  }

  //function for diagonal array
  function getDiagonal(board, x, y) {
    let diagonalArray = [board[0][0], board[1][1], board[2][2]];
    if (y === 2) {
      diagonalArray = [board[0][2], board[1][1], board[2][0]];
    }
    return diagonalArray;
  }

  function checkXAndO(array) {
    if (array.join("") === "xxx") {
      return true;
    }
    if (array.join("") === "ooo") {
      return true;
    }
    return false;
  }

  function checkWinner (board){
    //check for rows
    for(let i = 0; i < board.length; i++){
        let currentRow = getRow(board, i); //will look at each row array
        let winner = checkXAndO(currentRow);
        if (winner){
            break;
        }
    }

  }






  renderState(); // show the user the new state
}

// section for getting names to appear on screen

// const player1Name = document.getElementById("player1Submit");
// player1Name.addEventListener('click', player1Click);
// function player1Click(event){
//     if (event.target.innerHTML){
//         event.target.innerHTML = value;
//     }
// }
