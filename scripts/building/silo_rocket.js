SILO_ROCKET.loadSprites = function(building, neutral, map)
{
    building.loadSprite("silo_rocket", false);
};
SILO_ROCKET.onWeatherChanged = function(building, weather, map)
{	
};
SILO_ROCKET.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};