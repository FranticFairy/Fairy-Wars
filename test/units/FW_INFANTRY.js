var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_AR");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = ["FW_INFANTRY_GUN","FW_INFANTRY_AT","FW_INFANTRY_PARA","FW_INFANTRY_ANCH"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
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
        return qsTr("Infantry");
    };

    this.getDescription = function()
    {
        return qsTr("Standard Infantry, not much to say.");
    };

    this.getBaseCost = function()
    {
        return 1000;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_CAPTURE", "ACTION_MISSILE"];
}

Constructor.prototype = UNIT;
var FW_INFANTRY = new Constructor();
