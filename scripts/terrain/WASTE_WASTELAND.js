//Just one connection
WASTE_WASTELAND.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("waste_wasteland");
};
WASTE_WASTELAND.loadOverlaySprite = function(terrain, map)
{
};
WASTE_WASTELAND.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_WASTELAND.getTerrainSprites = function()
{
    return ["waste_wasteland"];
};

var WASTE_WASTELANDInit = WASTE_WASTELAND.init;

WASTE_WASTELAND.init = function (terrain) {
    if (WASTE_WASTELANDInit) {
        WASTE_WASTELANDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_WASTELAND.getShowInEditor = function() {
    return false;
};