var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(2);
        unit.setMaxAmmo1(2);
        unit.setWeapon1ID("");

        unit.setAmmo2(2);
        unit.setMaxAmmo2(2);
        unit.setWeapon2ID("");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = ["FW_DOZER_UPGRD","FW_DOZER_FUEL"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Medium;
    };

    this.getName = function()
    {
        return qsTr("Dozer");
    };

    this.getDescription = function()
    {
        return qsTr("A utility unit, capable of building various structures and defenses, as well as laying and clearing landmines.");
    };

    this.getBaseCost = function()
    {
        return 6000;
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

    this.actionList = ["ACTION_DISABLE_MINE", "ACTION_BUILD_TEMP_AIRPORT", "ACTION_BUILD_TEMP_HARBOUR", "ACTION_BUILD_DEPOT", "ACTION_PLACE_LANDMINE", "ACTION_PLACE_PONTOON", "ACTION_PLACE_BRIDGE", "ACTION_BUILD_ROAD", "ACTION_BUILD_TRENCH", "ACTION_CLEAR_FOREST"];
}

Constructor.prototype = UNIT;
var FW_DOZER = new Constructor();
