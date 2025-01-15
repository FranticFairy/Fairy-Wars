
ACTION_BUILD_TEMP_AIRPORT.canBePerformed = function (action, map) {
    var unit = action.getTargetUnit();
    var actionTargetField = action.getActionTarget();
    var targetField = action.getTarget();
    if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map) &&
        unit.hasAmmo1()) {
        var terrain = map.getTerrain(actionTargetField.x, actionTargetField.y);
        switch (terrain.getID()) {
            case "PLAINS":
            case "DESERT":
            case "SNOW":
            case "WASTE":
                return true;
        }

    }
    return false;
};