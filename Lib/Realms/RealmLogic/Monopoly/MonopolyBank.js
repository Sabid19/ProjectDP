var MonopolyEstateModule=projRequire("Lib::Realms::RealmLogic::Monopoly::MonopolyEstate");

function MonopolyBank(Board)
{
    
    
     // Should I keep it here?
    this.Estates=[];
    this.EstateGroups={};
    this.SupportedAssets=[]; // This is ranked by priority
     

    //Get the estates first
    //probably should put a try catch on these, boards can be invalid
    for(var i=0; i<Board.blocks.length; i++)
    {
            
        this.Estates[i]=new MonopolyEstateModule.MonopolyEstateObject();
        for (var prop in Board.blocks[i])
        {
            //this is not a two dimensional array, dont screw up
            this.Estates[i][prop]=Board.blocks[i][prop];
        }
            
        this.Estates[i].owner="bank";
        this.Estates[i].boardName=Board.name;
        if(!this.EstateGroups[this.Estates[i].groupCode])
        {
            this.EstateGroups[this.Estates[i].groupCode]=[];
        }
        this.EstateGroups[this.Estates[i].groupCode].push(this.Estates[i].index);
            
            
    }
        
    this.SupportedAssets=Board.assets;
        
    //Initialize this one
}


module.exports={
    description: "This is the Monopoly Bank module"
};

module.exports.MonopolyBankObject=MonopolyBank;