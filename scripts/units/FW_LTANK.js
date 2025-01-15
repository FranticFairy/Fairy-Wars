var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(8);
        unit.setMaxAmmo1(8);
        unit.setWeapon1ID("FW_WEP_LTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(7);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(3);

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
        return qsTr("Light Tank");
    };

    this.getDescription = function()
    {
        return qsTr("A scouting/harrassment tank. Good against unarmoured targets, but weak against armoured enemies, and isn't very well-armoured itself.");
    };

    this.getBaseCost = function()
    {
        return 7000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
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
var FW_LTANK = new Constructor();
