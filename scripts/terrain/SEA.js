//47 Connections
SEA.loadBaseSprite = function (terrain, map) {
    if (terrain != null && map != null) {

        var mapTest = map.getTerrain(terrain.getX(), terrain.getY());
        if (mapTest != null) {
            var surroundingsSea = terrain.getSurroundings("SEA,REAF,FOG,ROUGH_SEA", true, true, GameEnums.Directions_All, false);
            if (surroundingsSea.includes("+")) {
                __BASE47.loadBase(terrain, "sea", map, "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,LAKE", "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "1011", "1011")
            } else {
                if (SEA.fiveByFiveTileTest(terrain.getX(), terrain.getY(), "SEA,REAF,FOG,ROUGH_SEA", true, true, false, map) > 0) {
                    __BASE47.loadBase(terrain, "sea2", map, "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "1011", "1011")
                } else {
                    __BASE47.loadBase(terrain, "sea3", map, "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "1011", "1011")
                }
            }
        } else {
            __BASE47.loadBase(terrain, "sea", map, "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,PONTOON,FORD,LAKE", "1011", "1011")
        }
        /*
        __BASE47.loadBase(terrain, "sea", map,"BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,LAKE","BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,LAKE","1011","1011")
        */
    } else {
        terrain.loadBaseSprite("sea+N+NE+E+SE+S+SW+W+NW");
    }
};
SEA.loadOverlaySprite = function (terrain, map) {
};
SEA.canBePlaced = function (x, y, map) {
    return true;
};
SEA.getTerrainSprites = function () {
    return __BASE47.getSprites("sea")
};
SEA.fiveByFiveTileTest = function (x, y, tiles, baseterrain, blacklist, border, map) {
    var foundTiles = 0;
    if (typeof map !== 'undefined') {
        var terrain = map.getTerrain(x, y);
        if (terrain != null) {
            var terrainPP = map.getTerrain(x + 1, y + 1);
            var terrainPM = map.getTerrain(x + 1, y - 1);
            var terrainMP = map.getTerrain(x - 1, y + 1);
            var terrainMM = map.getTerrain(x - 1, y - 1);
            if (terrainPP != null) {
                var surroundings = terrainPP.getSurroundings(tiles, baseterrain, blacklist, GameEnums.Directions_All, border);
                if (surroundings.includes("+")) {
                    foundTiles = foundTiles + 1;
                }
            }
            if (terrainPM != null) {
                var surroundings = terrainPM.getSurroundings(tiles, baseterrain, blacklist, GameEnums.Directions_All, border);
                if (surroundings.includes("+")) {
                    foundTiles = foundTiles + 1;
                }
            }
            if (terrainMP != null) {
                var surroundings = terrainMP.getSurroundings(tiles, baseterrain, blacklist, GameEnums.Directions_All, border);
                if (surroundings.includes("+")) {
                    foundTiles = foundTiles + 1;
                }
            }
            if (terrainMM != null) {
                var surroundings = terrainMM.getSurroundings(tiles, baseterrain, blacklist, GameEnums.Directions_All, border);
                if (surroundings.includes("+")) {
                    foundTiles = foundTiles + 1;
                }
            }
        }
    }
    return foundTiles;
}

var SEAInit = SEA.init;

SEA.init = function (terrain) {
    if (SEAInit) {
        SEAInit(terrain);
    }
    terrain.setSupportPalette(false);
};