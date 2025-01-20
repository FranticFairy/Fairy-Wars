var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_AA");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setVision(2);

        var variables = unit.getVariables();

        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = "+upgrd";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 6000;
    this.variantList = ["FW_CV","FW_CV_TRN"];
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
    };

    this.getUnitDamageID = function (unit) {
        return "FW_CV";
    };

    this.getMovementType = function()
    {
        return "MOVE_SHIP";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getName = function()
    {
        return qsTr("Large Carrier");
    };

    this.getDescription = function()
    {
        return qsTr("A carrier upgraded to have a larger flight deck, allowing it to carry and launch bombers and transport planes.");
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
        return GameEnums.WeaponType_Indirect;
    };

    this.getLoadingPlace = function()
    {
        return 3;
    };
    this.transportList = ["FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE" , "FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_BOMBER", "FW_TRANSPORT"];

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_CV_UPGRD = new Constructor();
