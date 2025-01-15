//47 Connections
DESERT_ROCK.loadBaseSprite = function(terrain, map)
{
    __BASE47.loadBase(terrain, "desert_rock", map,"DESERT_ROCK","DESERT_ROCK","0011","0011")
};
DESERT_ROCK.loadOverlaySprite = function(terrain, map)
{
};
DESERT_ROCK.canBePlaced = function (x, y, map) {
    return true;
};
DESERT_ROCK.getTerrainSprites = function()
{
    return __BASE47.getSprites("desert_rock")
};

var DESERT_ROCKInit = DESERT_ROCK.init;

DESERT_ROCK.init = function (terrain) {
    if (DESERT_ROCKInit) {
        DESERT_ROCKInit(terrain);
    }
    terrain.setSupportPalette(false);
};

DESERT_ROCK.getShowInEditor = function() {
    return false;
};