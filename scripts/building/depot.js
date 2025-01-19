DEPOT.startOfTurn = function(building, map)
{
    BUILDING.replenishUnit(building, map, 1, 0.5, 0.5, 0.5, false);
};

DEPOT.getDescription = function()
{
    return qsTr("<r>A cargo depot that provides some cover and </r><div c='#00ff00'>ground </div><r>units can </r><div c='#00ff00'>repair and resupply</div><r> half as effective as on cities each turn.</r>.");
};

DEPOT.getDefense = function()
{
    return 1;
};

DEPOT.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("depot", false);
        building.loadSpriteV2("depot+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("depot+neutral", false);
    }
};
DEPOT.onWeatherChanged = function(building, weather, map)
{	
};
DEPOT.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};