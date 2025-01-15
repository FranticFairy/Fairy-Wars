//Just one connection
ROUGH_SEA.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("rough_sea");
};
ROUGH_SEA.loadOverlaySprite = function(terrain, map)
{
};
ROUGH_SEA.canBePlaced = function (x, y, map) {
    return true;
};
ROUGH_SEA.getTerrainSprites = function()
{
    return ["rough_sea"];
};

var ROUGH_SEAInit = ROUGH_SEA.init;

ROUGH_SEA.init = function (terrain) {
    if (ROUGH_SEAInit) {
        ROUGH_SEAInit(terrain);
    }
    terrain.setSupportPalette(false);
};

ROUGH_SEA.getShowInEditor = function() {
    return false;
};