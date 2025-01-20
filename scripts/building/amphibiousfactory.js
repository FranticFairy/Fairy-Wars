AMPHIBIOUSFACTORY.constructionList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC"];
AMPHIBIOUSFACTORY.constructionListB = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC", "FW_ML", "FW_FF", "FW_TR", "FW_AX"];
AMPHIBIOUSFACTORY.constructionListS = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC", "FW_ML", "FW_FF", "FW_TR", "FW_AX", "FW_DD", "FW_SS"];

AMPHIBIOUSFACTORY.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("amphac", false);
        building.loadSpriteV2("amphac+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("amphac+neutral", false);
    }
};
AMPHIBIOUSFACTORY.onWeatherChanged = function(building, weather, map)
{	
};
AMPHIBIOUSFACTORY.getName = function()
{
    return qsTr("Naval Factory");
};

this.getRepairTypes = function(building)
{
    return [GameEnums.UnitType_Ground, GameEnums.UnitType_Infantry, GameEnums.UnitType_Naval];
};

AMPHIBIOUSFACTORY.getDescription = function()
{
    return qsTr("A light factory that can produce a mixture of light land units and, depending on adjacent tiles, light sea units.");
};
AMPHIBIOUSFACTORY.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};