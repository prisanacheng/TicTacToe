let board = 
[['x','x','x'],
['o','x','o'],
['o','o','o']];

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

function getDiagonal (board, x, y){
    let diagonalArray = []
        for (let i = x; i < board.length; i++){   //loop for looking through rows
            for (let k = y; k < board.length; k++){ //loop through columns
                if (i === k){    //happen to be the same numbers
                diagonalArray.push(board[i][k])
                }
            }
        } 
        





    return diagonalArray;
}

// console.log(getDiagonal(board,0,0))

function checkXAndO (array){
    for (let i = 0; i < array.length; i++){
        let value = array[i]
        console.log(value)
        if (value === value === value){
            return true;
        }
    } return false
}
// console.log(checkXAndO(['o','x','o']))
console.log(checkXAndO(['x','x','x']))













