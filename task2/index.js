
let playerOne = true;
let board = [["","",""],["","",""],["","",""]];
var gameEnd=false;
function play(cellNo){
    if(!gameEnd){
        if(document.getElementById("cell"+cellNo).innerHTML == ""){
            document.getElementById("messages").innerHTML = "";
            if(playerOne){
                document.getElementById("cell"+cellNo).innerHTML = "<h1>X</h1>";
                document.getElementById("playerTurn").innerHTML="Player Two Turn";
            }
            else{
                document.getElementById("cell"+cellNo).innerHTML = "<h1>O</h1>";
                document.getElementById("playerTurn").innerHTML="Player One Turn";
            }
            adjustArray(cellNo);
            var win=winScenario();
            if(win=="x"){
                document.getElementById("messages").innerHTML = "Player One Wins!";
                gameEnd=true;
            }
            else if (win=="o"){
                document.getElementById("messages").innerHTML = "Player Two Wins!";
                gameEnd=true;
            }
            if(tie()){
                document.getElementById("messages").innerHTML = "Game is tied, refresh to start a new game!";
                gameEnd=true;
            }
            playerOne=!playerOne;
        }
        else{
            document.getElementById("messages").innerHTML = "You cann't play on this cell!";
        }
    }
    
}

function adjustArray(cellNo){
    var st="x"
    if(!playerOne){
        st="o";
    }
    switch(cellNo){
        case 1: board[0][0]=st;break;
        case 2: board[0][1]=st;break;
        case 3: board[0][2]=st;break;
        case 4: board[1][0]=st;break;
        case 5: board[1][1]=st;break;
        case 6: board[1][2]=st;break;
        case 7: board[2][0]=st;break;
        case 8: board[2][1]=st;break;
        case 9: board[2][2]=st;break;
    }
}
function winScenario(){
    for(var i = 0; i < 3; i++) {
        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '-') {
            return board[i][0];
        }
    }

    for(var j = 0; j < 3; j++) {
        if(board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != '-') {
            return board[0][j];
        }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '-') {
        return board[0][0];
    }
    if(board[2][0] == board[1][1] && board[1][1] ==  board[0][2] && board[2][0] != '-') {
        return board[2][0];
    }
    return "";
}

function tie() {
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(board[i][j] == "") {
                return false;
            }
        }
    }
    return true;
}