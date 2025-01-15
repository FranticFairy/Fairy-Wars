//More than 1, less than 47
SNOW_FOREST1.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "snow_forest", map,"SNOW_FOREST1","0011")
};
SNOW_FOREST1.loadOverlaySprite = function(terrain, map)
{
};
SNOW_FOREST1.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_FOREST1.getTerrainSprites = function()
{
    return __BASE16.getSprites("snow_forest")
};

var SNOW_FOREST1Init = SNOW_FOREST1.init;

SNOW_FOREST1.init = function (terrain) {
    if (SNOW_FOREST1Init) {
        SNOW_FOREST1Init(terrain);
    }
    terrain.setSupportPalette(false);
};

SNOW_FOREST1.getShowInEditor = function() {
    return false;
};