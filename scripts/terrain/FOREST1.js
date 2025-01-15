//More than 1, less than 47
FOREST1.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            __BASE47.loadBase(terrain, "snow_forest", map,"FOREST1","FOREST1","0011","0011")
        } else {
            __BASE16.loadBase(terrain, "forest", map,"FOREST1","0011")
        }
    } else {
        __BASE16.loadBase(terrain, "forest", map,"FOREST1","0011")
    }
};
FOREST1.loadOverlaySprite = function(terrain, map)
{
};
FOREST1.canBePlaced = function (x, y, map) {
    return true;
};
FOREST1.getTerrainSprites = function()
{
    return __BASE16.getSprites("forest")
};

var FOREST1Init = FOREST1.init;

FOREST1.init = function (terrain) {
    if (FOREST1Init) {
        FOREST1Init(terrain);
    }
    terrain.setSupportPalette(false);
};

FOREST1.getShowInEditor = function() {
    return false;
};

FOREST1.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}
FOREST1.getDefense = function(terrain)
{
    return 2;
};