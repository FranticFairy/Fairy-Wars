var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HMG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(7);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_IFV_AT","FW_IFV_AA","FW_IFV_ARTY","FW_IFV_ANTIMINE","FW_IFV_RADAR","FW_IFV_MOVE","FW_IFV_ANCH","FW_IFV_HMR"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_LTANK";
    };

    this.getCOSpecificUnit = function(building) {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Light;
    };

    this.getName = function()
    {
        return qsTr("IFV");
    };

    this.getDescription = function()
    {
        return qsTr("A scouting/harrassment tank. Good against unarmoured targets, but weak against armoured enemies, and isn't very well-armoured itself.");
    };

    this.getBaseCost = function()
    {
        return 7000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE", "ACTION_CAPTURE", "ACTION_MISSILE"];
}

Constructor.prototype = UNIT;
var FW_IFV = new Constructor();
