var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(7);
        unit.setMaxAmmo1(7);
        unit.setWeapon1ID("FW_WEP_MTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_MTANK_ANTIMINE"];
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
        return GameEnums.UnitType_Vehicle_Medium;
    };

    this.getName = function()
    {
        return qsTr("Medium Tank");
    };

    this.getDescription = function()
    {
        return qsTr("A standard, mainline battle tank, the backbone of a solid armoured force.");
    };

    this.getBaseCost = function()
    {
        return 9000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_MTANK = new Constructor();
