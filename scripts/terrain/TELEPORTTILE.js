//Just one connection
TELEPORTTILE.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("teleporttile");
};
TELEPORTTILE.loadOverlaySprite = function(terrain, map)
{
};
TELEPORTTILE.canBePlaced = function (x, y, map) {
    return true;
};
TELEPORTTILE.getTerrainSprites = function()
{
    return ["teleporttile"];
};

var TELEPORTTILEInit = TELEPORTTILE.init;

TELEPORTTILE.init = function (terrain) {
    if (TELEPORTTILEInit) {
        TELEPORTTILEInit(terrain);
    }
    terrain.setSupportPalette(false);
};