//Just one connection
SNOW.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("snow");
};
SNOW.loadOverlaySprite = function(terrain, map)
{
};
SNOW.canBePlaced = function (x, y, map) {
    return true;
};
SNOW.getTerrainSprites = function()
{
    return ["snow"];
};

var SNOWInit = SNOW.init;

SNOW.init = function (terrain) {
    if (SNOWInit) {
        SNOWInit(terrain);
    }
    terrain.setSupportPalette(false);
};