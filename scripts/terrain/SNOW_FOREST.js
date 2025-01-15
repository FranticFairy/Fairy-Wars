//47 Connections
SNOW_FOREST.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "snow_forest", map,"SNOW_FOREST","SNOW_FOREST","0011","0011")
};
SNOW_FOREST.loadOverlaySprite = function(terrain, map)
{
};
SNOW_FOREST.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_FOREST.getTerrainSprites = function()
{
    return __BASE47.getSprites("snow_forest")
};

var SNOW_FORESTInit = SNOW_FOREST.init;

SNOW_FOREST.init = function (terrain) {
    if (SNOW_FORESTInit) {
        SNOW_FORESTInit(terrain);
    }
    terrain.setSupportPalette(false);
};