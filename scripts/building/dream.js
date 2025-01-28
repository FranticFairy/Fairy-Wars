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
            building.loadSprite("dream", false);
            building.loadSpriteV2("dream+mask", GameEnums.Recoloring_Matrix);
        }
        else
        {
            building.loadSprite("dream+neutral", false);
        }
    };
    this.actionList = ["ACTION_DREAMSCAPE"];
    this.getBaseIncome = function()
    {
        return 1000;
    };
    this.getName = function()
    {
        return qsTr("Dreamscape");
    };
    this.getDescription = function()
    {
        return qsTr("A dreamscape woven of the Fairy Alliance's magic. Provides income like a city and can be converted into a functional building for 7,500 funds.");
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
var DREAM = new Constructor();
