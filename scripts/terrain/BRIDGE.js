//More than 1, less than 47
BRIDGE.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "bridge", map,"BEACH,FOG,ROUGH_SEA,REAF,SEA,FORD,RIVER,LAKE,PONTOON","0111")
};
BRIDGE.loadOverlaySprite = function(terrain, map)
{
};
BRIDGE.canBePlaced = function (x, y, map) {
    return true;
};
BRIDGE.getTerrainSprites = function()
{
    return __BASE16.getSprites("bridge")
};

var BRIDGEInit = BRIDGE.init;

BRIDGE.init = function (terrain) {
    if (BRIDGEInit) {
        BRIDGEInit(terrain);
    }
    terrain.setSupportPalette(false);
};
BRIDGE.getName = function()
{
    return qsTr("Bridge");
};