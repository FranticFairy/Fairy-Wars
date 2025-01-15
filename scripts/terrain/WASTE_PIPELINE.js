//More than 1, less than 47
WASTE_PIPELINE.loadBaseSprite = function(terrain, map)
{
    __BASE16P.loadBase(terrain, "waste_pipeline", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
WASTE_PIPELINE.loadOverlaySprite = function(terrain, map)
{
};
WASTE_PIPELINE.canBePlaced = function (x, y, map) {
    return true;
};
WASTE_PIPELINE.getTerrainSprites = function()
{
    return __BASE16.getSprites("waste_pipeline")
};

var WASTE_PIPELINEInit = WASTE_PIPELINE.init;

WASTE_PIPELINE.init = function (terrain) {
    if (WASTE_PIPELINEInit) {
        WASTE_PIPELINEInit(terrain);
    }
    terrain.setSupportPalette(false);
};

WASTE_PIPELINE.getShowInEditor = function() {
    return false;
};