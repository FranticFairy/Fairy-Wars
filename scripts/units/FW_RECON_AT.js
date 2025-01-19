var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_LTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_LMG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(8);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(5);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+at";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 3000;
    this.variantList = ["FW_RECON"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getMovementType = function()
    {
        return "MOVE_TIRE_A";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Combat Car");
    };

    this.getDescription = function()
    {
        return qsTr("A recon car mounting a recoilless rifle, providing a good anti-vehicle punch.");
    };

    this.getBaseCost = function()
    {
        return 4000;
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

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_RECON_AT = new Constructor();
