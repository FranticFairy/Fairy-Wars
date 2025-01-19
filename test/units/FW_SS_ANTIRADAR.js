var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_TORP");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(3);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+antiradar";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 5000;
    this.variantList = ["FW_SS","FW_SS_ARTY","FW_SS_ASM","FW_SS_RADAR","FW_SS_AA","FW_SS_TRN"];
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_SHIP";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getName = function()
    {
        return qsTr("Infiltration Submarine");
    };

    this.getDescription = function()
    {
        return qsTr("A submarine upgraded with an almost-silent drive, provides immunity to ranged detection from most destroyers and submarines.");
    };

    this.getBaseCost = function()
    {
        return 11000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_UNSTEALTH", "ACTION_STEALTH"];
}

Constructor.prototype = UNIT;
var FW_SS_ANTIRADAR = new Constructor();
