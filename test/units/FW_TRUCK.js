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

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = [];
    this.fuelConsumption = 0;

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
        return qsTr("Truck");
    };

    this.getDescription = function()
    {
        return qsTr("A cheaper, squishier version of the APC. Can transport one Infantry/Field Gun unit and perform resupplies.");
    };

    this.getBaseCost = function()
    {
        return 3000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK"];

    this.actionList = ["ACTION_SUPPORTALL_RATION", "ACTION_BUILD_CARRY"];
}

Constructor.prototype = UNIT;
var FW_TRUCK = new Constructor();
