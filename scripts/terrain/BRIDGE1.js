//47 Connections
BRIDGE1.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "bridge", map,"BEACH,FOG,ROUGH_SEA,REAF,SEA,RIVER,LAKE","BEACH,FOG,ROUGH_SEA,REAF,SEA,RIVER,LAKE","0111","0111")
};
BRIDGE1.loadOverlaySprite = function(terrain, map)
{
};
BRIDGE1.canBePlaced = function (x, y, map) {
    return true;
};
BRIDGE1.getTerrainSprites = function()
{
    return __BASE47.getSprites("bridge")
};

var BRIDGE1Init = BRIDGE1.init;

BRIDGE1.init = function (terrain) {
    if (BRIDGE1Init) {
        BRIDGE1Init(terrain);
    }
    terrain.setSupportPalette(false);
};

BRIDGE1.getShowInEditor = function() {
    return false;
};