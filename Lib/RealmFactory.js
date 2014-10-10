

function CreateRealm(type)
{
    var requiredModule;
    try {
        requiredModule = projRequire("Lib.Realms." + type + "Realm"); //This definitely will be handled better;
        console.log("The address to the main module is "+ require.main.filename);
    }
    catch (err) {
        console.log(err);
    }
    
    return requiredModule? requiredModule: false;
}

CreateRealm("Monopoly");

module.exports.testRealmCreation = function (test){
    var ret = CreateRealm("Monopoly");
    console.log(ret);
    test.ok(ret, "This does finds the monopoly package");
    test.done();

}