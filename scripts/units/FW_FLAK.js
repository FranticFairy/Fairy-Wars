var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_HFLAK");

        unit.setAmmo2(5);
        unit.setMaxAmmo2(5);
        unit.setWeapon2ID("FW_WEP_HFLAK_AT");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(2);

    };

    this.getFirstStrike = function(unit, uX, uY, attacker, isDefender, map, aX, aY) {
        if(isDefender) {
            if(attacker.getUnitType() === GameEnums.UnitType_Air) {
                return true;
            }
        }
    }

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
        return qsTr("Towed Anti-Air");
    };

    this.getDescription = function()
    {
        return qsTr("An anti-air field gun. Has a bit of range. Very strong against Helicopters, okay against light armoured targets, useless against heavy armour.");
    };

    this.getBaseCost = function()
    {
        return 8000;
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
var FW_FLAK = new Constructor();
