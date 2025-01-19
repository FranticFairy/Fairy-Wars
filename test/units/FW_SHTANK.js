var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_SHTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HMG");

        unit.setFuel(40);
        unit.setMaxFuel(40);
        unit.setBaseMovementPoints(4);
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
        return "MOVE_TANK_HEAVY";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Superheavy Tank");
    };

    this.getDescription = function()
    {
        return qsTr("Absurdly powerful, but also extremely costly and slow. Best used for defense, but devastating in combat.");
    };

    this.getBaseCost = function()
    {
        return 22000;
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
var FW_SHTANK = new Constructor();
