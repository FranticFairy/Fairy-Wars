//More than 1, less than 47
FOREST3.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            __BASE47.loadBase(terrain, "snow_forest", map,"FOREST3","FOREST3","0011","0011")
        } else {
            __BASE16.loadBase(terrain, "forest", map,"FOREST3","0011")
        }
    } else {
        __BASE16.loadBase(terrain, "forest", map,"FOREST3","0011")
    }
};
FOREST3.loadOverlaySprite = function(terrain, map)
{
};
FOREST3.canBePlaced = function (x, y, map) {
    return true;
};
FOREST3.getTerrainSprites = function()
{
    return __BASE16.getSprites("forest")
};

var FOREST3Init = FOREST3.init;

FOREST3.init = function (terrain) {
    if (FOREST3Init) {
        FOREST3Init(terrain);
    }
    terrain.setSupportPalette(false);
};

FOREST3.getShowInEditor = function() {
    return false;
};

FOREST3.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}
FOREST3.getDefense = function(terrain)
{
    return 2;
};