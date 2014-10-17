var crypto=projRequire('Lib::Crypto');
var gameEntityType= projRequire('Lib::GameEntityType');


function Player(PlayerId)
{
    this.playerId=PlayerId;

    //Other properties will come along here    
}

function getPlayer()
{
    
}

function createNewPlayer()
{
    //This must have db transactions to make player, for now return a Player object with a sha1 obj
    
    var playerObj=new Player(crypto.GetSha1Hash(gameEntityType.Player));
    
    return playerObj;
    
}


module.exports={
    description: "This is the player module, it mimics a player entity from database"
};

module.exports.CreateNewPlayer=createNewPlayer;
module.exports.GetPlayer=getPlayer;
module.exports.PlayerObject=Player;

