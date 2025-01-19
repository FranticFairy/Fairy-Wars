var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setWeapon1ID("FW_WEP_ATGM");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HELI_HMG");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+trn";
        displayIconVar.writeDataString(displayIcon);

        var variantVar = variables.createVariable("variant");
        var variant = variantVar.readDataBool();
        variant = true;
        variantVar.writeDataBool(variant);

        var upgradeCostVar = variables.createVariable("upgradeCost");
        var upgradeCost = upgradeCostVar.readDataInt32();
        upgradeCost = 4000;
        upgradeCostVar.writeDataInt32(upgradeCost);

        var variantListVar = variables.createVariable("variantList");
        var variantList = variantListVar.readDataString();
        variantList = ["FW_AHELI"];
        variantListVar.writeDataString(variantList);

        var fuelConsumptionVar = variables.createVariable("fuelConsumption");
        var fuelConsumption = fuelConsumptionVar.readDataInt32();
        fuelConsumption = 2;
        fuelConsumptionVar.writeDataInt32(fuelConsumption);

    };

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_HELI";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };

    this.getName = function()
    {
        return qsTr("Assault Helicopter");
    };

    this.getDescription = function()
    {
        return qsTr("Your standard battle copter.");
    };

    this.getBaseCost = function()
    {
        return 9500;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.transportList = ["FW_INFANTRY", "FW_HVY_INFANTRY", "FW_AST_INFANTRY"];

    this.actionList = ["ACTION_FIRE"];
    this.useTerrainDefense = function()
    {
        return false;
    };

    this.useTerrainHide = function()
    {
        return false;
    };

}

Constructor.prototype = UNIT;
var FW_AHELI_TRN = new Constructor();
