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
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+fuel";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 0;
    this.variantList = ["FW_TRANSPORT","FW_TRANSPORT_RADAR","FW_TRANSPORT_BOMB"];
    this.fuelConsumption = 4;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_AIR";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };

    this.getName = function()
    {
        return qsTr("Aerial Refueller");
    };

    this.getDescription = function()
    {
        return qsTr("An unarmed transport plane. Can carry land units, but can only load and unload on (Temp) Airports. Infantry units can be dropped anywhere.");
    };

    this.getBaseCost = function()
    {
        return 16000;
    };

	this.canMoveAndFire = function()
    {
        return True;
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
var FW_TRANSPORT_FUEL = new Constructor();
