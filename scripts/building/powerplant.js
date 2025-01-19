POWERPLANT.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("power", false);
        building.loadSpriteV2("power+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("power+neutral", false);
    }
};
POWERPLANT.onWeatherChanged = function(building, weather, map)
{	
};
POWERPLANT.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};