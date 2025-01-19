var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HELI_MG");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(3);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = ["FW_LHELI_AA","FW_LHELI_RADAR","FW_LHELI_ASM"];
    this.fuelConsumption = 2;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_HELI";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };

    this.getName = function()
    {
        return qsTr("Light Helicopter");
    };

    this.getDescription = function()
    {
        return qsTr("A fast but fragile scouting helicopter. Good vision and mobility, but limited firepower. Good for harassing captures.");
    };

    this.getBaseCost = function()
    {
        return 6500;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE"];
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
var FW_LHELI = new Constructor();
