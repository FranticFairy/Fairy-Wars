var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_HTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HMG");

        unit.setFuel(50);
        unit.setMaxFuel(50);
        unit.setBaseMovementPoints(0);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();
        var coreIDVar = variables.createVariable("coreID");
        var coreID = coreIDVar.readDataString();
        coreIDVar.writeDataString("FW_SUPER_NOROSHI");

    };

    this.loadSprites = function (unit) {
        var variables = unit.getVariables();
        var coreIDVar = variables.createVariable("coreID");
        var coreID = coreIDVar.readDataString();
        coreIDVar.writeDataString(coreID);
        var directionVar = variables.createVariable("direction");
        var direction = directionVar.readDataString();
        directionVar.writeDataString(direction);
        
        unit.loadSpriteV2("FW_SUPER_NOROSHI_CORE+mask", GameEnums.Recoloring_Matrix);
        unit.loadSpriteV2(coreID + direction, GameEnums.Recoloring_None);
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
        return "MOVE_TANK_HEAVY";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Super;
    };

    this.getName = function()
    {
        return qsTr("Superunit Segment");
    };

    this.getDescription = function()
    {
        return qsTr("A segment of an experimental superunit");
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
        return GameEnums.WeaponType_Direct;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getShowInEditor = function () {
        return false;
    }

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_SUPER_UNARMEDSEGMENT = new Constructor();
