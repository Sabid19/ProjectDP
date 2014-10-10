

function CreateRealm(type)
{
    var requiredModule;
    try {
        requiredModule = require("./Realms/" + type + "Realm.js"); //This definitely will be handled better;
    }
    catch (err) {
        console.log(err);
    }
    
    return requiredModule? requiredModule: false;
}

//module.exports = { CreateRealmWithType: CreateRealm };
module.exports.testRealmCreation = function (test){
    var ret = CreateRealm("Monopoly");
    console.log(ret);
    test.ok(ret, "This does finds the monopoly package");
    test.done();

}