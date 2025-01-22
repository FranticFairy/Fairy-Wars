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

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = [];
    this.builtBeforeToday = false;
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_FAERIE_INFANTRY";
    };

    this.getCOSpecificUnit = function(building) {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_AIR";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Infantry;
    };

    this.getName = function()
    {
        return qsTr("Faerie Dreamweaver");
    };

    this.getDescription = function()
    {
        return qsTr("Teina's unique unit. A flying infantry unit, capable of capturing and performing the functions of a Dozer or Minelayer.");
    };

    this.getBaseCost = function()
    {
        return 7000;
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

    this.actionList = ["ACTION_CAPTURE", "ACTION_DISABLE_MINE", "ACTION_BUILD_TEMP_AIRPORT", "ACTION_BUILD_TEMP_HARBOUR", "ACTION_BUILD_DEPOT", "ACTION_PLACE_LANDMINE", "ACTION_PLACE_SEAMINE", "ACTION_PLACE_PONTOON", "ACTION_BUILD_ROAD", "ACTION_BUILD_TRENCH", "ACTION_CLEAR_FOREST"];
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
var FW_FAERIE_DREAMWEAVER = new Constructor();
