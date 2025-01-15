//More than 1, less than 47
DESERT_DESTROYEDWELD.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "desert_destroyedweld", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD","0011")
};
DESERT_DESTROYEDWELD.loadOverlaySprite = function(terrain, map)
{
};
DESERT_DESTROYEDWELD.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_DESTROYEDWELD.getTerrainSprites = function()
{
    return __BASE2.getSprites("desert_destroyedweld")
};

var DESERT_DESTROYEDWELDInit = DESERT_DESTROYEDWELD.init;

DESERT_DESTROYEDWELD.init = function (terrain) {
    if (DESERT_DESTROYEDWELDInit) {
        DESERT_DESTROYEDWELDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_DESTROYEDWELD.getShowInEditor = function() {
    return false;
};