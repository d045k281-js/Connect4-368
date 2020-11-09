//Constant Values to set up the game
Constant();
draw();
control();

function Constant(){
    SizeofCanvas=530;
    boardHeight=7;
    boardWidth=6;
    color= {
        "board":"white",
        "player": {
            0: "black",
            1: "blue",
            2: "Red"
        }
        };
    currentPlayer=1;
    counter=0;//for player1
    counter2=0;//for player2
    end=false;//game end
    constantBoard();
    constantCanvas();
    }