//Just one connection
PLAINS_DESTROYED.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            terrain.loadBaseSprite("snow");
        } else {
            terrain.loadBaseSprite("plains_destroyed");
        }
    } else {
        terrain.loadBaseSprite("plains_destroyed");
    }
};
PLAINS_DESTROYED.loadOverlaySprite = function(terrain, map)
{
};
PLAINS_DESTROYED.canBePlaced = function (x, y, map) {
    return true;
};
PLAINS_DESTROYED.getTerrainSprites = function()
{
    return ["plains_destroyed"];
};

var PLAINS_DESTROYEDInit = PLAINS_DESTROYED.init;

PLAINS_DESTROYED.init = function (terrain) {
    if (PLAINS_DESTROYEDInit) {
        PLAINS_DESTROYEDInit(terrain);
    }
    terrain.setSupportPalette(false);
};

PLAINS_DESTROYED.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}
PLAINS_DESTROYED.getVisionHide = function()
{
    return true;
};