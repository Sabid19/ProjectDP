var fs= require("fs");



var BoardsList=[]; // Should we actually keep this one here? The loader module should be different I guess


function MonopolyBoard()
{
    //THIS IS STATIC, ALL OF THESE WILL BE CHANGED AS THERE SHOULD BE A BOARD LOADER FROM BOARDS FOLDER
    this.boardSize= 40;
    this.defaultTheme="default";
    
    
    
}

function getMonopolyBoard()
{
    return new MonopolyBoard();
}

function loadMonopolyBoards()
{

}


module.exports={
    description: "This module describes Monopoly Board Module, this is extremely local to only Monopoly Logic"
};

module.exports.GetMonopolyBoard=getMonopolyBoard;