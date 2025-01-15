//47 Connections
WASTE_FOREST.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "waste_forest", map,"WASTE_FOREST","WASTE_FOREST","0011","0011")
};
WASTE_FOREST.loadOverlaySprite = function(terrain, map)
{
};
WASTE_FOREST.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_FOREST.getTerrainSprites = function()
{
    return __BASE47.getSprites("waste_forest")
};

var WASTE_FORESTInit = WASTE_FOREST.init;

WASTE_FOREST.init = function (terrain) {
    if (WASTE_FORESTInit) {
        WASTE_FORESTInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_FOREST.getShowInEditor = function() {
    return false;
};