ACTION_PLACE_WATERMINE.getName = function () {
    return qsTr("Place Seamine");
};

ACTION_PLACE_WATERMINE.getIcon = function (map) {
    return "FW_SEAMINE";
};

ACTION_PLACE_WATERMINE.getDescription = function () {
    return qsTr("Places a stealthed Seamine at a given position. The Seamine automatically explodes if an enemy Naval unit moves into it, dealing damage and interrupting that unit's action.");
};

ACTION_PLACE_WATERMINE.performPostAnimation = function (postAnimation, map) {
    // unloading the units here :)
    var player = ACTION_PLACE_WATERMINE.postAnimationMineOwner;
    var unit = map.spawnUnit(ACTION_PLACE_WATERMINE.postAnimationMinePosX,
        ACTION_PLACE_WATERMINE.postAnimationMinePosY,
        "FW_SEAMINE", player);
    if (unit !== null) {
        map.getGameRecorder().buildUnit(player.getPlayerID(), unit.getUnitID(), player.getPlayerID());
        unit.setHasMoved(true);
    }
    player.buildedUnit(unit);
    audio.playSound("unload.wav");
    ACTION_PLACE_WATERMINE.postAnimationMinePosX = -1;
    ACTION_PLACE_WATERMINE.postAnimationMinePosY = -1;
    ACTION_PLACE_WATERMINE.postAnimationMineOwner = null;
};

ACTION_PLACE_WATERMINE.getMineFields = function (action, map) {
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
            if (terrainId !== "BRIDGE" &&
                terrainId !== "BRIDGE1" &&
                terrainId !== "BRIDGE2" &&
                terrainId !== "BEACH") {
                if ((Global[unit.getMovementType()].getMovementpoints(terrain, unit, terrain, false, map) > 0) &&
                    (defUnit === null)) {

                    var building = terrain.getBuilding();
                    if (building === null) {
                        ret.push(targetFields[i]);
                    }
                }
            }
        }
    }
    return ret;
};

ACTION_PLACE_WATERMINE.canBePerformed = function (action, map) {
    var unit = action.getTargetUnit();
    var actionTargetField = action.getActionTarget();
    var targetField = action.getTarget();
    if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map) &&
        unit.getAmmo2() > 0) {
        if (ACTION_PLACE_WATERMINE.getMineFields(action, map).length > 0) {
            return true;
        }
    }
    return false;
};