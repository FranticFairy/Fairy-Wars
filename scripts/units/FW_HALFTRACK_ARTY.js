var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_MORTAR");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(1);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+arty";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 3000;
    this.variantList = ["FW_HALFTRACK","FW_HALFTRACK_AT","FW_HALFTRACK_AA","FW_HALFTRACK_HMR"];
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
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("Mortar Halftrack");
    };

    this.getDescription = function()
    {
        return qsTr("A tougher Truck, can take more of a punch and has a defensive machine gun.");
    };

    this.getBaseCost = function()
    {
        return 4500;
    };

	this.canMoveAndFire = function()
    {
        return false;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
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

    this.actionList = ["ACTION_FIRE", "ACTION_BUILD_CARRY"];
}

Constructor.prototype = UNIT;
var FW_HALFTRACK_ARTY = new Constructor();
