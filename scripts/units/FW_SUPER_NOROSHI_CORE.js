var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_SHTANKGUN");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(5);
        unit.setVision(1);

        var variables = unit.getVariables();

    };

    this.loadSprites = function (unit) {
        var variables = unit.getVariables();
        var directionVar = variables.createVariable("direction");
        var direction = directionVar.readDataString();
        directionVar.writeDataString(direction);
        unit.loadSpriteV2(UNIT.getSpriteReference(unit) + "+mask" + direction, GameEnums.Recoloring_Matrix);
        unit.loadSpriteV2(UNIT.getSpriteReference(unit) + direction, GameEnums.Recoloring_None);
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIconVar.writeDataString(displayIcon);
        unit.loadSprite(displayIcon, false, false);
    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = [];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK_SUPER";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Super;
    };

    this.getName = function()
    {
        return qsTr("'NOROSHI' Landship");
    };

    this.getDescription = function()
    {
        return qsTr("The core of the Experimental Superheavy Landship 'NOROSHI'");
    };

    this.getBaseCost = function()
    {
        return 14000;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getShowInEditor = function () {
        return false;
    }

    this.actionList = ["ACTION_FIRE", "ACTION_HOELLIUM_WAIT"];
}

Constructor.prototype = UNIT;
var FW_SUPER_NOROSHI_CORE = new Constructor();
