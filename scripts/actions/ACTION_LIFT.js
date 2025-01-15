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
            if(unit.getMovementType() === "MOVE_HELI_LANDED") {
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
        return qsTr("Lift");
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
        ACTION_GETUPGRADES.resetValuesLite(unit, unit.defaultValues);
    };
    this.getName = function()
    {
        return qsTr("Lift");
    };
    this.getDescription = function()
    {
        return qsTr("Lift off and take to the skies once more.");
    };
}

Constructor.prototype = ACTION;
var ACTION_LIFT = new Constructor();
