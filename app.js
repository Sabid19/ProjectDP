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
GetGlobalConf();



// Start Test Methods
module.exports.testRealmCreation = function (test){
    var ret = RealmFactoryModule.CreateRealm("Monopoly");
    Logger.LogConsole("Logging Created Game Realm", [ret]);
    test.ok(ret, "This does finds the monopoly package");
    test.done();
    Logger.LogConsole("\n\n");

};

module.exports.testGlobalConfigLoading=function(test)
{
    GetGlobalConf();
    Logger.LogConsole("Got Global Configuration", [GlobalConf]);
    
    test.ok(GlobalConf, "This finds the config alright");
    test.done();
};


// End Test Method
// Thanks!
