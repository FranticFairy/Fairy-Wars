//Just one connection
WASTE_RUIN.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("ruin");
};
WASTE_RUIN.loadOverlaySprite = function(terrain, map)
{
};
WASTE_RUIN.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_RUIN.getTerrainSprites = function()
{
    return ["ruin"];
};

var WASTE_RUINInit = WASTE_RUIN.init;

WASTE_RUIN.init = function (terrain) {
    if (WASTE_RUINInit) {
        WASTE_RUINInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_RUIN.getShowInEditor = function() {
    return false;
};