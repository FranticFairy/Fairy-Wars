var Constructor = function()
{
    this.getUnitDamageID = function (unit) {
        return "FW_MTANK";
    };

    this.init = function(unit)
    {
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Command Vehicle");
    };

    this.getDescription = function()
    {
        return qsTr("An armoured command unit that contains vital command staff. Used for relocating one's HQ. If the last one is destroyed, the game is lost.");
    };

    this.getBaseCost = function()
    {
        return 6000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            //Potential code here to reveal Command Vehicles to all players.
        }
    };

    this.actionList = ["ACTION_UNPACK_HQ", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];


    this.postAction = function(unit, action, map) {
        //Potential code here to reveal Command Vehicles to all players.
    }

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_COMV = new Constructor();
