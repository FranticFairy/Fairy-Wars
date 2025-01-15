//47 Connections
DESERT_FOREST.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "desert_forest", map,"DESERT_FOREST","DESERT_FOREST","0011","0011")
};
DESERT_FOREST.loadOverlaySprite = function(terrain, map)
{
};
DESERT_FOREST.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_FOREST.getTerrainSprites = function()
{
    return __BASE47.getSprites("desert_forest")
};

var DESERT_FORESTInit = DESERT_FOREST.init;

DESERT_FOREST.init = function (terrain) {
    if (DESERT_FORESTInit) {
        DESERT_FORESTInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_FOREST.getShowInEditor = function() {
    return false;
};