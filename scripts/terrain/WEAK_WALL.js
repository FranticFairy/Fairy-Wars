//More than 1, less than 47
WEAK_WALL.loadBaseSprite = function(terrain, map)
{
    __BASE2.loadBase(terrain, "weak_wall", map,"WALL,WEAK_WALL,ZGATE_E_W,ZGATE_N_S,ZDESTROYED_GATE_E_W,ZDESTROYED_GATE_N_S","0011")
};
WEAK_WALL.loadOverlaySprite = function(terrain, map)
{
};
WEAK_WALL.canBePlaced = function (x, y, map) {
    return true;
};
WEAK_WALL.getTerrainSprites = function()
{
    return __BASE2.getSprites("weak_wall")
};

var WEAK_WALLInit = WEAK_WALL.init;

WEAK_WALL.init = function (terrain) {
    if (WEAK_WALLInit) {
        WEAK_WALLInit(terrain);
    }
    terrain.setSupportPalette(false);
};