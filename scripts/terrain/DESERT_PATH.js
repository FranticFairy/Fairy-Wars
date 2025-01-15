//47 Connections
DESERT_PATH.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "desert_path", map,"STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","0011","0011")
};
DESERT_PATH.loadOverlaySprite = function(terrain, map)
{
};
DESERT_PATH.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_PATH.getTerrainSprites = function()
{
    return __BASE47.getSprites("desert_path")
};

var DESERT_PATHInit = DESERT_PATH.init;

DESERT_PATH.init = function (terrain) {
    if (DESERT_PATHInit) {
        DESERT_PATHInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_PATH.getShowInEditor = function() {
    return false;
};