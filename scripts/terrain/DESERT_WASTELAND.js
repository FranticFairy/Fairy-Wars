//Just one connection
DESERT_WASTELAND.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("desert_wasteland");
};
DESERT_WASTELAND.loadOverlaySprite = function(terrain, map)
{
};
DESERT_WASTELAND.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_WASTELAND.getTerrainSprites = function()
{
    return ["desert_wasteland"];
};

var DESERT_WASTELANDInit = DESERT_WASTELAND.init;

DESERT_WASTELAND.init = function (terrain) {
    if (DESERT_WASTELANDInit) {
        DESERT_WASTELANDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_WASTELAND.getShowInEditor = function() {
    return false;
};