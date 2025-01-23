var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_SAM");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(2);
        unit.setMaxRange(5);
        unit.setVision(3);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+move";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 5000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_SAM","FW_SAM_ASM","FW_SAM_UPGRD"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_SAM";
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK_HEAVY";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Heavy;
    };

    this.getName = function()
    {
        return qsTr("Tracked SAM Launcher");
    };

    this.getDescription = function()
    {
        return qsTr("A SAM launcher with tracks instead of wheels, for greater mobility.");
    };

    this.getBaseCost = function()
    {
        return 16000;
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
var FW_SAM_MOVE = new Constructor();
