var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(8);
        unit.setMaxAmmo1(8);
        unit.setWeapon1ID("FW_WEP_AAM");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(8);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+gun";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_FIGHTER","FW_FIGHTER_FUEL","FW_FIGHTER_BOMB"];
    this.fuelConsumption = 4;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_FIGHTER";
    };

    this.getMovementType = function()
    {
        return "MOVE_AIR";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Plane;
    };

    this.getName = function()
    {
        return qsTr("Fighter (Extra Ammo)");
    };

    this.getDescription = function()
    {
        return qsTr("A fighter carrying extra missiles, to keep fighting for longer.");
    };

    this.getBaseCost = function()
    {
        return 18000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon1 = function(unit)
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
var FW_FIGHTER_GUN = new Constructor();
