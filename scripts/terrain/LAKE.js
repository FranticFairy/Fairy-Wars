//47 Connections
LAKE.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "lake", map,"BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","1011","1011")
};
LAKE.loadOverlaySprite = function(terrain, map)
{
};
LAKE.canBePlaced = function (x, y, map) {
    return true;
};
LAKE.getTerrainSprites = function()
{
    return __BASE47.getSprites("lake")
};

var LAKEInit = LAKE.init;

LAKE.init = function (terrain) {
    if (LAKEInit) {
        LAKEInit(terrain);
    }
    terrain.setSupportPalette(false);
};

LAKE.getShowInEditor = function() {
    return false;
};