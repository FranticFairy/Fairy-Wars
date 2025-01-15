//Just one connection
REAF.loadBaseSprite = function(terrain, map)
{
    terrain.loadBaseSprite("reaf");
};
REAF.loadOverlaySprite = function(terrain, map)
{
};
REAF.canBePlaced = function (x, y, map) {
    return true;
};
REAF.getTerrainSprites = function()
{
    return ["reaf"];
};

var REAFInit = REAF.init;

REAF.init = function (terrain) {
    if (REAFInit) {
        REAFInit(terrain);
    }
    terrain.setSupportPalette(false);
};