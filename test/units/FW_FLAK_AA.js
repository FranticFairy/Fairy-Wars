var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_SAM");

        unit.setAmmo2(5);
        unit.setMaxAmmo2(5);
        unit.setWeapon2ID("FW_WEP_HFLAK_AT");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(2);
        unit.setMaxRange(4);
        unit.setVision(2);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+aa";
        displayIconVar.writeDataString(displayIcon);

        var variantVar = variables.createVariable("variant");
        var variant = variantVar.readDataBool();
        variant = true;
        variantVar.writeDataBool(variant);

        var upgradeCostVar = variables.createVariable("upgradeCost");
        var upgradeCost = upgradeCostVar.readDataInt32();
        upgradeCost = 6000;
        upgradeCostVar.writeDataInt32(upgradeCost);

        var variantListVar = variables.createVariable("variantList");
        var variantList = variantListVar.readDataString();
        variantList = ["FW_FLAK"];
        variantListVar.writeDataString(variantList);

        var fuelConsumptionVar = variables.createVariable("fuelConsumption");
        var fuelConsumption = fuelConsumptionVar.readDataInt32();
        fuelConsumption = 0;
        fuelConsumptionVar.writeDataInt32(fuelConsumption);

    };

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TIRE_A";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Towed SAM Launcher");
    };

    this.getDescription = function()
    {
        return qsTr("An anti-air field gun. Has a bit of range. Very strong against Helicopters, okay against light armoured targets, useless against heavy armour.");
    };

    this.getBaseCost = function()
    {
        return 8000;
    };

	this.canMoveAndFire = function()
    {
        return False;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_FLAK_AA = new Constructor();
