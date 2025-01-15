//Just one connection
RUIN.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("ruin");
};
RUIN.loadOverlaySprite = function(terrain, map)
{
};
RUIN.canBePlaced = function (x, y, map) {
    return true;
};
RUIN.getTerrainSprites = function()
{
    return ["ruin"];
};

var RUINInit = RUIN.init;

RUIN.init = function (terrain) {
    if (RUINInit) {
        RUINInit(terrain);
    }
    terrain.setSupportPalette(false);
};