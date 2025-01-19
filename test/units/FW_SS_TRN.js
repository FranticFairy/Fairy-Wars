var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(3);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+trn";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 7000;
    this.variantList = ["FW_SS","FW_SS_ARTY","FW_SS_ASM","FW_SS_RADAR","FW_SS_ANTIRADAR","FW_SS_AA"];
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_SHIP";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getName = function()
    {
        return qsTr("Transport Submarine");
    };

    this.getDescription = function()
    {
        return qsTr("A sneaky attacker, devastating against most naval units except destroyers. Can pass through shoals when not submerged.");
    };

    this.getBaseCost = function()
    {
        return 11000;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK", "FW_MOTOR", "FW_RECON", "FW_TRUCK"];

    this.actionList = ["ACTION_FIRE", "ACTION_UNSTEALTH", "ACTION_STEALTH"];
}

Constructor.prototype = UNIT;
var FW_SS_TRN = new Constructor();
