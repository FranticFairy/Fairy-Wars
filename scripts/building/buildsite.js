var Constructor = function()
{
    this.getBuildingGroup = function()
    {
        return 0;
    };
    
    this.loadSprites = function(building, neutral, map)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            building.loadSprite("buildsite", false);
            building.loadSpriteV2("buildsite+mask", GameEnums.Recoloring_Matrix);
        }
        else
        {
            building.loadSprite("buildsite+neutral", false);
        }
    };
    this.actionList = ["ACTION_BUILDSITE"];
    this.getBaseIncome = function()
    {
        return 0;
    };
    this.getName = function()
    {
        return qsTr("Build Site");
    };
    this.getDescription = function()
    {
        return qsTr("A construction site ready to be put to use. Provides no income, repair or resupply, but for 7,500 can be turned into a production building.");
    };

    this.getVisionHide = function(building)
    {
        return true;
    };
    this.getVision = function(building, map)
    {
        return map.getGameRules().getBuildingVision();
    };
}

Constructor.prototype = BUILDING;
var BUILDSITE = new Constructor();
