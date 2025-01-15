//More than 1, less than 47
WASTE_PATH.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "waste_path", map,"STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","0011")
};
WASTE_PATH.loadOverlaySprite = function(terrain, map)
{
};
WASTE_PATH.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_PATH.getTerrainSprites = function()
{
    return __BASE16.getSprites("waste_path")
};

var WASTE_PATHInit = WASTE_PATH.init;

WASTE_PATH.init = function (terrain) {
    if (WASTE_PATHInit) {
        WASTE_PATHInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_PATH.getShowInEditor = function() {
    return false;
};