var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (unit.getOwner().getFieldVisibleType(actionTargetField.x, actionTargetField.y) === GameEnums.VisionType_Shrouded)
        {
            return false;
        }
        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map))
        {
            var building = action.getMovementBuilding();
            if (building !== null)
            {
                if (building.getOwner() == unit.getOwner())
                {
                    return true;
                }
            }
        }
        return false;
    };
    this.getActionText = function(map)
    {
        return qsTr("Unpack HQ (10,000)");
    };
    this.getIcon = function(map)
    {
        return "build";
    };
    this.isFinalStep = function(action, map)
    {
        return true;
    };


    this.perform = function(action, map)
    {
        action.startReading();
        //var building = action.getTargetBuilding();
        var unit = action.getTargetUnit();
        Global[unit.getUnitID()].moveUnit(unit, action, map);
        var x = unit.getX();
        var y = unit.getY();
        var terrain = map.getTerrain(x,y);
        var player = unit.getOwner();

        terrain.loadBuilding("HQ");
        terrain.getBuilding().setOwner(player);
        
        var unit = terrain.getUnit();
        unit.killUnit();

        // achievements
        
    };
    this.getName = function()
    {
        return qsTr("Unpack HQ");
    };
    this.getDescription = function()
    {
        return qsTr("Relocate your HQ to this location.");
    };
}

Constructor.prototype = ACTION;
var ACTION_UNPACK_HQ = new Constructor();
