
ACTION.emptyFieldActions.splice(0, 0, "ACTION_GET_WEATHER")
ACTION.emptyFieldActions.splice(0, 0, "COACTION_TEI_DREAMWEAVE")
//ACTION.emptyFieldActions.splice(0, 0, "ACTION_PERKLIST")

ACTION.isEmptyFieldAndHasNotMoved = function (action, unit, actionTargetField, targetField, map) {
    if (unit.getHasMoved() === false &&
        ((actionTargetField.x === targetField.x && actionTargetField.y === targetField.y) ||
            (action.getMovementTarget() === null && unit.getBaseMovementCosts(actionTargetField.x, actionTargetField.y) > 0))) {
        if (unit.getUnitID().includes("FW_SUPER_")) {
            if (actionTargetField != targetField) {

                if (!ACTION_HANDLER.mapCheckSuperUnit(map, actionTargetField)) {
                    return false;
                }
            }
        }
        return true;
    }
    else {
        return false;
    }
};