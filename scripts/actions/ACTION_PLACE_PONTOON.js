var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map)) {
            if (ACTION_PLACE_PONTOON.getBridgeFields(action, map).length > 0) {
                return true;
            }
        }
        return false;
    };
    this.getBridgeFields = function (action, map) {
        var targetField = action.getActionTarget();
        var targetFields = [Qt.point(targetField.x + 1, targetField.y),
        Qt.point(targetField.x - 1, targetField.y),
        Qt.point(targetField.x, targetField.y - 1),
        Qt.point(targetField.x, targetField.y + 1)];
        var targetFieldCrossings = [Qt.point(targetField.x + 2, targetField.y),
        Qt.point(targetField.x - 2, targetField.y),
        Qt.point(targetField.x, targetField.y - 2),
        Qt.point(targetField.x, targetField.y + 2)];
        var unit = action.getTargetUnit();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y);
        var ret = [];
        // check all neighbour terrains
        for (var i = 0; i < targetFields.length; i++) {
            if (map.onMap(targetFields[i].x, targetFields[i].y)) {
                if (map.onMap(targetFieldCrossings[i].x, targetFieldCrossings[i].y)) {
                    var crossingTile = map.getTerrain(targetFieldCrossings[i].x, targetFieldCrossings[i].y)
                    var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                    var defUnit = terrain.getUnit();
                    // can the transported unit move over the terrain?
                    var terrainId = terrain.getID();
                    var bridgeBlockers = ["RIVER"]
                    if (bridgeBlockers.includes(terrainId)) {
                        if (defUnit === null) {
                            var tF = map.getTerrain(targetField.x,targetField.y);
                            if(Global["MOVE_TANK"].getMovementpoints(crossingTile, unit, tF, false, map) > 0) {
                                ret.push(targetFields[i]);
                            }
                        }
                    }
                }
            }
        }
        return ret;
    };

    this.getActionText = function (map) {
        return qsTr("Build Bridge");
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
        var fields = ACTION_PLACE_PONTOON.getBridgeFields(action, map);
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
        animation.setEndOfAnimationCall("ACTION_PLACE_PONTOON", "performPostAnimation");
        // move unit to target position
        Global[unit.getUnitID()].moveUnit(unit, action, map);
        // disable unit commandments for this turn
        unit.setHasMoved(true);
        unit.reduceAmmo2(1);
        action.startReading();
        var x = action.readDataInt32();
        var y = action.readDataInt32();
        ACTION_PLACE_PONTOON.postAnimationMinePosX = x;
        ACTION_PLACE_PONTOON.postAnimationMinePosY = y;
        ACTION_PLACE_PONTOON.postAnimationMineOwner = unit.getOwner();
    };
    this.performPostAnimation = function (postAnimation, map) {
        // unloading the units here :)
        var player = ACTION_PLACE_PONTOON.postAnimationMineOwner;

        map.replaceTerrain("PONTOON", ACTION_PLACE_PONTOON.postAnimationMinePosX, ACTION_PLACE_PONTOON.postAnimationMinePosY, true, true, false)

        /*
        var unit = map.spawnUnit(ACTION_PLACE_PONTOON.postAnimationMinePosX,
                                 ACTION_PLACE_PONTOON.postAnimationMinePosY,
                                 "WATERMINE", player);
        if (unit !== null)
        {
            map.getGameRecorder().buildUnit(player.getPlayerID(), unit.getUnitID(), player.getPlayerID());
            unit.setHasMoved(true);
        }
        player.buildedUnit(unit);
        */
        audio.playSound("unload.wav");
        ACTION_PLACE_PONTOON.postAnimationMinePosX = -1;
        ACTION_PLACE_PONTOON.postAnimationMinePosY = -1;
        ACTION_PLACE_PONTOON.postAnimationMineOwner = null;
    };
    this.getName = function () {
        return qsTr("Build Bridge");
    };
    this.getDescription = function () {
        return qsTr("Build a bridge to cross a river.");
    };
}

Constructor.prototype = ACTION;
var ACTION_PLACE_PONTOON = new Constructor();
