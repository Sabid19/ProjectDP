//Package MonopolyRealm.js
//We really need to get some inheritance going here
var crypto=projRequire('Lib::Crypto');
var gameEntityType=projRequire('Lib::GameEntityType');
var monopolyBoard=projRequire('Lib::Realms::RealmLogic::Monopoly::MonopolyBoard');
var monopolyStateModule=projRequire("Lib::Realms::RealmLogic::Monopoly::MonopolyState");
var monopolyLogic= projRequire("Lib::Realms::RealmLogic::Monopoly::MonopolyLogic");
var monopolyBank=projRequire("Lib::Realms::RealmLogic::Monopoly::MonopolyBank");
var Logger = projRequire("Lib::Logger");

function MonopolyRealm()
{
    this.description = "Monopoly GameRoom Object";
    this.type="Monopoly";
    this.MAXPLAYER=5; //Should be configurable?
    
    //Attach the logger first
    Logger.CreateLogger(this); // Try catch here please
    
    this.board=monopolyBoard.GetMonopolyBoard();
    this.bank=new monopolyBank.MonopolyBankObject(this.board);
    
    
    
    this.id=crypto.GetSha1Hash(gameEntityType.GameRealm, this.type); //This is definitely going to be hooked up
    this.players=[];
    
    //following this really should be private
    this.gameState=new monopolyStateModule.MonopolyStateObject();
    this.logicModule=new monopolyLogic.MonopolyLogicObject();
    
    this.JoinRealm=function(player)
    {
        
        this.players.push(player);
        //Initiating the first position of the player
        this.gameState.playerPositions[player.playerId]= new monopolyStateModule.PlayerPositionObject(player.playerId, 0);
    };
    
    this.handleMove=function(MonopolyMove)
    {
        this.logicModule.handleMove(MonopolyMove, this.gameState, this.board);
    };
    
    
    //When do we initiate a player state in the game state dweeb?
}


//We need to strategise what we are going to do here of course

module.exports = {
    description: "Monopoly GameRoom Export Module"
};

module.exports.MonopolyObject = MonopolyRealm;