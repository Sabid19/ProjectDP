var util= require("util");
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

function createLog()
{

 //these will be used probably with bunyan   
}

module.exports={
    description: "Very basic logger"
}

module.exports.LogConsole=logConsole;


// Start Test Methods

// End Test Methods
// Thanks!