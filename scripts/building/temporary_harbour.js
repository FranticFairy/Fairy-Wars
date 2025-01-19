TEMPORARY_HARBOUR.constructionList = ["FW_ML", "FW_FF", "FW_DD", "FW_CL", "FW_CA", "FW_BB", "FW_CV", "FW_SS", "FW_TR", "FW_AX"];

TEMPORARY_HARBOUR.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("temporary_harbour", false);
        building.loadSpriteV2("temporary_harbour+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("temporary_harbour+neutral", false);
    }
};

TEMPORARY_HARBOUR.getBaseTerrain = function(building)
{
    return "BEACH";
};
TEMPORARY_HARBOUR.onWeatherChanged = function(building, weather, map)
{	
};

TEMPORARY_HARBOUR.getBuildingGroup = function()
{
    return 0;
};
TEMPORARY_HARBOUR.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};