var logger=projRequire("Lib::Logger");

function MonopolyLogic()
{
    this.updateState=function(MonopolyState)
    {
        
    };
    
    
    this.handleMove=function(MonopolyMove, GameState)
    {   //should judge whether it's a valid move
        //currently does absolutely nothing
        
        //really should check whether players current state
        //is the moves old state
        //currently not done
        
        //plus we need to check whether it falls in the dice region
        
        logger.LogConsole("CURRENT GAME STATE BEFORE HANDLING ", [GameState]);
        
        if(GameState.playerPositions[MonopolyMove.playerId])
        {
            GameState.playerPositions[MonopolyMove.playerId].positionIndex=MonopolyMove.newPositionIndex;
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

