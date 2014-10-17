function MonopolyState()
{
    this.playerPositions={};
}

function PlayerPosition(PlayerId, PositionIndex)
{
    this.playerId=PlayerId;
    this.positionIndex=PositionIndex;
}

module.exports={
    description: "This is the basic module to define a Monopoly Game Move"
};

module.exports.PlayerPositionObject=PlayerPosition;
module.exports.MonopolyStateObject=MonopolyState;