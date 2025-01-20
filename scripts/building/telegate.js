var Constructor = function()
{
    this.getBuildingGroup = function()
    {
        return 2;
    };
    
    this.loadSprites = function(building, neutral, map)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            building.loadSprite("telegate", false);
            building.loadSpriteV2("telegate+mask", GameEnums.Recoloring_Matrix);
        }
        else
        {
            building.loadSprite("telegate+neutral", false);
        }
    };

    this.getBaseIncome = function()
    {
        return 0;
    };

    this.getName = function()
    {
        return qsTr("Void Gate");
    };

    this.getDescription = function()
    {
        return qsTr("A strange area of the void that only allows units of a certain allegiance to pass through.");
    };

    this.getVision = function(building, map)
    {
        return map.getGameRules().getBuildingVision();
    };
}

Constructor.prototype = BUILDING;
var TELEGATE = new Constructor();
