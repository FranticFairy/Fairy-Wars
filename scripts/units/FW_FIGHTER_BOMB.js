var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(3);
        unit.setMaxAmmo1(3);
        unit.setWeapon1ID("FW_WEP_MBOMB");

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
        displayIcon = "+bomb";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 0;
    this.variantList = ["FW_FIGHTER","FW_FIGHTER_FUEL","FW_FIGHTER_GUN"];
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
        return GameEnums.UnitType_Air;
    };

    this.getName = function()
    {
        return qsTr("Fighter (Bombs)");
    };

    this.getDescription = function()
    {
        return qsTr("A fighter carrying bombs instead of missiles, for when enemy airpower has been eliminated.");
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
var FW_FIGHTER_BOMB = new Constructor();
