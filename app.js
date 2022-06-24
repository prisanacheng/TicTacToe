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



// listeners
const board = document.getElementById("board");

board.addEventListener("click", onBoardClick); //if a player clicks the board, it needs to populate the board (function)
function onBoardClick(event) {
    let click = event.target.id
    let clickSplits = click.split(",")
    if (!event.target.innerHTML) {
    //if no selection, I would like to put something there
    if (gameState.currentPlayer === 0) {
      event.target.innerHTML = "X";
      gameState.board[clickSplits[0]][clickSplits[1]] = "x"
      console.log(gameState.board)
      gameState.currentPlayer = 1;
    } else {
      event.target.innerHTML = "O";
      gameState.board[clickSplits[0]][clickSplits[1]] = "o"
      console.log(gameState.board)
      gameState.currentPlayer = 0;
    }
  }

let result = checkWinner(gameState.board)
if (result === "X is the Winner!"){
    console.log("x wins")
}
if (result === "O is the Winner!"){
    console.log("o wins")
}

  renderState(); // show the user the new state
}

function checkWinner (board){
    //check for rows
    for(let i = 0; i < board.length; i++){
        let currentRow = getRow(board, i); //will look at each row array
        let winner = checkXAndO(currentRow);
        if (winner === "x wins"){
            return "X is the Winner!";
        }
        if (winner === "o wins"){
            return "O is the Winner!";
        }
    }
    for(let i = 0; i < board.length; i++){
        let currentColumn = getColumn(board, i);
        let winner = checkXAndO(currentColumn);
        if (winner === "x wins"){
            return "X is the Winner!";
        }
        if (winner === "o wins"){
            return "O is the Winner!";
        }
    }
    for(let i = 0; i < board.length; i++){
        let currentDiagonal = getDiagonal(board, i);
        let winner = checkXAndO(currentDiagonal);
        if (winner === "x wins"){
            return "X is the Winner!";
        }
        if (winner === "o wins"){
            return "O is the Winner!";
        }
    }
}
//function for row array
function getRow (board, row){
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

function checkXAndO (array){
    if (array.join("")==="xxx"){
        return "x wins";
    }
    if (array.join("")==="ooo"){
        return "o wins";
    }
    return false
}

//RESETS THE BOARD USING THE BUTTON
const resetbutton = document.getElementById('resetboard')

resetbutton.addEventListener("click", clearBoard);
    function clearBoard (){
        document.getElementById("0,0").innerHTML = "";
        document.getElementById("0,1").innerHTML = "";
        document.getElementById("0,2").innerHTML = "";
        document.getElementById("1,0").innerHTML = "";
        document.getElementById("1,1").innerHTML = "";
        document.getElementById("1,2").innerHTML = "";
        document.getElementById("2,0").innerHTML = "";
        document.getElementById("2,1").innerHTML = "";
        document.getElementById("2,2").innerHTML = "";
    
    
    }


// section for getting names to appear on screen

// const player1Name = document.getElementById("player1Submit");
// player1Name.addEventListener('click', player1Click);
// function player1Click(event){
//     if (event.target.innerHTML){
//         event.target.innerHTML = value;
//     }
// }
