var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_ROCKETS");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(2);
        unit.setMaxRange(4);
        unit.setVision(1);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+arty";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 6000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_HOWITZER"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_HOWITZER";
    };

    this.getMovementType = function()
    {
        return "MOVE_TIRE_B";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Fieldgun;
    };

    this.getName = function()
    {
        return qsTr("Towed Rocket Launcher");
    };

    this.getDescription = function()
    {
        return qsTr("A towed artillery piece refitted to mount a rocket launcher instead, for extra firepower.");
    };

    this.getBaseCost = function()
    {
        return 7500;
    };

	this.canMoveAndFire = function()
    {
        return false;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_HOWITZER_ARTY = new Constructor();
