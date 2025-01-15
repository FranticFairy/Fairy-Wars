//47 Connections
WASTE_MOUNTAIN.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "waste_mountain", map,"WASTE_MOUNTAIN","WASTE_MOUNTAIN","0011","0011")
};
WASTE_MOUNTAIN.loadOverlaySprite = function(terrain, map)
{
};
WASTE_MOUNTAIN.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_MOUNTAIN.getTerrainSprites = function()
{
    return __BASE47.getSprites("waste_mountain")
};

var WASTE_MOUNTAINInit = WASTE_MOUNTAIN.init;

WASTE_MOUNTAIN.init = function (terrain) {
    if (WASTE_MOUNTAINInit) {
        WASTE_MOUNTAINInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_MOUNTAIN.getShowInEditor = function() {
    return false;
};