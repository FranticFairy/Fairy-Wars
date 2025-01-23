AIRPORT.constructionList = ["FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE", "FW_BOMBER", "FW_TRANSPORT"];

AIRPORT.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("airport", false);
        building.loadSpriteV2("airport+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("airport+neutral", false);
    }
};
AIRPORT.onWeatherChanged = function(building, weather, map)
{	
};
AIRPORT.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};

AIRPORT.getRepairTypes = function(building)
{
    return [GameEnums.UnitType_Plane, GameEnums.UnitType_Plane_Large, GameEnums.UnitType_Heli];
};