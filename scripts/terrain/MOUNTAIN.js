//47 Connections
MOUNTAIN.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            __BASE47.loadBase(terrain, "snow_mountain", map,"MOUNTAIN","MOUNTAIN","0011","0011")
        } else {
            __BASE47.loadBase(terrain, "mountain", map,"MOUNTAIN","MOUNTAIN","","")
        }
    } else {
        __BASE47.loadBase(terrain, "mountain", map,"MOUNTAIN","MOUNTAIN","","")
    }
};
MOUNTAIN.loadOverlaySprite = function(terrain, map)
{
};
MOUNTAIN.canBePlaced = function (x, y, map) {
    return true;
};
MOUNTAIN.getTerrainSprites = function()
{
    return __BASE47.getSprites("mountain")
};

var MOUNTAINInit = MOUNTAIN.init;

MOUNTAIN.init = function (terrain) {
    if (MOUNTAINInit) {
        MOUNTAINInit(terrain);
    }
    terrain.setSupportPalette(false);
};

MOUNTAIN.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}