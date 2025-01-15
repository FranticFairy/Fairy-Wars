//More than 1, less than 47
DESERT_PIPELINE.loadBaseSprite = function(terrain, map)
{
    __BASE16P.loadBase(terrain, "desert_pipeline", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
DESERT_PIPELINE.loadOverlaySprite = function(terrain, map)
{
};
DESERT_PIPELINE.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_PIPELINE.getTerrainSprites = function()
{
    return __BASE16.getSprites("desert_pipeline")
};

var DESERT_PIPELINEInit = DESERT_PIPELINE.init;

DESERT_PIPELINE.init = function (terrain) {
    if (DESERT_PIPELINEInit) {
        DESERT_PIPELINEInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_PIPELINE.getShowInEditor = function() {
    return false;
};