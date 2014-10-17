var GameRooms={}; // are you sure this thing would be same accross the server, require says it's okay, if it breaks up try writing the 
// boilerplate code for singleton

var MAXROOMS=200;

function getCurrentGameRooms()
{
    return GameRooms;
}

function updateRoom(Room)
{
    if(GameRooms[Room.id])
    {
        GameRooms[Room.id]=Room;
        return true;
    }
    else
    {
        return false;
    }
}

function canInsertRoom(Room)
{
    return getRoomCount()<MAXROOMS
}

function insertRoom(Room)
{
    if(!GameRooms[Room.id] && canInsertRoom(Room))
    {
        GameRooms[Room.id]=Room;
        return Room;
    }
    else
    {
        return false;
    }
    
    
}

function getRoom(RoomId)
{
    if(GameRooms[RoomId])
    {
        return GameRooms[RoomId];
    }
    else
    {
        return false;
    }
}

function containsRoom(Room)
{
    return GameRooms[Room.id]? true: false;
}

function removeRoom(RoomId)
{
    if(GameRooms[RoomId])
    {
        delete GameRooms[RoomId];
        return true;
    }
    else
    {
        return false;
    }
}

function getRoomCount()
{
    return Object.keys(GameRooms).length;
}

module.exports.GetGameRooms=getCurrentGameRooms;
module.exports.InsertRoom=insertRoom;
module.exports.UpdateRoom=updateRoom;
module.exports.GetRoom=getRoom;
module.exports.ContainsRoom=containsRoom;
module.exports.RemoveRoom=removeRoom;
module.exports.GetRoomCount=getRoomCount;