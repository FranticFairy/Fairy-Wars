var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map)) {
            if (ACTION_BUILD_TRENCH.getTrenchFields(action, map).length > 0) {
                return true;
            }
        }
        return false;
    };
    this.getTrenchFields = function (action, map) {
        var targetField = action.getActionTarget();
        var targetFields = [Qt.point(targetField.x + 1, targetField.y),
        Qt.point(targetField.x - 1, targetField.y),
        Qt.point(targetField.x, targetField.y - 1),
        Qt.point(targetField.x, targetField.y + 1)];
        var unit = action.getTargetUnit();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y);
        var ret = [];
        // check all neighbour terrains
        for (var i = 0; i < targetFields.length; i++) {
            if (map.onMap(targetFields[i].x, targetFields[i].y)) {
                var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                var defUnit = terrain.getUnit();
                // can the transported unit move over the terrain?
                var plains = ["PLAINS", "SNOW", "DESERT", "WASTE"];
                var terrainId = terrain.getID();
                var building = terrain.getBuilding();
                if ((plains.includes(targetTerrain.getTerrainID())) && (defUnit === null) && building === null) {
                    ret.push(targetFields[i]);
                }
            }
        }
        return ret;
    };

    this.getActionText = function (map) {
        return qsTr("Dig Trench");
    };
    this.getIcon = function (map) {
        return "build";
    };
    this.isFinalStep = function (action, map) {
        if (action.getInputStep() === 1) {
            return true;
        }
        else {
            return false;
        }
    };

    this.getStepInputType = function (action, map) {
        return "FIELD";
    };

    this.getStepData = function (action, data, map) {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        data.setColor("#C800FF00");
        var fields = ACTION_BUILD_TRENCH.getTrenchFields(action, map);
        for (var i3 = 0; i3 < fields.length; i3++) {
            data.addPoint(Qt.point(fields[i3].x, fields[i3].y));
        }
    };

    this.postAnimationMinePosX = -1;
    this.postAnimationMinePosY = -1;
    this.perform = function (action, map) {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action, map);
        animation.setEndOfAnimationCall("ACTION_BUILD_TRENCH", "performPostAnimation");
        // move unit to target position
        Global[unit.getUnitID()].moveUnit(unit, action, map);
        // disable unit commandments for this turn
        unit.setHasMoved(true);
        action.startReading();
        var x = action.readDataInt32();
        var y = action.readDataInt32();
        ACTION_BUILD_TRENCH.postAnimationMinePosX = x;
        ACTION_BUILD_TRENCH.postAnimationMinePosY = y;
        ACTION_BUILD_TRENCH.postAnimationMineOwner = unit.getOwner();
    };
    this.performPostAnimation = function (postAnimation, map) {
        map.replaceTerrainOnly("TRENCH", ACTION_BUILD_TRENCH.postAnimationMinePosX, ACTION_BUILD_TRENCH.postAnimationMinePosY, true, false);
        ACTION_TERRAIN_LOADSPRITES.perform(ACTION_BUILD_TRENCH.postAnimationMinePosX, ACTION_BUILD_TRENCH.postAnimationMinePosY);
        ACTION_BUILD_TRENCH.postAnimationMinePosX = -1;
        ACTION_BUILD_TRENCH.postAnimationMinePosY = -1;
        ACTION_BUILD_TRENCH.postAnimationMineOwner = null;
    };
    this.getName = function () {
        return qsTr("Dig Trench");
    };
    this.getDescription = function () {
        return qsTr("Dig a trench at a selected location. Trenches are difficult for most units to traverse, but provide great cover and protection for infantry and field gun units.");
    };
}

Constructor.prototype = ACTION;
var ACTION_BUILD_TRENCH = new Constructor();
