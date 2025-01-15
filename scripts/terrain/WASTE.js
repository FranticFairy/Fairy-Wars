//Just one connection
WASTE.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("waste");
};
WASTE.loadOverlaySprite = function(terrain, map)
{
};
WASTE.canBePlaced = function (x, y, map) {
    return true;
};
WASTE.getTerrainSprites = function()
{
    return ["waste"];
};

var WASTEInit = WASTE.init;

WASTE.init = function (terrain) {
    if (WASTEInit) {
        WASTEInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE.getShowInEditor = function() {
    return false;
};