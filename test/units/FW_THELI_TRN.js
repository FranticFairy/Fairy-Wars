var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+trn";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 4000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_THELI","FW_THELI_FUEL"];
    this.fuelConsumption = 2;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_THELI";
    };

    this.getMovementType = function()
    {
        return "MOVE_HELI";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Heli;
    };

    this.getName = function()
    {
        return qsTr("Lift Helicopter");
    };

    this.getDescription = function()
    {
        return qsTr("An upgraded transport helicopter, capable of carrying light vehicles.");
    };

    this.getBaseCost = function()
    {
        return 5000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK", "FW_MOTOR", "FW_RECON", "FW_TRUCK"];

    this.actionList = ["ACTION_BUILD_CARRY"];
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
var FW_THELI_TRN = new Constructor();
