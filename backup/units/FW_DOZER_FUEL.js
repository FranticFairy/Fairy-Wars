var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+fuel";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 5000;
    this.variantList = ["FW_DOZER","FW_DOZER_UPGRD"];
    this.builtBeforeToday = false;
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_DOZER";
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
        return qsTr("Recovery Vehicle");
    };

    this.getDescription = function()
    {
        return qsTr("A dozer refitted to carry repair equipment and medical equipment instead of construction equipment. Can repair adjacent units.");
    };

    this.getBaseCost = function()
    {
        return 6000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.actionList = ["ACTION_DISABLE_MINE", "ACTION_SUPPORTSINGLE_REPAIR"];
}

Constructor.prototype = UNIT;
var FW_DOZER_FUEL = new Constructor();
