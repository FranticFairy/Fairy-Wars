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
        displayIcon = "+fuel";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 2000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_THELI","FW_THELI_TRN"];
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
        return qsTr("Supply Helicopter");
    };

    this.getDescription = function()
    {
        return qsTr("A transport helicopter carrying supplies for ground units rather than carrying ground units directly.");
    };

    this.getBaseCost = function()
    {
        return 5000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.actionList = ["ACTION_SUPPORTALL_RATION"];
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
var FW_THELI_FUEL = new Constructor();
