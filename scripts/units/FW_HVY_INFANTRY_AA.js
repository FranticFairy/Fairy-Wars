var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_MANPAD");

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

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+aa";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_HVY_INFANTRY","FW_HVY_INFANTRY_ARTY"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_HVY_INFANTRY";
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
        return qsTr("Heavy  Infantry (MANPAD)");
    };

    this.getDescription = function()
    {
        return qsTr("Heavy Infantry teams carrying shoulder-launched anti-air missiles, for light anti-air support.");
    };

    this.getBaseCost = function()
    {
        return 2500;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_CAPTURE", "ACTION_MISSILE"];
}

Constructor.prototype = UNIT;
var FW_HVY_INFANTRY_AA = new Constructor();
