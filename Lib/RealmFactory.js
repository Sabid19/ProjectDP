//This is only for test function, take it off after unit test
var pRequire = require("../projRequire.js");
//


var Realms = [];
var MAXROOMS = 50; //Dude you need a constant library;

///CreateRealm - Creates a Game Room for specified type
///
///
function CanCreateRealm()
{
    return (Realms.length >= MAXROOMS) ;
}

function CreateRealm(type)
{
    if (!CanCreateRealm()) {
        
        var requiredModule;
        try {
            requiredModule = projRequire("Lib.Realms." + type + "Realm"); //This definitely will be handled better;
            var MonopolyObj = new requiredModule.MonopolyObject();
            Realms.push(MonopolyObj);
            //I need to push the room here
        }
    catch (err) {
            console.log(err);
        }
        
        
        
        return requiredModule? requiredModule: false;
    }
    else
        return false; // Have to decide what should I return when rooms are maxed out // may be a seperate method canCreateRealm?

}



module.exports.testRealmCreation = function (test){
    var ret = CreateRealm("Monopoly");
    console.log(ret);
    test.ok(ret, "This does finds the monopoly package");
    test.done();

}

