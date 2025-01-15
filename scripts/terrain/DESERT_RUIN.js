//Just one connection
DESERT_RUIN.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("ruin");
};
DESERT_RUIN.loadOverlaySprite = function(terrain, map)
{
};
DESERT_RUIN.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_RUIN.getTerrainSprites = function()
{
    return ["ruin"];
};

var DESERT_RUINInit = DESERT_RUIN.init;

DESERT_RUIN.init = function (terrain) {
    if (DESERT_RUINInit) {
        DESERT_RUINInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_RUIN.getShowInEditor = function() {
    return false;
};