//Just one connection
SNOW_WASTELAND.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("snow_wasteland");
};
SNOW_WASTELAND.loadOverlaySprite = function(terrain, map)
{
};
SNOW_WASTELAND.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_WASTELAND.getTerrainSprites = function()
{
    return ["snow_wasteland"];
};

var SNOW_WASTELANDInit = SNOW_WASTELAND.init;

SNOW_WASTELAND.init = function (terrain) {
    if (SNOW_WASTELANDInit) {
        SNOW_WASTELANDInit(terrain);
    }
    terrain.setSupportPalette(false);
};