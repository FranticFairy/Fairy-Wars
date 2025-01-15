var Constructor = function () {
    this.getTerrainGroup = function () {
        return 1;
    };
    this.getDefaultPalette = function () {
        return "palette_clear";
    };
    this.init = function (terrain) {
        terrain.setSupportPalette(false);
        if (terrain.getPalette() === "") {
            terrain.setPalette(PONTOON.getDefaultPalette());
        }
        terrain.setTerrainName(PONTOON.getName());
    };
    this.getName = function () {
        return qsTr("Pontoon Bridge");
    };
    this.canBePlacedBaseId = function(x, y, map, baseId)
    {
        var terrain = map.getTerrain(x, y);
        if ((terrain.getTerrainID() === "RIVER") ||
            (terrain.getTerrainID() === baseId))
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.getDefense = function (terrain) {
        return 0;
    };
    this.loadBaseTerrain = function (terrain, currentTerrainID, map, currentPalette) {
        terrain.loadBaseTerrain("RIVER", currentPalette);
    };
    this.loadOverlaySprite = function (terrain, map) {
    };
    this.loadBaseSprite = function (terrain, map) {
        __BASE2.loadBase(terrain, "pontoon", map,"DESERT_TRY_RIVER,BEACH,FOG,ROUGH_SEA,REAF,SEA,RIVER,LAKE,FORD,PONTOON","0111")
    };
    this.getMiniMapIcon = function () {
        return "minimap_bridge";
    };
    this.getDescription = function () {
        return qsTr("Pontoons are makeshift bridges for crossing rivers; heavy vehicles cannot use them.");
    };

    this.getTerrainSprites = function () {
        return __BASE2.getSprites("PONTOON")
    };
};
Constructor.prototype = TERRAIN;
var PONTOON = new Constructor();
