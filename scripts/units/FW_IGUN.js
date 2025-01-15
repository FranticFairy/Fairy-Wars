var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_SUPGUN");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(1);

    };
    
    this.getFirstStrike = function(unit, uX, uY, attacker, isDefender, map, aX, aY) {
        if(isDefender) {
            return true;
        }
    }

    this.getMovementType = function()
    {
        return "MOVE_TIRE_B";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Infantry Gun");
    };

    this.getDescription = function()
    {
        return qsTr("A short-range artillery piece, best used against infantry. Fires first when attacked.");
    };

    this.getBaseCost = function()
    {
        return 6500;
    };

	this.canMoveAndFire = function(unit)
    {
        return false;
    };
	
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
        }
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_IGUN = new Constructor();
