//More than 1, less than 47
DESERT_PATH1.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "desert_path", map,"STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","0011")
};
DESERT_PATH1.loadOverlaySprite = function(terrain, map)
{
};
DESERT_PATH1.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_PATH1.getTerrainSprites = function()
{
    return __BASE16.getSprites("desert_path")
};

var DESERT_PATH1Init = DESERT_PATH1.init;

DESERT_PATH1.init = function (terrain) {
    if (DESERT_PATH1Init) {
        DESERT_PATH1Init(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_PATH1.getShowInEditor = function() {
    return false;
};