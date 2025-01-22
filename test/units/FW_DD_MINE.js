var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_NAV");

        unit.setAmmo2(2);
        unit.setMaxAmmo2(2);
        unit.setWeapon2ID("");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(3);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+mine";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 3000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_DD","FW_DD_AA","FW_DD_ASM"];
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_DD";
    };

    this.getMovementType = function()
    {
        return "MOVE_SHIP";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval_Medium;
    };

    this.getName = function()
    {
        return qsTr("Destroyer Minelayer");
    };

    this.getDescription = function()
    {
        return qsTr("A destroyer refitted to drop mines instead of depth charges, also carries sweeping equipment to clear out seamines.");
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

    this.actionList = ["ACTION_FIRE", "ACTION_DISABLE_MINE", "ACTION_PLACE_SEAMINE"];
}

Constructor.prototype = UNIT;
var FW_DD_MINE = new Constructor();
