var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        if ((unit != null) &&
            (building !== null) && building.getOwner() == map.getCurrentPlayer())
		{
            return true;
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
        var building = action.getTargetBuilding();
        var x = building.getX();
        var y = building.getY();
        var terrain = map.getTerrain(x,y);
        var player = building.getOwner();

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
