//More than 1, less than 47
WALL.loadBaseSprite = function(terrain, map)
{
    __BASE16.loadBase(terrain, "wall", map,"WALL,WEAK_WALL,ZGATE_E_W,ZGATE_N_S,ZDESTROYED_GATE_E_W,ZDESTROYED_GATE_N_S","0011")
};
WALL.loadOverlaySprite = function(terrain, map)
{
};
WALL.canBePlaced = function (x, y, map) {
    return true;
};
WALL.getTerrainSprites = function()
{
    return __BASE16.getSprites("wall")
};

var WALLInit = WALL.init;

WALL.init = function (terrain) {
    if (WALLInit) {
        WALLInit(terrain);
    }
    terrain.setSupportPalette(false);
};