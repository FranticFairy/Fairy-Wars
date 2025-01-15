var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var forests = ["FOREST", "FOREST1", "FOREST2", "FOREST3", "DESERT_FOREST", "DESERT_FOREST1", "SNOW_FOREST", "SNOW_FOREST1", "SNOW_FOREST2", "WASTE_FOREST"];
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y)
        var building = action.getTargetBuilding();
        if (unit === null || unit.getHasMoved() === true) {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) &&
            (building === null) && forests.includes(targetTerrain.getTerrainID())) {
            return true;
        }
        return false;
    };
    this.getActionText = function (map) {
        return qsTr("Clear Forest");
    };
    this.getIcon = function (map) {
        return "icon_fire";
    };
    this.isFinalStep = function (action, map) {
        return true;
    };
    this.perform = function (action, map) {
        var unit = action.getTargetUnit();
        var unitX = unit.getX();
        var unitY = unit.getY();

        var outputTerrain = "PLAINS";

        var targetTerrain = map.getTerrain(unitX, unitY);
        switch (targetTerrain.getTerrainID()) {
            case "DESERT_FOREST":
            case "DESERT_FOREST1":
                outputTerrain = "DESERT";
                break;
            case "SNOW_FOREST":
            case "SNOW_FOREST1":
            case "SNOW_FOREST2":
                outputTerrain = "SNOW";
                break;
            case "WASTE_FOREST":
                outputTerrain = "WASTE";
                break;
        }

        map.replaceTerrainOnly(outputTerrain, unitX, unitY, true, false)
        ACTION_TERRAIN_LOADSPRITES.perform(unitX, unitY);

        unit.setHasMoved(true);
    };
    this.getName = function () {
        return qsTr("Clear forest");
    };
    this.getDescription = function () {
        return qsTr("Clear out a forest.");
    };
}

Constructor.prototype = ACTION;
var ACTION_CLEAR_FOREST = new Constructor();
