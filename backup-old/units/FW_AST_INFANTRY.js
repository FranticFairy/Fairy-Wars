var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HR");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

    };
    
    this.getMovementType = function()
    {
        return "MOVE_FEET";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Infantry;
    };

    this.getName = function()
    {
        return qsTr("Assault Infantry");
    };

    this.getDescription = function()
    {
        return qsTr("Slightly stronger than regular Infantry, their biggest strength is being able to move after unloading.");
    };

    this.getBaseCost = function()
    {
        return 2500;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_MISSILE", "ACTION_CAPTURE", "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];
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
var FW_AST_INFANTRY = new Constructor();
