var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(3);
        unit.setMaxAmmo1(3);
        unit.setWeapon1ID("FW_WEP_CRUISEMISSILE");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(2);
        unit.setMaxRange(4);
        unit.setVision(3);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+arty";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 8000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_SS","FW_SS_ASM","FW_SS_RADAR","FW_SS_ANTIRADAR","FW_SS_AA","FW_SS_TRN"];
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_SS";
    };

    this.getMovementType = function()
    {
        return "MOVE_SUB";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval_Medium;
    };

    this.getName = function()
    {
        return qsTr("Missile Submarine");
    };

    this.getDescription = function()
    {
        return qsTr("A submarine refitted to exchange torpedo tubes with vertical cruise missile silos, for ranged attacks against land and sea targets.");
    };

    this.getBaseCost = function()
    {
        return 11000;
    };

	this.canMoveAndFire = function()
    {
        return false;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_UNSTEALTH", "ACTION_STEALTH"];
}

Constructor.prototype = UNIT;
var FW_SS_ARTY = new Constructor();
