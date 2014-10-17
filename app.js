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
        var createdPlayer=player.CreateNewPlayer();
        Logger.LogConsole("Created player ", [createdPlayer]);
        test.ok(createdPlayer, "This Created a player");
        
        var room = RealmFactoryModule.CreateRealm("Monopoly");
        Logger.LogConsole("Created Game room", [room]);
        test.ok(room, "Room Creation Successfull");
        
        var result=RealmFactoryModule.JoinRealm(createdPlayer,room);
        Logger.LogConsole("Player list in room after joining", [room.players]);
        
        
        
        test.done();
        
    }
};



// End Test Method
// Thanks!
