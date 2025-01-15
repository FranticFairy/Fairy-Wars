//Just one connection
WASTELAND.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("wasteland");
};
WASTELAND.loadOverlaySprite = function(terrain, map)
{
};
WASTELAND.canBePlaced = function (x, y, map) {
    return true;
};
WASTELAND.getTerrainSprites = function()
{
    return ["wasteland"];
};

var WASTELANDInit = WASTELAND.init;

WASTELAND.init = function (terrain) {
    if (WASTELANDInit) {
        WASTELANDInit(terrain);
    }
    terrain.setSupportPalette(false);
};