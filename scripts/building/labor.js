LABOR.constructionList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS", "FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE", "FW_BOMBER", "FW_TRANSPORT"];
LABOR.constructionListB = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS", "FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE", "FW_BOMBER", "FW_TRANSPORT","FW_ML", "FW_FF", "FW_SS", "FW_TR", "FW_AX"];
LABOR.constructionListS = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS", "FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE", "FW_BOMBER", "FW_TRANSPORT","FW_ML", "FW_FF", "FW_DD", "FW_CL", "FW_CA", "FW_BB", "FW_CV", "FW_SS", "FW_TR", "FW_AX"];

LABOR.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("labor", false);
        building.loadSpriteV2("labor+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("labor+neutral", false);
    }
};
LABOR.onWeatherChanged = function(building, weather, map)
{	
};
LABOR.getName = function()
{
    return qsTr("Lab");
};

LABOR.getDescription = function()
{
    return qsTr("Advanced production facility. Can build land and air units, and a variety of naval units depending on adjacent terrain.");
};
LABOR.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};

LABOR.getRepairTypes = function(building)
{
    return [GameEnums.UnitType_Infantry, GameEnums.UnitType_Vehicle_Light, GameEnums.UnitType_Vehicle_Medium, GameEnums.UnitType_Vehicle_Heavy, GameEnums.UnitType_Fieldgun, GameEnums.UnitType_Naval_Light, GameEnums.UnitType_Naval_Medium, GameEnums.UnitType_Naval_Heavy, GameEnums.UnitType_Plane, GameEnums.UnitType_Plane_Large, GameEnums.UnitType_Heli];
};