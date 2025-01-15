//More than 1, less than 47
SNOW_STREET.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "street", map,"STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","0011")
};
SNOW_STREET.loadOverlaySprite = function(terrain, map)
{
};
SNOW_STREET.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_STREET.getTerrainSprites = function()
{
    return __BASE16.getSprites("street")
};

var SNOW_STREETInit = SNOW_STREET.init;

SNOW_STREET.init = function (terrain) {
    if (SNOW_STREETInit) {
        SNOW_STREETInit(terrain);
    }
    terrain.setSupportPalette(false);
};