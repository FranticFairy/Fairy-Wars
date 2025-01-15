//More than 1, less than 47
DESERT_WELD.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "desert_weld", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
DESERT_WELD.loadOverlaySprite = function(terrain, map)
{
};
DESERT_WELD.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_WELD.getTerrainSprites = function()
{
    return __BASE2.getSprites("desert_weld")
};

var DESERT_WELDInit = DESERT_WELD.init;

DESERT_WELD.init = function (terrain) {
    if (DESERT_WELDInit) {
        DESERT_WELDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_WELD.getShowInEditor = function() {
    return false;
};