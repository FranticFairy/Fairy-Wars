//More than 1, less than 47
SNOW_FOREST2.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "snow_forest", map,"SNOW_FOREST2","0011")
};
SNOW_FOREST2.loadOverlaySprite = function(terrain, map)
{
};
SNOW_FOREST2.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_FOREST2.getTerrainSprites = function()
{
    return __BASE16.getSprites("snow_forest")
};

var SNOW_FOREST2Init = SNOW_FOREST2.init;

SNOW_FOREST2.init = function (terrain) {
    if (SNOW_FOREST2Init) {
        SNOW_FOREST2Init(terrain);
    }
    terrain.setSupportPalette(false);
};

SNOW_FOREST2.getShowInEditor = function() {
    return false;
};