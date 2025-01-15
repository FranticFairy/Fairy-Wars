RADAR.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("radar", false);
        building.loadSpriteV2("radar+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("radar+neutral", false);
    }
};
RADAR.onWeatherChanged = function(building, weather, map)
{	
};