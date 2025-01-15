//47 Connections
SNOW_MOUNTAIN.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "snow_mountain", map,"SNOW_MOUNTAIN","SNOW_MOUNTAIN","0011","0011")
};
SNOW_MOUNTAIN.loadOverlaySprite = function(terrain, map)
{
};
SNOW_MOUNTAIN.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_MOUNTAIN.getTerrainSprites = function()
{
    return __BASE47.getSprites("snow_mountain")
};

var SNOW_MOUNTAINInit = SNOW_MOUNTAIN.init;

SNOW_MOUNTAIN.init = function (terrain) {
    if (SNOW_MOUNTAINInit) {
        SNOW_MOUNTAINInit(terrain);
    }
    terrain.setSupportPalette(false);
};