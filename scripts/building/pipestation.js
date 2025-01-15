PIPESTATION.constructionList = ["FW_HVY_ARTILLERY"];

PIPESTATION.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("pipestation", false);
        building.loadSpriteV2("pipestation+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("pipestation+neutral", false);
    }
};
PIPESTATION.onWeatherChanged = function(building, weather, map)
{	
};

PIPESTATION.getShowInEditor = function() {
    return false;
};