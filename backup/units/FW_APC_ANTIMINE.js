var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(99);
        unit.setMaxFuel(99);
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
    this.upgradeCost = 3000;
    this.variantList = ["FW_APC"];
    this.builtBeforeToday = false;
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_APC";
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Flail APC");
    };

    this.getDescription = function()
    {
        return qsTr("An APC mounting a mine-clearing flail at the front. Provides immunity to landmines and allows it to clear them.");
    };

    this.getBaseCost = function()
    {
        return 6000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER"];

    this.actionList = ["ACTION_SUPPORTALL_RATION", "ACTION_DISABLE_MINE", "ACTION_BUILD_CARRY"];
}

Constructor.prototype = UNIT;
var FW_APC_ANTIMINE = new Constructor();
