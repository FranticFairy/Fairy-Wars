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
        return qsTr("Command Vehicle");
    };

    this.getDescription = function()
    {
        return qsTr("An armoured command unit that contains vital command staff. Used for relocating one's HQ. If the last one is destroyed, the game is lost.");
    };

    this.getBaseCost = function()
    {
        return 10000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.actionList = ["ACTION_UNPACK_HQ"];
}

Constructor.prototype = UNIT;
var FW_COMV = new Constructor();
