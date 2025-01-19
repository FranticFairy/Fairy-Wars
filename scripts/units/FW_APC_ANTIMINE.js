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
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
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
        return qsTr("A tougher Halftrack, can take quite a beating and can carry two Infantry units, but no Field Guns. Can perform resupplies.");
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
