//More than 1, less than 47
METEOR.loadBaseSprite = function(terrain, map)
{
    __BASE8.loadBase(terrain, "meteor", map,"PLASMA","")
};
METEOR.loadOverlaySprite = function(terrain, map)
{
};
METEOR.canBePlaced = function (x, y, map) {
    return true;
};
METEOR.getTerrainSprites = function()
{
    return __BASE8.getSprites("meteor")
};

var METEORInit = METEOR.init;

METEOR.init = function (terrain) {
    if (METEORInit) {
        METEORInit(terrain);
    }
    terrain.setSupportPalette(false);
};

METEOR.getShowInEditor = function() {
    return false;
};