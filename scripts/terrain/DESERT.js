//Just one connection
DESERT.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("desert");
};
DESERT.loadOverlaySprite = function(terrain, map)
{
};
DESERT.canBePlaced = function (x, y, map) {
    return true;
};
DESERT.getTerrainSprites = function()
{
    return ["desert"];
};

var DESERTInit = DESERT.init;

DESERT.init = function (terrain) {
    if (DESERTInit) {
        DESERTInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT.getShowInEditor = function() {
    return false;
};