FIELD_BASE.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("fhq", false);
        building.loadSpriteV2("fhq+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("fhq+neutral", false);
    }
};
FIELD_BASE.onWeatherChanged = function(building, weather, map)
{	
};
FIELD_BASE.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};
FIELD_BASE.getRepairTypes = function(building)
{
    return [GameEnums.UnitType_Infantry, GameEnums.UnitType_Vehicle_Light, GameEnums.UnitType_Vehicle_Medium, GameEnums.UnitType_Vehicle_Heavy, GameEnums.UnitType_Fieldgun];
};