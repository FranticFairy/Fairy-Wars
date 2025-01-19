OILRIG.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("oilrig", false);
        building.loadSpriteV2("oilrig+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("oilrig+neutral", false);
    }
};

OILRIG.onWeatherChanged = function(building, weather, map)
{	
};

OILRIG.constructionList = ["FW_AX" , "FW_FF" , "FW_TR" , "FW_ML"];

OILRIG.startOfTurn = function(building, map)
{
    BUILDING.replenishUnit(building, map, 0, 1, 1, 1, false);
};

OILRIG.getConstructionList = function(building)
{
    return OILRIG.constructionList;
};