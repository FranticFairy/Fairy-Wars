var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+hmr";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 2000;
    this.builtBeforeToday = false;
    this.variantList = ["FW_HALFTRACK","FW_HALFTRACK_AT","FW_HALFTRACK_ARTY","FW_HALFTRACK_AA"];
    this.fuelConsumption = 0;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_HALFTRACK";
    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Vehicle_Light;
    };

    this.getName = function()
    {
        return qsTr("Engineering Halftrack");
    };

    this.getDescription = function()
    {
        return qsTr("A halftrack upgraded to carry bridge-laying equipment, to deploy pontoon bridges.");
    };

    this.getBaseCost = function()
    {
        return 4500;
    };

	this.canMoveAndFire = function()
    {
        return true;
    };

    this.getTypeOfWeapon2 = function(unit)
    {
        return GameEnums.WeaponType_Direct;
    };

    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_FAERIE_INFANTRY" , "FW_FAERIE_DREAMWEAVER" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK"];

    this.actionList = ["ACTION_FIRE", "ACTION_BUILD_CARRY", "ACTION_PLACE_PONTOON"];
}

Constructor.prototype = UNIT;
var FW_HALFTRACK_HMR = new Constructor();
