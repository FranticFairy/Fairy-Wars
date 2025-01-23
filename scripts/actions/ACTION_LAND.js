var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var aTF = map.getTerrain(actionTargetField.x,actionTargetField.y);
        var tF = map.getTerrain(targetField.x,targetField.y);

        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map))
        {
            if(Global["MOVE_HELI_LANDED"].getMovementpoints(aTF, unit, tF, false, map) > 0 && unit.getMovementType() === "MOVE_HELI") {
                return true;
            }
        }
        else
        {
            return false;
        }
    };
    this.getActionText = function(map)
    {
        return qsTr("Land");
    };
    this.getIcon = function(map)
    {
        return "wait";
    };
    this.isFinalStep = function(action, map)
    {
        return true;
    };
    this.perform = function(action, map)
    {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        Global[unit.getUnitID()].doWalkingAnimation(action, map);
        // move unit to target position
        Global[unit.getUnitID()].moveUnit(unit, action, map);
        // disable unit commandments for this turn
        unit.setHasMoved(true);
        unit.setMovementType("MOVE_HELI_LANDED");
        unit.setBaseMovementPoints(0);
        unit.setMinRange(0);
        unit.setMaxRange(0);
        unit.setVision(1);
        unit.setVisionHigh(0);
    };
    this.getName = function()
    {
        return qsTr("Land");
    };
    this.getDescription = function()
    {
        return qsTr("Land this helicopter, saving fuel and allowing land units to resupply but requiring it to spend a turn to take off again.");
    };
}

Constructor.prototype = ACTION;
var ACTION_LAND = new Constructor();
