var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_NAV");

        unit.setAmmo2(6);
        unit.setMaxAmmo2(6);
        unit.setWeapon2ID("FW_WEP_SAM");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(2);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = ["FW_CL_ARTY"];
    this.builtBeforeToday = false;
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
        return qsTr("Cruiser");
    };

    this.getDescription = function()
    {
        return qsTr("An anti-air naval unit. Can carry two helicopters. Has ranged anti-air capability.");
    };

    this.getBaseCost = function()
    {
        return 11000;
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
        return GameEnums.WeaponType_Indirect;
    };

    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.transportList = ["FW_LHELI" , "FW_AHELI" , "FW_THELI"];

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_CL = new Constructor();
