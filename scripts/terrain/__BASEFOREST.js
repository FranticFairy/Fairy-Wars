
__BASEFOREST.getDefense = function (terrain) {
    var baseTerrainId = ""
    if (terrain !== null) {
        baseTerrainId = Global[terrain.getTerrainID()].baseTerrainId;
    }
    if (baseTerrainId === "WASTE") {
        return 1;
    }
    else {
        return 2;
    }
}