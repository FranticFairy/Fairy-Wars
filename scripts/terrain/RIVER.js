//47 Connections
RIVER.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "river", map,"DESERT_TRY_RIVER,BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","DESERT_TRY_RIVER,BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","1011","1011")
};
RIVER.loadOverlaySprite = function(terrain, map)
{
};
RIVER.loadSpriteFromFlowData = function (terrain, pos, flowData, index, map) {
    __BASE47.loadBase(terrain, "river", map,"DESERT_TRY_RIVER,BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","DESERT_TRY_RIVER,BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","1011","1011")
};
RIVER.loadTerrainSeaOverlay = function (terrain, flowString) {
};
RIVER.canBePlaced = function (x, y, map) {
    return true;
};
RIVER.getTerrainSprites = function()
{
    return __BASE47.getSprites("river")
};

var RIVERInit = RIVER.init;

RIVER.init = function (terrain) {
    if (RIVERInit) {
        RIVERInit(terrain);
    }
    terrain.setSupportPalette(false);
};