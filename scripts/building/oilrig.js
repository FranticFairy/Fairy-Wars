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