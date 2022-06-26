const gameState = {
  players: ["x", "o"],
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ],
  currentPlayer: 0,
};


player1input.addEventListener("keypress", (event) => {
    if(event.key==="Enter" && player1input.value.length > 0){
        inputForm1.innerHTML = player1input.value;
        inputForm1.style.marginRight = "30px";
        inputForm1.style.color = "antiquewhite";
        inputForm1.style.fontSize = "50px";
     }  
} )  
player2input.addEventListener("keypress", (event) => {
    findComputer()
    if(event.key==="Enter" && player2input.value.length > 0){
        inputForm2.innerHTML = player2input.value;
        inputForm2.style.marginRight = "30px";
        inputForm2.style.color = "antiquewhite";
        inputForm2.style.fontSize = "50px";
     }  
     else if(event.key==="Enter" && player2input.value.length === 0){
         inputForm2.innerHTML = "Computer";
         inputForm2.style.marginRight = "30px";
         inputForm2.style.color = "antiquewhite";
         inputForm2.style.fontSize = "50px";
     } 
} )



const player1 = player1input.value;
const player2 = player2input.value;
const board = document.getElementById("board");
const xWinsBanner = document.getElementById("xBanner");
const oWinsBanner = document.getElementById("oBanner");
const tieBanner = document.getElementById("tieBanner");
const squares = document.getElementsByClassName("squares");




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
    xWinsBanner.style.display = "block";
    }
    else if (result === "O is the Winner!"){
    console.log("o wins")
    oWinsBanner.style.display = "block";
    } 
    else if (!gameState.board[0].includes("") && !gameState.board[1].includes("") && !gameState.board[2].includes("")){
    console.log("tie")
    tieBanner.style.display = "block";
    }
    
    
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
        let currentDiagonal = frontgetDiagonal(board, i);
        let winner = checkXAndO(currentDiagonal);
        if (winner === "x wins"){
            return "X is the Winner!";
        }
        if (winner === "o wins"){
            return "O is the Winner!";
        } 
    }  
    for(let i = 0; i < board.length; i++){
        let currentDiagonal = backgetDiagonal(board, i);
        let winner = checkXAndO(currentDiagonal);
        if (winner === "x wins"){
            return "X is the Winner!";
        }
        if (winner === "o wins"){
            return "O is the Winner!";
        } 
    } return false
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
function frontgetDiagonal(board, x, y) {
  let frontdiagonalArray = [board[0][0], board[1][1], board[2][2]];
  
  return frontdiagonalArray;
}

function backgetDiagonal(board, x, y) {
    let backdiagonalArray = [board[0][2], board[1][1], board[2][0]];
    
    return backdiagonalArray;
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
        xWinsBanner.style.display = "none";
        oWinsBanner.style.display = "none";
        tieBanner.style.display = "none";
        gameState.currentPlayer === 0;
        gameState.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]
    }


    
function findComputer(){
    console.log(player2input.value.length)
        if(player2input.value.length === 0){
            console.log( 'true')
            return true
        } else {
            console.log( 'false' )
            return false
        }
    }

// function comFindMove(board){
//     console.log("hit")
//     for ( let i = 0; i < board[0].length; i++ ) {
//         if( board[ 0 ][i] === "" ) {
//             console.log( 'board[ 0 ][i]', i)
//             console.log( 'first board true')
//             return true
//         } else 
//     }

    // for(let i = 0; i < board.length; i++){
    //     for(let k = 0; k < board[i].length; k++){
    //     if (board[i][k] === foundItem ){
    //         console.log( 'com find move true')
    //         return true  
    //     } else if ( board[i][k] === 'x' || 'o') {
    //         console.log( 'com find move false')
    //         return false
    //         }
    //     }
    // }
