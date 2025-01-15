//More than 1, less than 47
SNOW_DESTROYEDWELD.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "snow_destroyedweld", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
SNOW_DESTROYEDWELD.loadOverlaySprite = function(terrain, map)
{
};
SNOW_DESTROYEDWELD.canBePlaced = function (x, y, map) {
    return true;
};
SNOW_DESTROYEDWELD.getTerrainSprites = function()
{
    return __BASE2.getSprites("snow_destroyedweld")
};

var SNOW_DESTROYEDWELDInit = SNOW_DESTROYEDWELD.init;

SNOW_DESTROYEDWELD.init = function (terrain) {
    if (SNOW_DESTROYEDWELDInit) {
        SNOW_DESTROYEDWELDInit(terrain);
    }
    terrain.setSupportPalette(false);
};