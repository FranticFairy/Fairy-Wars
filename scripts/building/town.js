TOWN.constructionList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS"];

TOWN.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("town", false);
        building.loadSpriteV2("town+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("town+neutral", false);
    }
};
TOWN.onWeatherChanged = function(building, weather, map)
{	
};
TOWN.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};
TOWN.getRepairTypes = function(building)
{
    return [GameEnums.UnitType_Infantry, GameEnums.UnitType_Vehicle_Light, GameEnums.UnitType_Vehicle_Medium, GameEnums.UnitType_Vehicle_Heavy, GameEnums.UnitType_Fieldgun];
};