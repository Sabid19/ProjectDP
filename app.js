var pRequire = require("./projRequire.js");


var RealmFactoryModule = projRequire("Lib::RealmFactory");
var Logger=projRequire("Lib::Logger");
var conf=projRequire("Conf"); //Initializes the conf too! 

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
    CreateRealmTest: function (test){
    
        var ret = RealmFactoryModule.CreateRealm("Monopoly");
        Logger.LogConsole("Logging Created Game Realm", [ret]);
        ServerLogger.info("Logging Created Game Realm", [ret]);
        
        test.ok(ret, "This does finds the monopoly package");
        test.done();
        
    },
    
    GlobalConfigTest:function(test)
    {
        GetGlobalConf();
        Logger.LogConsole("Got Global Configuration", [GlobalConf]);
        
        test.ok(GlobalConf, "This finds the config alright");
        test.done();
        
    }
    
    // InitiateServerLoggerTest:function(test){
    //     Logger.InitiateServerLogger();
    //     Logger.LogConsole("Server Logger initiated", ServerLogger);
    //     test.ok(ServerLogger, "Server logger successfully initiated");
    //     test.done();
        
    // }
};



// End Test Method
// Thanks!
