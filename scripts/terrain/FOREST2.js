//More than 1, less than 47
FOREST2.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            __BASE47.loadBase(terrain, "snow_forest", map,"FOREST2","FOREST2","0011","0011")
        } else {
            __BASE16.loadBase(terrain, "forest", map,"FOREST2","0011")
        }
    } else {
        __BASE16.loadBase(terrain, "forest", map,"FOREST2","0011")
    }
};
FOREST2.loadOverlaySprite = function(terrain, map)
{
};
FOREST2.canBePlaced = function (x, y, map) {
    return true;
};
FOREST2.getTerrainSprites = function()
{
    return __BASE16.getSprites("forest")
};

var FOREST2Init = FOREST2.init;

FOREST2.init = function (terrain) {
    if (FOREST2Init) {
        FOREST2Init(terrain);
    }
    terrain.setSupportPalette(false);
};

FOREST2.getShowInEditor = function() {
    return false;
};

FOREST2.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}
FOREST2.getDefense = function(terrain)
{
    return 2;
};