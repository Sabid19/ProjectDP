var util= require("util");
var bunyan=require("bunyan");

//I should install bunyan first to do stuff


function logConsole(msg, params)
{
    params=params||[];
    
    var paramString="";
    
    for(var count=0; count<params.length; count++)
    {
        paramString=paramString+ util.inspect(params[count],false, null);
    }
    
    if(paramString!=="")
    {
        console.log(msg+" -> "+paramString);
    }
    else
    {
        console.log(msg);
    }
    
}

function logRoom()
{
    
}


function initiateServerLogger()
{
    var logger=bunyan.createLogger({
        name: "ServerLogger",
        src: true,
        streams:[
            {
                path: GlobalConf.logDir+"NCGameServer.log"
            }
        ]
    });
    
    GLOBAL.ServerLogger=logger;
    
    return logger;
}


//Create a unique Logfile for each gameRoom
function createLogger(gameRealm)
{

    var LogFileName=gameRealm.id+"-"+gameRealm.type;
    var logger= bunyan.createLogger({
        name: LogFileName,
        src: true,
        streams:[
            {
                path: GlobalConf.realmsLogDir +LogFileName+".log"
            }
        ]
    });
    
    gameRealm.logger=logger;
    
    return logger;
    
  //need to initialize this one straight to the mail logger logger.on('error')
 //these will be used probably with bunyan   
}

module.exports={
    description: "Very basic logger"
}

module.exports.LogConsole=logConsole;
module.exports.InitiateServerLogger=initiateServerLogger;
module.exports.CreateLogger=createLogger;

// Start Test Methods

// End Test Methods
// Thanks!