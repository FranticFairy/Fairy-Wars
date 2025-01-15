//Just one connection
FIRE.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("fire");
};
FIRE.loadOverlaySprite = function(terrain, map)
{
};
FIRE.canBePlaced = function (x, y, map) {
    return true;
};
FIRE.getTerrainSprites = function()
{
    return ["fire"];
};

var FIREInit = FIRE.init;

FIRE.init = function (terrain) {
    if (FIREInit) {
        FIREInit(terrain);
    }
    terrain.setSupportPalette(false);
};