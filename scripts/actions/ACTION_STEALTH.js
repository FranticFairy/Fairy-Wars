ACTION_STEALTH.canBePerformed = function(action, map)
{
    var unit = action.getTargetUnit();
    var actionTargetField = action.getActionTarget();
    var targetField = action.getTarget();
    if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map))
    {
        if (unit.getHidden() === false)
        {
            var targetTerrain = map.getTerrain(actionTargetField.x, actionTargetField.y);
            if(unit.getMovementType() === "MOVE_SUB" && targetTerrain.getTerrainID() === "BEACH") {
                return false;
            }  else {
                return true;
            }
        }
    }
    return false;
};