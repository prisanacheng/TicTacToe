let board = 
[['x','x','o'],
['o','o','o'],
['o','o','x']];

function getDiagonal(board, x, y) {
    let diagonalArray = [board[0][0], board[1][1], board[2][2]];
    if (x === 0 && y === 2 || x === 1 && y === 1 || x === 2 && y === 0) {
      diagonalArray = [board[0][2], board[1][1], board[2][0]];
    }
    return diagonalArray;
  }

  console.log(getDiagonal(board, 2, 0))

// let checkerArray = []

// function getRow (board, row){
//     return board[row];
// }
// checkerArray.push(getRow);
// // console.log(getRow(board, 1))


// function getColumn (board, column){
//     let columnArray = []
//         for (let i = 0; i < board.length; i++) {//looping through each array
//             let eachArray = board[i] // hole each array in a variable
//             let value = eachArray[column] // pull out value from each array
//             columnArray.push(value)
//         }
//     return columnArray;
// }
// checkerArray.push(getColumn);
// // console.log(getColumn(board, 2))


//     // for (let i = x; i < board.length; i++){   //loop for looking through rows
//         //     if (y === 0){
//         //     for (let k = y; k < board.length; k++){ //loop through columns
//         //         if (i === k){    //happen to be the same numbers
//         //         diagonalArray.push(board[i][k])
//         //         }
//         //     }
//         // } else {
//         //   for (let k = y; k >= 0; k--){
//         //     if (k === 2)
              
//         //   } 
//         // } 
//         // } 
// function getDiagonal (board, x, y){
//     let diagonalArray = [board[0][0],board[1][1],board[2][2]]
//     if (y === 2){
//         diagonalArray = [board[0][2], board[1][1],board[2][0]]
//     } 
//     return diagonalArray;
// }

// console.log(getDiagonal(board,0,2), "backward diagonal")
// console.log(getDiagonal(board,0,0),"forward diagonal")  

// function checkXAndO (array){
//     if (array.join("")==="xxx"){
//         return "x wins";
//     }
//     if (array.join("")==="ooo"){
//         return "o wins";
//     }
//     return false
// }
// // // console.log(checkXAndO(['o','o','o']))
// // // console.log(checkXAndO(['x','x','o']))


// // checkerArray.forEach(function(element){
// //     console.log(element(0))

// // });













// function checkWinner (gameState.board){
//     //check for rows
//     for(let i = 0; i < board.length; i++){
//         let currentRow = getRow(board, i); //will look at each row array
//         let winner = checkXAndO(currentRow);
//         if (winner === "x wins"){
//             return "X is the Winner!";
//         }
//         if (winner === "o wins"){
//             return "O is the Winner!";
//         }
//     }
//     for(let i = 0; i < board.length; i++){
//         let currentColumn = getColumn(board, i);
//         let winner = checkXAndO(currentColumn);
//         if (winner === "x wins"){
//             return "X is the Winner!";
//         }
//         if (winner === "o wins"){
//             return "O is the Winner!";
//         }
//     }
//     for(let i = 0; i < board.length; i++){
//         let currentDiagonal = getDiagonal(board, i);
//         let winner = checkXAndO(currentDiagonal);
//         if (winner === "x wins"){
//             return "X is the Winner!";
//         }
//         if (winner === "o wins"){
//             return "O is the Winner!";
//         }
//     }
// }

// console.log(checkWinner(board))



//   let checkerArray = []     //storing all functions in this array
//   //function for row array
//   function getRow(board, row) {
//     return board[row];
//   }
  

//   //function for column array
//   function getColumn(board, column) {
//     let columnArray = [];
//     for (let i = 0; i < board.length; i++) {
//       //looping through each array
//       let eachArray = board[i]; // hole each array in a variable
//       let value = eachArray[column]; // pull out value from each array
//       columnArray.push(value);
//     }
//     return columnArray;
//   }
  
//   //function for diagonal array
//   function getDiagonal(board, x, y) {
//     let diagonalArray = [board[0][0], board[1][1], board[2][2]];
//     if (y === 2) {
//       diagonalArray = [board[0][2], board[1][1], board[2][0]];
//     }
//     return diagonalArray;
//   }
//   let win = checkWinner(gameState.board)

//   if (win){
//     console.log(win)
//   } else {
//       //no one won so do something 
//   }