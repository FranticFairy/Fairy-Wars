var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(3);
        unit.setMaxAmmo2(3);
        unit.setWeapon2ID("");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = [];
    this.builtBeforeToday = false;
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_BOAT";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getName = function()
    {
        return qsTr("Minelayer");
    };

    this.getDescription = function()
    {
        return qsTr("An unarmed naval unit that can lay and remove seamines. Takes notably less damage upon colliding with a seamine.");
    };

    this.getBaseCost = function()
    {
        return 4000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_PLACE_WATERMINE", "ACTION_DISABLE_MINE"];
}

Constructor.prototype = UNIT;
var FW_ML = new Constructor();
