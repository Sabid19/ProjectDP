//This is only for test function, take it off after unit test
var Util=require("util"); 
//


var Logger = projRequire("Lib::Logger");
var GameRooms=projRequire("Lib::GameRealmsList");

var Realms = []; // You kidding me?, This is fucking here?
 //Dude you need a constant library;

///CreateRealm - Creates a Game Room for specified type
///
///


function joinRealm(player, room)
{
    //Let's join a room
    if(GameRooms.ContainsRoom(room))
    {
        room.players.push(player);
        if(GameRooms.UpdateRoom(room))
        {
            Logger.LogConsole("Player joined in room "+ room.id, player);
            ServerLogger.info("Player joined in room "+ room.id, player);
            return true;
        }
    }
    return false;
}

function createRealm(type)
{
    var requiredGameRealm;
    try 
    {
        var requiredModule = projRequire("Lib.Realms." + type + "Realm"); //This definitely will be handled better;
        var GameRoomObj = new requiredModule[type+"Object"](); //Calling a MonopolyObject
            
        Logger.CreateLogger(GameRoomObj); // Try catch here please
        requiredGameRealm=GameRoomObj;
        
    }
    catch (err) 
    {
        ServerLogger.info(err);
        throw err;
        
    }
        
        //Sanity check
    if(!requiredGameRealm)
    {
        return false;
    }
    
    
    ServerLogger.info("Created Game Room ->", requiredGameRealm);    
    return GameRooms.InsertRoom(requiredGameRealm);
        
     // Have to decide what should I return when rooms are maxed out // may be a seperate method canCreateRealm?
}

module.exports={
    description: "Factory Module for constructing Game Realms, use the constructor with appropriate game room type"
};

module.exports.CreateRealm=createRealm;
module.exports.JoinRealm=joinRealm;