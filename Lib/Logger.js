var util= require("util");

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

module.exports={
    description: "Very basic logger"
}

module.exports.LogConsole=logConsole;

