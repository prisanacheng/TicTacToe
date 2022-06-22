let board = 
[['x','x','x'],
['o','x','o'],
['x','o','o']];

// function getRow (board, row){
//     return board[row];
// }
// console.log(getRow(board, 1))


// function getColumn (board, column){
//     let columnArray = []
//         for (let i = 0; i < board.length; i++) {//looping through each array
//             let eachArray = board[i] // hole each array in a variable
//             let value = eachArray[column] // pull out value from each array
//             columnArray.push(value)
//         }
//     return columnArray;

// }
// console.log(getColumn(board, 2))


    // for (let i = x; i < board.length; i++){   //loop for looking through rows
        //     if (y === 0){
        //     for (let k = y; k < board.length; k++){ //loop through columns
        //         if (i === k){    //happen to be the same numbers
        //         diagonalArray.push(board[i][k])
        //         }
        //     }
        // } else {
        //   for (let k = y; k >= 0; k--){
        //     if (k === 2)
              
        //   } 
        // } 
        // } 
// function getDiagonal (board, x, y){
//     let diagonalArray = [board[0][0],board[1][1],board[2][2]]
//     if (y === 2){
//         diagonalArray = [board[0][2], board[1][1],board[2][0]]
//     }
    

//     return diagonalArray;
// }

// console.log(getDiagonal(board,0,2), "backward diagonal")
// console.log(getDiagonal(board,0,0),"forward diagonal")  

function checkXAndO (array){
    if (array.join("")==="xxx"){
        return "X Wins";
    }
    if (array.join("")==="ooo"){
        return "O Wins";
    }
    return false
}
console.log(checkXAndO(['o','o','o']))
console.log(checkXAndO(['x','x','x']))













