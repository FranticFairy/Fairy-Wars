//Just one connection
SNOW_RUIN.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("ruin");
};
SNOW_RUIN.loadOverlaySprite = function(terrain, map)
{
};
SNOW_RUIN.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_RUIN.getTerrainSprites = function()
{
    return ["ruin"];
};

var SNOW_RUINInit = SNOW_RUIN.init;

SNOW_RUIN.init = function (terrain) {
    if (SNOW_RUINInit) {
        SNOW_RUINInit(terrain);
    }
    terrain.setSupportPalette(false);
};