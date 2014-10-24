var fs= require("fs");



var BoardsList=[]; // Should we actually keep this one here? The loader module should be different I guess


function MonopolyBoard()
{
    
    this.boardSize= 40;
    this.defaultTheme="default";
    
}

function getMonopolyBoard()
{
    //THIS IS STATIC, ALL OF THESE WILL BE CHANGED AS THERE SHOULD BE A BOARD LOADER FROM BOARDS FOLDER
    //Im still confused about the board loader, let's make the logic works first
    
    var board= JSON.parse(fs.readFileSync(__dirname+'/Boards/MonopolyBoard_ 40_default.json'));
    return board;
}

function loadMonopolyBoards()
{

}


module.exports={
    description: "This module describes Monopoly Board Module, this is extremely local to only Monopoly Logic"
};

module.exports.GetMonopolyBoard=getMonopolyBoard;