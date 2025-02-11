var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_MULTIMISSILE");

        unit.setFuel(40);
        unit.setMaxFuel(40);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+at";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_SEAPLANE_ANTIRADAR","FW_SEAPLANE_ASM","FW_SEAPLANE_AA"];
    this.fuelConsumption = 4;

    this.getShowInEditor = function () {
        return true;
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
        return qsTr("Seaplane");
    };

    this.getDescription = function()
    {
        return qsTr("A specialized air unit meant to be launched from carriers. Low fuel, but packs a good punch against sea targets, and is decent against air and land units.");
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
var FW_SEAPLANE = new Constructor();
