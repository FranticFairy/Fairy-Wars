//More than 1, less than 47
PLASMA.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "plasma", map,"PLASMA,METEOR","0011")
};
PLASMA.loadOverlaySprite = function(terrain, map)
{
};
PLASMA.canBePlaced = function (x, y, map) {
    return true;
};
PLASMA.getTerrainSprites = function()
{
    return __BASE16.getSprites("plasma")
};

var PLASMAInit = PLASMA.init;

PLASMA.init = function (terrain) {
    if (PLASMAInit) {
        PLASMAInit(terrain);
    }
    terrain.setSupportPalette(false);
};

PLASMA.getShowInEditor = function() {
    return false;
};