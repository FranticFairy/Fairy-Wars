//47 Connections
BEACH.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "beach", map,"BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,FORD,RIVER,BRIDGE,BRIDGE1,BRIDGE2,LAKE","BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,LAKE","1011","1011")
};
BEACH.loadOverlaySprite = function(terrain, map)
{
};
BEACH.canBePlaced = function (x, y, map) {
    return true;
};
BEACH.getTerrainSprites = function()
{
    return __BASE47.getSprites("beach")
};

var beachinit = BEACH.init;

BEACH.init = function (terrain) {
    if (beachinit) {
        beachinit(terrain);
    }
    terrain.setSupportPalette(false);
};