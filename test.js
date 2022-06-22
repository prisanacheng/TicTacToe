let board = 
[['x','x','x'],
['o','x','o'],
['o','o','o']];




// function getRow (board, row){
//     return board[row];
// }
// console.log(getRow(board, 1))


function getColumn (board, column){
    let columnArray = []
        for (let i = 0; i < board.length; i++) {//looping through each array
            let eachArray = board[i] // hole each array in a variable
            let value = eachArray[column] // pull out value from each array
            columnArray.push(value)
        }
    return columnArray;

}
console.log(getColumn(board, 2))













