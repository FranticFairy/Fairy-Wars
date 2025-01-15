//47 Connections
PLAINS_PLASMA.loadBaseSprite = function (terrain, map) {
    if (terrain != null) {
        if (terrain.getWeatherOverlayId() === "over_snow") {
            terrain.loadBaseSprite("snow");
        } else {
            __BASE47.loadBase(terrain, "plains_plasma", map, "PLAINS_PLASMA", "PLAINS_PLASMA", "0011", "0011")
        }
    } else {
        __BASE47.loadBase(terrain, "plains_plasma", map, "PLAINS_PLASMA", "PLAINS_PLASMA", "0011", "0011")
    }
};
PLAINS_PLASMA.loadOverlaySprite = function (terrain, map) {
};
PLAINS_PLASMA.canBePlaced = function (x, y, map) {
    return true;
};
PLAINS_PLASMA.getTerrainSprites = function () {
    return __BASE47.getSprites("plains_plasma")
};

var PLAINS_PLASMAInit = PLAINS_PLASMA.init;

PLAINS_PLASMA.init = function (terrain) {
    if (PLAINS_PLASMAInit) {
        PLAINS_PLASMAInit(terrain);
    }
    terrain.setSupportPalette(false);
};

PLAINS_PLASMA.onWeatherChanged = function(terrain) {
    ACTION_TERRAIN_LOADSPRITES.perform(terrain.getX(),terrain.getY());
}

PLAINS_PLASMA.getShowInEditor = function() {
    return false;
};
