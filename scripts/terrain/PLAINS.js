//Just one connection
PLAINS.loadBaseSprite = function(terrain, map)
{
    if (terrain != null) {
        if(terrain.getWeatherOverlayId() === "over_snow") {
            terrain.loadBaseSprite("snow");
        } else {
            terrain.loadBaseSprite("plains");
        }
    } else {
        terrain.loadBaseSprite("plains");
    }
};
PLAINS.loadOverlaySprite = function(terrain, map)
{
};
PLAINS.canBePlaced = function (x, y, map) {
    return true;
};
PLAINS.getTerrainSprites = function()
{
    return ["plains"];
};

var PLAINSInit = PLAINS.init;

PLAINS.init = function (terrain) {
    if (PLAINSInit) {
        PLAINSInit(terrain);
    }
    terrain.setSupportPalette(false);
};

PLAINS.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}