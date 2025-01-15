MINE.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("mine", false);
        building.loadSpriteV2("mine+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("mine+neutral", false);
    }
};
MINE.onWeatherChanged = function(building, weather, map)
{	
};
MINE.getName = function()
{
    return qsTr("Oil Well");
};

MINE.getDescription = function()
{
    return qsTr("Oil well. Once captured produces a lot of funds, but can't repair or resupply units.");
};