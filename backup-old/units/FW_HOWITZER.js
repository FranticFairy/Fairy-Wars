var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_HOWITZER");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(2);
        unit.setMaxRange(3);
        unit.setVision(1);

    };

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
        return qsTr("Howitzer");
    };

    this.getDescription = function()
    {
        return qsTr("Your standard artillery piece, but less mobile, but can be transported by Trucks/Halftracks/T.Copters.");
    };

    this.getBaseCost = function()
    {
        return 7500;
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
var FW_HOWITZER = new Constructor();
