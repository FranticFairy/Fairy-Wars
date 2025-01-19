TEMPORARY_AIRPORT.constructionList = ["FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE", "FW_BOMBER", "FW_TRANSPORT"];

TEMPORARY_AIRPORT.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("temporary_airport", false);
        building.loadSpriteV2("temporary_airport+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("temporary_airport+neutral", false);
    }
};
TEMPORARY_AIRPORT.onWeatherChanged = function(building, weather, map)
{	
};

TEMPORARY_AIRPORT.getBuildingGroup = function()
{
    return 0;
};
TEMPORARY_AIRPORT.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};