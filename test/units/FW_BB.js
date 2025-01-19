var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setWeapon1ID("FW_WEP_BBGUN");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(2);
        unit.setMaxRange(5);
        unit.setVision(1);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = [];
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
        return qsTr("Battleship");
    };

    this.getDescription = function()
    {
        return qsTr("A long-range artillery ship, providing devastating fire support against land and sea targets, but vulnerable when attacked.");
    };

    this.getBaseCost = function()
    {
        return 22000;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_BB = new Constructor();
