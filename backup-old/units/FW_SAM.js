var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_SAM");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(2);
        unit.setMaxRange(5);
        unit.setVision(1);

    };

    this.getMovementType = function()
    {
        return "MOVE_TIRE_A";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("SAM Launcher");
    };

    this.getDescription = function()
    {
        return qsTr("Long-range anti-air artillery. Can provide cover against enemy air attacks, and is devastating against any air units, but defenseless when attacked. Detects air units at 4 Range.");
    };

    this.getBaseCost = function()
    {
        return 16000;
    };

	this.canMoveAndFire = function(unit)
    {
        return false;
    };
	
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            ACTION_PING.pingType(unit,4,GameEnums.UnitType_Air,false);
        }
    };

    this.postAction = function(unit, action, map) {
        ACTION_PING.pingType(unit,4,GameEnums.UnitType_Air,false);
    }

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_SAM = new Constructor();
