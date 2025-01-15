//More than 1, less than 47
WELD.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "weld", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
WELD.loadOverlaySprite = function(terrain, map)
{
};
WELD.canBePlaced = function (x, y, map) {
    return true;
};
WELD.getTerrainSprites = function()
{
    return __BASE2.getSprites("weld")
};

var WELDInit = WELD.init;

WELD.init = function (terrain) {
    if (WELDInit) {
        WELDInit(terrain);
    }
    terrain.setSupportPalette(false);
};