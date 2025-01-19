var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_MTANKGUN");

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
        return qsTr("Anti-Tank Gun");
    };

    this.getDescription = function()
    {
        return qsTr("A field gun dedicated to killing tanks. Fires first when attacked, and has a little bit of range, but is quite squishy and can't target infantry or air.");
    };

    this.getBaseCost = function()
    {
        return 7000;
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
var FW_ATGUN = new Constructor();
