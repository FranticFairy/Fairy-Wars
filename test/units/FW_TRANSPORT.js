var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(70);
        unit.setMaxFuel(70);
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

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = ["FW_TRANSPORT_FUEL","FW_TRANSPORT_RADAR","FW_TRANSPORT_BOMB"];
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
        return qsTr("Transport Plane");
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

    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC" , "FW_LTANK" , "FW_MTANK" , "FW_DOZER" , "FW_TANK_DESTROYER" , "FW_ASSAULT_GUN" , "FW_ARTILLERY" , "FW_ROCKET" , "FW_ANTIAIR" , "FW_SAM" , "FW_CIWS"];

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
var FW_TRANSPORT = new Constructor();
