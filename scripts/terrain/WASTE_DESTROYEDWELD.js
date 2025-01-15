//More than 1, less than 47
WASTE_DESTROYEDWELD.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "waste_destroyedweld", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
WASTE_DESTROYEDWELD.loadOverlaySprite = function(terrain, map)
{
};
WASTE_DESTROYEDWELD.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_DESTROYEDWELD.getTerrainSprites = function()
{
    return __BASE2.getSprites("waste_destroyedweld")
};

var WASTE_DESTROYEDWELDInit = WASTE_DESTROYEDWELD.init;

WASTE_DESTROYEDWELD.init = function (terrain) {
    if (WASTE_DESTROYEDWELDInit) {
        WASTE_DESTROYEDWELDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_DESTROYEDWELD.getShowInEditor = function() {
    return false;
};