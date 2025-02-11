var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HMG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(7);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+anch";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 3000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_IFV","FW_IFV_AT","FW_IFV_AA","FW_IFV_ARTY","FW_IFV_ANTIMINE","FW_IFV_RADAR","FW_IFV_MOVE","FW_IFV_HMR"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_LTANK";
    };

    this.getCOSpecificUnit = function(building) {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Light;
    };

    this.getName = function()
    {
        return qsTr("Marine IFV");
    };

    this.getDescription = function()
    {
        return qsTr("An IFV with floatation skirts, to allow it to move immediately upon unloading from a ship.");
    };

    this.getBaseCost = function()
    {
        return 7000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_CAPTURE", "ACTION_MISSILE"];
}

Constructor.prototype = UNIT;
var FW_IFV_ANCH = new Constructor();
