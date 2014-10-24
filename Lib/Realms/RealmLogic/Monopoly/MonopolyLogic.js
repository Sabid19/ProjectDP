var logger=projRequire("Lib::Logger");





function MonopolyLogic()
{
    var MAXDICE=12;
    
    
    
    var updateMove=function(MonopolyMove, GameState, GameBoard)
    {
        var moveDiff=0;
            if(MonopolyMove.newPositionIndex > MonopolyMove.oldPositionIndex)
            {
                moveDiff=MonopolyMove.newPositionIndex-MonopolyMove.oldPositionIndex;
            }
            else if(MonopolyMove.newPositionIndex < MonopolyMove.oldPositionIndex)
            {
                moveDiff=(MonopolyMove.newPositionIndex+GameBoard.boardSize)-MonopolyMove.oldPositionIndex;
            }
            
            if(moveDiff > MAXDICE)
            {
                throw ("Invalid move as Dice difference is greater than 12");
                
            }
        
            
            GameState.playerPositions[MonopolyMove.playerId].positionIndex=MonopolyMove.newPositionIndex;
            
            
    };
    
    var updateAssets=function(GameState)
    {
        
        //Now first thing we need to check the block I landed on is owned or not
        
        
    };
    
    
    this.handleMove=function(MonopolyMove, GameState, GameBoard)
    {   //should judge whether it's a valid move
        //currently does absolutely nothing
        
        //really should check whether players current state
        //is the moves old state
        //currently not done
        
        //plus we need to check whether it falls in the dice region
        
        
        logger.LogConsole("CURRENT GAME STATE BEFORE MOVE HANDLING ", [GameState]);
        
        if(GameState.playerPositions[MonopolyMove.playerId])
        {
            try{
                //Update the move first
                updateMove(MonopolyMove, GameState, GameBoard);
                //Now we should update the damn assets
                updateAssets(MonopolyMove);
                
            }
            catch(err)
            {
                //Should be logged in room you fool
                logger.LogConsole("ERROR", [err]);
                ServerLogger.info("ERROR", err);
                
            }
    
        }
        else
        {
            logger.LogConsole("Invalid player as player doesn't exist in this room", [MonopolyMove.playerId]);
            ServerLogger.info("Invalid player as player doesn't exist in this room", MonopolyMove.playerId);
        }
    
        
    };
    
    this.serveUpdateMessage=function()
    {
        
    };
}







module.exports={
    description: "This module deals with Game State and Update of MonopolyRealm"
};

module.exports.MonopolyLogicObject=MonopolyLogic;

