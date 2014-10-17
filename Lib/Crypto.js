var crypto= require('crypto');
///getSha1Hash()
///returns a sha1 unique hash based on currenTTimestamp+random number
///Should we end it with a data specific id?? Like Rooms can end up 39 and PlayerId can end up 49
function getSha1Hash(GameEntityType, EntitySubType)
{
    EntitySubType=EntitySubType||"";
    
    var currentDate=(new Date()).valueOf().toString();
    var random=Math.random();
    
    var SubTypeExt="";
    if(EntitySubType!=="")
    {
        SubTypeExt=EntitySubType+"-";
    }
    
    
    return GameEntityType + "-"+ SubTypeExt+ crypto.createHash('sha1').update(currentDate+random).digest('hex');
}

module.exports={
    description: "This is the crypto lib basically for creating hash, may be datamodel specific hash/unique id management"
};

module.exports.GetSha1Hash=getSha1Hash;