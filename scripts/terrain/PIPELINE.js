//More than 1, less than 47
PIPELINE.loadBaseSprite = function(terrain, map)
{
    __BASE16P.loadBase(terrain, "pipeline", map,"PIPELINE,WELD,DESTROYEDWELD,DESERT_PIPELINE,DESERT_WELD,DESERT_DESTROYEDWELD,SNOW_PIPELINE,SNOW_WELD,SNOW_DESTROYEDWELD,WASTE_PIPELINE,WASTE_WELD,WASTE_DESTROYEDWELD,ZWELD_E_W,ZWELD_N_S,ZSNOWWELD_N_S,ZSNOWWELD_E_W,ZDESERTWELD_N_S,ZDESERTWELD_E_W,ZWASTEWELD_N_S,ZWASTEWELD_E_W","0011")
};
PIPELINE.loadOverlaySprite = function(terrain, map)
{
};
PIPELINE.canBePlaced = function (x, y, map) {
    return true;
};
PIPELINE.getTerrainSprites = function()
{
    return __BASE16.getSprites("pipeline")
};

var PIPELINEInit = PIPELINE.init;

PIPELINE.init = function (terrain) {
    if (PIPELINEInit) {
        PIPELINEInit(terrain);
    }
    terrain.setSupportPalette(false);
};