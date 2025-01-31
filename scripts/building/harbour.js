HARBOUR.constructionList = ["FW_ML", "FW_FF", "FW_DD", "FW_CL", "FW_CA", "FW_BB", "FW_CV", "FW_SS", "FW_TR", "FW_AX"];

HARBOUR.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("harbour", false);
        building.loadSpriteV2("harbour+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("harbour+neutral", false);
    }
};
HARBOUR.onWeatherChanged = function(building, weather, map)
{	
};
HARBOUR.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};
HARBOUR.getRepairTypes = function(building)
{
    return [GameEnums.UnitType_Naval_Light, GameEnums.UnitType_Naval_Medium, GameEnums.UnitType_Naval_Heavy];
};