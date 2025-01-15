//More than 1, less than 47
STREET.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "street", map,"STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","0011")
};
STREET.loadOverlaySprite = function(terrain, map)
{
};
STREET.canBePlaced = function (x, y, map) {
    return true;
};
STREET.getTerrainSprites = function()
{
    return __BASE16.getSprites("street")
};

var STREETInit = STREET.init;

STREET.init = function (terrain) {
    if (STREETInit) {
        STREETInit(terrain);
    }
    terrain.setSupportPalette(false);
};