var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_MTANKGUN");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(1);

        var variables = unit.getVariables();

    };

    this.variant = false;
    this.upgradeCost = 0;
    this.builtBeforeToday = false;
    this.variantList = [];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getFirstStrike = function(unit, uX, uY, attacker, isDefender, map, aX, aY) {
        if(isDefender) {
            return true;
        }
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
        return qsTr("Anti-Tank Gun");
    };

    this.getDescription = function()
    {
        return qsTr("A field gun dedicated to killing tanks. Fires first when attacked, but is vulnerable to infantry attack.");
    };

    this.getBaseCost = function()
    {
        return 7000;
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
var FW_ATGUN = new Constructor();
