var Constructor = function()
{

    this.init = function(unit)
    {
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

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.variantList = ["FW_RECON_AT"];
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
        return qsTr("Recon Car");
    };

    this.getDescription = function()
    {
        return qsTr("Essentially a vanilla recon.");
    };

    this.getBaseCost = function()
    {
        return 4000;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_RECON = new Constructor();
