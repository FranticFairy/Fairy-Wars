//47 Connections
STREET1.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "street", map,"STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","STREET,STREET1,BRIDGE,BRIDGE1,BRIDGE2,DESERT_PATH,DESERT_PATH1,SNOW_STREET,WASTE_PATH","0011","0011")
};
STREET1.loadOverlaySprite = function(terrain, map)
{
};
STREET1.canBePlaced = function (x, y, map) {
    return true;
};
STREET1.getTerrainSprites = function()
{
    return __BASE47.getSprites("street")
};

var STREET1Init = STREET1.init;

STREET1.init = function (terrain) {
    if (STREET1Init) {
        STREET1Init(terrain);
    }
    terrain.setSupportPalette(false);
};

STREET1.getShowInEditor = function() {
    return false;
};