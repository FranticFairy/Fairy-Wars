var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();

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
        variantList = [];
        variantListVar.writeDataString(variantList);

        var fuelConsumptionVar = variables.createVariable("fuelConsumption");
        var fuelConsumption = fuelConsumptionVar.readDataInt32();
        fuelConsumption = 1;
        fuelConsumptionVar.writeDataInt32(fuelConsumption);

    };

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_BOAT";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getName = function()
    {
        return qsTr("Lander");
    };

    this.getDescription = function()
    {
        return qsTr("Meant for carrying land units from place to place and launching naval invasions.");
    };

    this.getBaseCost = function()
    {
        return 6000;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_HTANK" , "FW_SHTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_HVY_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS"];

    this.actionList = ["ACTION_BUILD_CARRY"];
}

Constructor.prototype = UNIT;
var FW_TR = new Constructor();
