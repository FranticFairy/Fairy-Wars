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
            terrain.setPalette(TRENCH.getDefaultPalette());
        }
        terrain.setTerrainName(TRENCH.getName());
    };
    this.getName = function () {
        return qsTr("Trench");
    };
    var fieldGuns = ["FW_ATGUN", "FW_IGUN", "FW_FLAK", "FW_HOWITZER"]
    this.getDefense = function (terrain) {
        if (terrain != null) {
            var unit = terrain.getUnit();
            if (unit != null) {
                if (unit.getUnitType() != GameEnums.UnitType_Infantry && !fieldGuns.includes(unit.getUnitID())) {
                    return 1;
                }
            }
        }

        return 3;
    };
    this.getVisionHide = function(terrain)
    {
        if (terrain != null) {
            var unit = terrain.getUnit();
            if (unit != null) {
                if (unit.getUnitType() != GameEnums.UnitType_Infantry && !fieldGuns.includes(unit.getUnitID())) {
                    return false;
                }
            }
        }

        return true;
    };
    this.loadBaseTerrain = function (terrain, currentTerrainID, map, currentPalette) {
        if (currentTerrainID === "SNOW") {
            terrain.loadBaseTerrain("SNOW", currentPalette);
        }
        else if (currentTerrainID === "DESERT") {
            terrain.loadBaseTerrain("DESERT", currentPalette);
        }
        else if (currentTerrainID === "WASTE") {
            terrain.loadBaseTerrain("WASTE", currentPalette);
        }
        else if (currentTerrainID === "PLAINS") {
            terrain.loadBaseTerrain("PLAINS", currentPalette);
        }
        else {
            terrain.loadBaseTerrain("PLAINS", currentPalette);
        }
    };
    this.loadOverlaySprite = function (terrain, map) {
    };
    this.loadBaseSprite = function (terrain, map) {
        __BASE16.loadBase(terrain, "trench", map, "TRENCH", "0011")
    };
    this.getMiniMapIcon = function () {
        return "minimap_plains";
    };
    this.getDescription = function () {
        return qsTr("Trenches hinder movement for units, but grant great defenses for infantry and field guns.");
    };

    this.getTerrainSprites = function () {
        return __BASE16.getSprites("trench")
    };
};
Constructor.prototype = TERRAIN;
var TRENCH = new Constructor();
