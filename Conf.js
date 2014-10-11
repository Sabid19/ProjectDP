var fs=require("fs");

function loadGlobalConfig()
{
    var globalCfg=JSON.parse(fs.readFileSync("config.json"));
    
    GLOBAL.GlobalConf=globalCfg; // So I can access this scumbag from everywhere
    return globalCfg;
    
    //May be put a try catch and not initialize the server when it fails to load the global config?
    //uh! later!
}

module.exports={
    description: "This is the global configuration loader"
};

module.exports.LoadGlobalConfig=loadGlobalConfig;