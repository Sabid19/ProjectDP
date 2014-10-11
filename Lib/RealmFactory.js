//This is only for test function, take it off after unit test
var Util=require("util"); 
//


var Realms = [];
var MAXROOMS = 50; //Dude you need a constant library;

///CreateRealm - Creates a Game Room for specified type
///
///
function canCreateRealm()
{
    return (Realms.length >= MAXROOMS) ;
}

function createRealm(type)
{
    if (!canCreateRealm()) {
        
        var requiredGameRealm;
        try {
            var requiredModule = projRequire("Lib.Realms." + type + "Realm"); //This definitely will be handled better;
            var GameRoomObj = new requiredModule[type+"Object"]();
            
            Realms.push(GameRoomObj);
            requiredGameRealm=GameRoomObj;
            
            
            //I need to push the room here
        }
    catch (err) {
            console.log(err);
        }
        
        
        
        return requiredGameRealm? requiredGameRealm: false;
    }
    else
        return false; // Have to decide what should I return when rooms are maxed out // may be a seperate method canCreateRealm?

}

module.exports={
    description: "Factory Module for constructing Game Realms, use the constructor with appropriate game room type"
};

module.exports.CreateRealm=createRealm;
module.exports.CanCreateRealm=canCreateRealm;





