//More than 1, less than 47
WASTE_WELD.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "waste_weld", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
WASTE_WELD.loadOverlaySprite = function(terrain, map)
{
};
WASTE_WELD.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_WELD.getTerrainSprites = function()
{
    return __BASE2.getSprites("waste_weld")
};

var WASTE_WELDInit = WASTE_WELD.init;

WASTE_WELD.init = function (terrain) {
    if (WASTE_WELDInit) {
        WASTE_WELDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_WELD.getShowInEditor = function() {
    return false;
};