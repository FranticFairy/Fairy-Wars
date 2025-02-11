HQ.constructionList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS"];

HQ.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("hq", false);
        building.loadSpriteV2("hq+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("hq+neutral", false);
    }
};
HQ.onWeatherChanged = function(building, weather, map)
{	
};

HQ.getBuildingGroup = function()
{
    return 2;
};
HQ.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};

HQ.actionList = ["ACTION_PACK_HQ","ACTION_PERKLIST"];
