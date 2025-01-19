FACTORY.constructionList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS"];
FACTORY.constructionList_AI = ["FW_AST_INFANTRY"];

FACTORY.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("factory", false);
        building.loadSpriteV2("factory+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("factory+neutral", false);
    }
};
FACTORY.onWeatherChanged = function(building, weather, map)
{	
};
FACTORY.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};

/*
FACTORY.getConstructionList = function (building) {
    var player = building.getOwner();
    GameConsole.print(player.getBaseGameInput().getAiType(),1);
    if(player.getBaseGameInput().getAiType() === GameEnums.AiTypes_Human) {
        return FACTORY.constructionList;
    } else {
        return FACTORY.constructionList_AI;
    }
};
*/