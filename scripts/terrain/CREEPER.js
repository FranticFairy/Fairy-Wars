//More than 1, less than 47
CREEPER.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("creeper");
};
CREEPER.loadOverlaySprite = function(terrain, map)
{
};
CREEPER.canBePlaced = function (x, y, map) {
    return true;
};
CREEPER.getTerrainSprites = function()
{
    return ["creeper"];
};

var CREEPERInit = CREEPER.init;

CREEPER.init = function (terrain) {
    if (CREEPERInit) {
        CREEPERInit(terrain);
    }
    terrain.setSupportPalette(false);
};

CREEPER.getShowInEditor = function() {
    return false;
};