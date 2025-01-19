var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_LBOMB");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_AIR_MG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+bomb";
        displayIconVar.writeDataString(displayIcon);

        var variantVar = variables.createVariable("variant");
        var variant = variantVar.readDataBool();
        variant = false;
        variantVar.writeDataBool(variant);

        var upgradeCostVar = variables.createVariable("upgradeCost");
        var upgradeCost = upgradeCostVar.readDataInt32();
        upgradeCost = 0;
        upgradeCostVar.writeDataInt32(upgradeCost);

        var variantListVar = variables.createVariable("variantList");
        var variantList = variantListVar.readDataString();
        variantList = ["FW_PROP_AA","FW_PROP_ASM","FW_PROP_AT"];
        variantListVar.writeDataString(variantList);

        var fuelConsumptionVar = variables.createVariable("fuelConsumption");
        var fuelConsumption = fuelConsumptionVar.readDataInt32();
        fuelConsumption = 4;
        fuelConsumptionVar.writeDataInt32(fuelConsumption);

    };

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_AIR";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Prop. Plane");
    };

    this.getDescription = function()
    {
        return qsTr("A cheap but  slow propellor-driven aircraft. Used for harassing soft ground targets and helicopters.");
    };

    this.getBaseCost = function()
    {
        return 12000;
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
var FW_PROP = new Constructor();
