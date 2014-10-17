//This is here only for test purpose, as these objects will always be created in the client side
//and sent back here


function MonopolyMove(PlayerId)
{
    this.playerId=PlayerId;
    this.oldPositionIndex;
    this.NewPositionIndex;
}


module.exports={
    description : "This is the move definition of a monopoly game"
};

module.exports.MonopolyMoveObject=MonopolyMove;