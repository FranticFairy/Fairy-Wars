TOWER.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("tower", false);
        building.loadSpriteV2("tower+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("tower+neutral", false);
    }
};
TOWER.onWeatherChanged = function(building, weather, map)
{	
};
TOWER.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};