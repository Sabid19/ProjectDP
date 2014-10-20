var pRequire = require("./projRequire.js");


var RealmFactoryModule = projRequire("Lib::RealmFactory");
var Logger=projRequire("Lib::Logger");
var conf=projRequire("Conf"); //Initializes the conf too! 
var player=projRequire("Lib::Player");

//METHODS

// Loading Global Config

function GetGlobalConf()
{
    try
    {
        conf.LoadGlobalConfig();
    }
    catch(err)
    {
        Logger.LogConsole(err);
    }
}




//Sever initialization
function InitiateServer()
{
    GetGlobalConf();
    Logger.InitiateServerLogger(); // Have you ever heard of try Catch you idiot?
}

InitiateServer();



// Start Test Methods


module.exports.group={
    TestPlayerCreation: function(test)
    {
        var MonopolyMoveModule=projRequire("Lib::Realms::RealmLogic::Monopoly::MonopolyMove");
        
        var createdPlayer=player.CreateNewPlayer();
        Logger.LogConsole("CREATED PLAYER ", [createdPlayer]);
        test.ok(createdPlayer, "This Created a player");
        
        var room = RealmFactoryModule.CreateRealm("Monopoly");
        Logger.LogConsole("CREATED GAME ROOM", [room]);
        test.ok(room, "Room Creation Successfull");
        
        var result=RealmFactoryModule.JoinRealm(createdPlayer,room);
        test.ok(result, "Room joining status check");
        Logger.LogConsole("ROOM STATUS AFTER JOINING PLAYER", [room]);
        Logger.LogConsole("PLAYER LIST AFTER JOINING ROOM", [room.players]);
        
        var moveObject=new MonopolyMoveModule.MonopolyMoveObject(createdPlayer.playerId, 0,9)
        
        Logger.LogConsole("MOVE OBJECT AFTER INITIALIZATION", [moveObject]);
        //room.handleMove();
        
        room.handleMove(moveObject);
        
        moveObject.oldPositionIndex=9;
        moveObject.newPositionIndex=22;
        
        room.handleMove(moveObject);
        
        Logger.LogConsole("LOGGING ROOM STATE AFTER UPDATE", [room]);
        
        test.done();
        
    }
};



// End Test Method
// Thanks!
