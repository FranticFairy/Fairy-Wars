//47 Connections
DESERT_TRY_RIVER.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "desert_try_river", map,"DESERT_TRY_RIVER,RIVER","DESERT_TRY_RIVER,RIVER","0011","0011")
};
DESERT_TRY_RIVER.loadOverlaySprite = function(terrain, map)
{
};
DESERT_TRY_RIVER.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_TRY_RIVER.getTerrainSprites = function()
{
    return __BASE47.getSprites("desert_try_river")
};

var DESERT_TRY_RIVERInit = DESERT_TRY_RIVER.init;

DESERT_TRY_RIVER.init = function (terrain) {
    if (DESERT_TRY_RIVERInit) {
        DESERT_TRY_RIVERInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_TRY_RIVER.getShowInEditor = function() {
    return false;
};

DESERT_TRY_RIVER.getOffensiveFieldBonus = function(terrain, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender, action, luckMode)
{
    return 0;
};

DESERT_TRY_RIVER.getTerrainGroup = function()
{
    return 1;
};