var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(2);
        unit.setMaxAmmo1(2);
        unit.setWeapon1ID("FW_WEP_CRUISEMISSILE");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(7);
        unit.setMinRange(1);
        unit.setMaxRange(3);
        unit.setVision(1);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+arty";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_BOMBER","FW_BOMBER_ASM"];
    this.fuelConsumption = 4;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_BOMBER";
    };

    this.getMovementType = function()
    {
        return "MOVE_AIR";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Plane_Large;
    };

    this.getName = function()
    {
        return qsTr("Bomber (Cruise Missiles)");
    };

    this.getDescription = function()
    {
        return qsTr("A bomber carrying cruise missiles instead of bombs, allowing them to perform a ranged atatck.");
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
        return GameEnums.WeaponType_Indirect;
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
var FW_BOMBER_ARTY = new Constructor();
