var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var plains = ["PLAINS", "SNOW", "DESERT", "WASTE"];
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y)
        var building = action.getTargetBuilding();
        if (unit === null || unit.getHasMoved() === true) {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) &&
            (building === null) && plains.includes(targetTerrain.getTerrainID())) {
            return true;
        }
        return false;
    };
    this.getActionText = function (map) {
        return qsTr("Build road");
    };
    this.getIcon = function (map) {
        return "build";
    };
    this.isFinalStep = function (action, map) {
        return true;
    };
    this.perform = function (action, map) {
        var unit = action.getTargetUnit();
        var unitX = unit.getX();
        var unitY = unit.getY();

        var outputTerrain = "STREET";

        var targetTerrain = map.getTerrain(unitX, unitY);
        switch (targetTerrain.getTerrainID()) {
            case "DESERT":
                outputTerrain = "DESERT_PATH";
                break;
            case "SNOW":
                outputTerrain = "SNOW_STREET";
                break;
            case "WASTE":
                outputTerrain = "WASTE_PATH";
                break;
        }

        map.replaceTerrainOnly(outputTerrain, unitX, unitY, true, false)
        ACTION_TERRAIN_LOADSPRITES.perform(unitX, unitY);

        unit.setHasMoved(true);
    };
    this.getName = function () {
        return qsTr("Build road");
    };
    this.getDescription = function () {
        return qsTr("Build a road.");
    };
}

Constructor.prototype = ACTION;
var ACTION_BUILD_ROAD = new Constructor();
