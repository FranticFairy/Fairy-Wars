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
            terrain.setPalette(FORD.getDefaultPalette());
        }
        terrain.setTerrainName(FORD.getName());
    };
    this.getName = function () {
        return qsTr("Fordable River");
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
        __BASE2.loadBase(terrain, "FORD", map,"DESERT_TRY_RIVER,BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE,BRIDGE1,BRIDGE2,FORD,PONTOON,LAKE","0011")
    };
    this.getMiniMapIcon = function () {
        return "minimap_bridge";
    };
    this.getDescription = function () {
        return qsTr("Fords are shallow patches of river. some land units can pass through here, but at greatly reduced speed.");
    };

    this.getTerrainSprites = function () {
        return __BASE2.getSprites("ford")
    };
};
Constructor.prototype = TERRAIN;
var FORD = new Constructor();
