var pRequire = require("./projRequire.js");


var RealmFactoryModule = projRequire("Lib::RealmFactory");
var Logger=projRequire("Lib::Logger");


module.exports.testRealmCreation = function (test){
    var ret = RealmFactoryModule.CreateRealm("Monopoly");
    Logger.LogConsole("Logging Created Game Realm", [ret]);
    test.ok(ret, "This does finds the monopoly package");
    test.done();

}

