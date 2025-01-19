SILO.loadSprites = function(building, neutral, map)
{
    building.loadSprite("silo", false);
};
SILO.onWeatherChanged = function(building, weather, map)
{	
};
SILO.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};