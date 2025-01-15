//47 Connections
DESERT_FOREST1.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "desert_forest", map,"DESERT_FOREST1","DESERT_FOREST1","0011","0011")
};
DESERT_FOREST1.loadOverlaySprite = function(terrain, map)
{
};
DESERT_FOREST1.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_FOREST1.getTerrainSprites = function()
{
    return __BASE47.getSprites("desert_forest")
};

var DESERT_FOREST1Init = DESERT_FOREST1.init;

DESERT_FOREST1.init = function (terrain) {
    if (DESERT_FOREST1Init) {
        DESERT_FOREST1Init(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_FOREST1.getShowInEditor = function() {
    return false;
};