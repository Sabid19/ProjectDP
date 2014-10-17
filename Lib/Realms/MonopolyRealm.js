//Package MonopolyRealm.js
//We really need to get some inheritance going here
var crypto=projRequire('Lib::Crypto');
var gameEntityType=projRequire('Lib::GameEntityType');
var monopolyBoard=projRequire('Lib::Realms::RealmLogic::Monopoly::MonopolyBoard');
var monopolyStateModule=projRequire("Lib::Realms::RealmLogic::Monopoly::MonopolyState");

function MonopolyRealm()
{
    this.MAXPLAYER=5; //Should be configurable?
    this.board=monopolyBoard.GetMonopolyBoard();
    this.description = "Monopoly GameRoom Object";
    this.type="Monopoly";
    this.id=crypto.GetSha1Hash(gameEntityType.GameRealm, this.type); //This is definitely going to be hooked up
    this.players=[];
    
    this.gameState=new monopolyStateModule.MonopolyStateObject();
    
    
    //When do we initiate a player state in the game state dweeb?
}


//We need to strategise what we are going to do here of course

module.exports = {
    description: "Monopoly GameRoom Export Module"
};

module.exports.MonopolyObject = MonopolyRealm;