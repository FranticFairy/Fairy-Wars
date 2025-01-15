//47 Connections
FOREST.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            __BASE47.loadBase(terrain, "snow_forest", map,"FOREST","FOREST","0011","0011")
        } else {
            __BASE16.loadBase(terrain, "forest", map,"FOREST","0011")
        }
    } else {
        __BASE16.loadBase(terrain, "forest", map,"FOREST","0011")
    }
};
FOREST.loadOverlaySprite = function(terrain, map)
{
};
FOREST.canBePlaced = function (x, y, map) {
    return true;
};
FOREST.getTerrainSprites = function()
{
    return __BASE47.getSprites("forest")
};

var FORESTInit = FOREST.init;

FOREST.init = function (terrain) {
    if (FORESTInit) {
        FORESTInit(terrain);
    }
    terrain.setSupportPalette(false);
};

FOREST.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}
FOREST.getDefense = function(terrain)
{
    return 2;
};