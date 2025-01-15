//More than 1, less than 47
BRIDGE2.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "bridge", map,"BEACH,FOG,ROUGH_SEA,REAF,SEA,RIVER,LAKE","0111")
};
BRIDGE2.loadOverlaySprite = function(terrain, map)
{
};
BRIDGE2.canBePlaced = function (x, y, map) {
    return true;
};
BRIDGE2.getTerrainSprites = function()
{
    return __BASE16.getSprites("bridge")
};

var BRIDGE2Init = BRIDGE2.init;

BRIDGE2.init = function (terrain) {
    if (BRIDGE2Init) {
        BRIDGE2Init(terrain);
    }
    terrain.setSupportPalette(false);
};

BRIDGE2.getShowInEditor = function() {
    return false;
};