var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(7);
        unit.setMaxAmmo1(7);
        unit.setWeapon1ID("FW_WEP_MTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+antimine";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 4000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_MTANK"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_MTANK";
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Medium;
    };

    this.getName = function()
    {
        return qsTr("Medium Flail Tank");
    };

    this.getDescription = function()
    {
        return qsTr("A medium tank mounting a mine-clearing flail at the front. Provides immunity to landmines and allows it to clear them.");
    };

    this.getBaseCost = function()
    {
        return 9500;
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

    this.actionList = ["ACTION_FIRE", "ACTION_DISABLE_MINE"];
}

Constructor.prototype = UNIT;
var FW_MTANK_ANTIMINE = new Constructor();
