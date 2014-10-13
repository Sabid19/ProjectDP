//Package MonopolyRealm.js
//We really need to get some inheritance going here
var crypto=projRequire('Lib::Crypto');

function MonopolyRealm()
{
    this.description = "Monopoly GameRoom Object";
    this.type="Monopoly";
    this.id=crypto.GetSha1Hash(); //This is definitely going to be hooked up
    this.players=[];
}
//We need to strategise what we are going to do here of course

module.exports = {
    description: "Monopoly GameRoom Export Module"
};

module.exports.MonopolyObject = MonopolyRealm;

