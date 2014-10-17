//This will probably be filled with test methods coming up
module.exports={
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
}