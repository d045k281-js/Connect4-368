function matchrow(){
    //Horizonatal
    for(let i=0; i<boardHeight; i++){
        for(let j=0; j<boardWidth-3; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i][j+1] == currentPlayer && boardA[i][j+2] == currentPlayer && boardA[i][j+3]==currentPlayer){
                return true; 
            }
        }
    }
    //vertical
    for(let i=0; i<boardHeight-3; i++){
        for(let j=0; j<boardWidth; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i+1][j] == currentPlayer && boardA[i+2][j] == currentPlayer && boardA[i+3][j]==currentPlayer){
                return true;
                
            }
        }
     }
     //diagonal
     for(let i=0; i<boardHeight-3; i++){
        for(let j=0; j<boardWidth-3; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i+1][j+1] == currentPlayer && boardA[i+2][j+2] == currentPlayer && boardA[i+3][j+3]==currentPlayer){
                return true;
                
            }
        }
     }
     //another diagonal
     for(let i=3; i<boardHeight; i++){
        for(let j=0; j<boardWidth-3; j++)
        {
            if(boardA[i][j] == currentPlayer && boardA[i-1][j+1] == currentPlayer && boardA[i-2][j+2] == currentPlayer && boardA[i-3][j+3]==currentPlayer){
                return true;
                
            }
        }
     }

return false;
}