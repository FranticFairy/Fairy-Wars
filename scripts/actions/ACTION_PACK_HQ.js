var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        if ((unit === null) &&
            (building !== null) &&
            (BUILDING.hqIds.includes(building.getBuildingID())) && building.getOwner() == map.getCurrentPlayer() && map.getCurrentPlayer().getFunds() >= 10000)
		{
            if (building.getOwner().getBaseGameInput().getAiType() != GameEnums.AiTypes_Human) {
                return false;
            }
            return true;
		}
        return false;
    };
    this.getActionText = function(map)
    {
        return qsTr("Pack HQ");
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
        var unitID = action.readDataString();
        var building = action.getTargetBuilding();
        var x = building.getX();
        var y = building.getY();
        var terrain = map.getTerrain(x,y);
        var player = building.getOwner();
        player.addFunds(-10000);
        var target = action.getTarget();
        var unit = map.spawnUnit(target.x, target.y, "FW_COMV", player, 0, true);
        // pay for the unit
        map.getGameRecorder().buildUnit(player.getPlayerID(), unitID, player.getPlayerID());
        unit.setHasMoved(true);
        unit.setUnitVisible(false, player);
        player.buildedUnit(unit);
        // achievements
        terrain.loadBuilding("TOWN");
        terrain.getBuilding().setOwner(player);
        
    };
    this.getName = function()
    {
        return qsTr("Pack HQ");
    };
    this.getDescription = function()
    {
        return qsTr("Pack up your HQ into a mobile Command Vehicle to relocate to a safer location.");
    };
}

Constructor.prototype = ACTION;
var ACTION_PACK_HQ = new Constructor();
