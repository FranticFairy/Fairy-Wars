var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map) &&
            unit.getAmmo2() > 0) {
            if (ACTION_PLACE_LANDMINE.getMineFields(action, map).length > 0) {
                return true;
            }
        }
        return false;
    };
    this.getMineFields = function (action, map) {
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
                var terrainId = terrain.getID();
                if ((Global[unit.getMovementType()].getMovementpoints(terrain, unit, terrain, false, map) > 0) &&
                    (defUnit === null)) {

                    var building = terrain.getBuilding();
                    if (building != null) {
                        if (building.getOwner() === null || building.getOwner() === unit.getOwner()) {
                            ret.push(targetFields[i]);
                        }
                    } else {
                        ret.push(targetFields[i]);
                    }
                }
            }
        }
        return ret;
    };

    this.getActionText = function (map) {
        return qsTr("Place Mine");
    };
    this.getIcon = function (map) {
        return "FW_LANDMINE";
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
        var fields = ACTION_PLACE_LANDMINE.getMineFields(action, map);
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
        animation.setEndOfAnimationCall("ACTION_PLACE_LANDMINE", "performPostAnimation");
        // move unit to target position
        Global[unit.getUnitID()].moveUnit(unit, action, map);
        // disable unit commandments for this turn
        unit.setHasMoved(true);
        unit.reduceAmmo2(1);
        action.startReading();
        var x = action.readDataInt32();
        var y = action.readDataInt32();
        ACTION_PLACE_LANDMINE.postAnimationMinePosX = x;
        ACTION_PLACE_LANDMINE.postAnimationMinePosY = y;
        ACTION_PLACE_LANDMINE.postAnimationMineOwner = unit.getOwner();
    };
    this.performPostAnimation = function (postAnimation, map) {
        // unloading the units here :)
        var player = ACTION_PLACE_LANDMINE.postAnimationMineOwner;
        var unit = map.spawnUnit(ACTION_PLACE_LANDMINE.postAnimationMinePosX,
            ACTION_PLACE_LANDMINE.postAnimationMinePosY,
            "FW_LANDMINE", player);
        if (unit !== null) {
            map.getGameRecorder().buildUnit(player.getPlayerID(), unit.getUnitID(), player.getPlayerID());
            unit.setHasMoved(true);
        }
        player.buildedUnit(unit);
        audio.playSound("unload.wav");
        ACTION_PLACE_LANDMINE.postAnimationMinePosX = -1;
        ACTION_PLACE_LANDMINE.postAnimationMinePosY = -1;
        ACTION_PLACE_LANDMINE.postAnimationMineOwner = null;
    };
    this.getName = function () {
        return qsTr("Place Landmine");
    };
    this.getDescription = function () {
        return qsTr("Places a stealthed Landmine at a given position. The Landmine automatically explodes if an enemy land unit moves into it, dealing damage and interrupting that unit's action.");
    };
}

Constructor.prototype = ACTION;
var ACTION_PLACE_LANDMINE = new Constructor();
