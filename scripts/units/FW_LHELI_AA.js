var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_ANTIHELI");

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

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+aa";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 4000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_LHELI","FW_LHELI_RADAR","FW_LHELI_ASM"];
    this.fuelConsumption = 2;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_LHELI";
    };

    this.getMovementType = function()
    {
        return "MOVE_HELI";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Heli;
    };

    this.getName = function()
    {
        return qsTr("Interceptor Helicopter");
    };

    this.getDescription = function()
    {
        return qsTr("A light helicopter mounting anti-helicopter missiles, for hunting down heavier helicopters.");
    };

    this.getBaseCost = function()
    {
        return 6500;
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
var FW_LHELI_AA = new Constructor();
