var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setWeapon1ID("FW_WEP_HVY_HOWITZER");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(4);
        unit.setMinRange(3);
        unit.setMaxRange(6);
        unit.setVision(1);

    };

    this.getMovementType = function()
    {
        return "MOVE_TANK_HEAVY";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Heavy Artillery");
    };

    this.getDescription = function()
    {
        return qsTr("Long-range heavy artillery. Devastating firepower and significant range, but very expensive and slow.");
    };

    this.getBaseCost = function()
    {
        return 20000;
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
var FW_HVY_ARTILLERY = new Constructor();
