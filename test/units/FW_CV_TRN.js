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
        displayIcon = "+trn";
        displayIconVar.writeDataString(displayIcon);

    };

    this.variant = true;
    this.upgradeCost = 6000;
    this.variantList = ["FW_CV","FW_CV_UPGRD"];
    this.fuelConsumption = 1;

    this.getShowInEditor = function () {
        return true;
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
        return qsTr("Fleet Carrier");
    };

    this.getDescription = function()
    {
        return qsTr("A floating airport, capable of repairing, refuelling and carrying Fighter, Attacker and Seaplane units. Has anti-air, but no other defenses.");
    };

    this.getBaseCost = function()
    {
        return 18000;
    };

	this.canMoveAndFire = function()
    {
        return True;
    };

    this.getTypeOfWeapon1 = function(unit)
    {
        return GameEnums.WeaponType_Indirect;
    };

    this.getLoadingPlace = function()
    {
        return 4;
    };
    this.transportList = ["FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE" , "FW_LHELI" , "FW_AHELI" , "FW_THELI"];

    this.actionList = ["ACTION_FIRE"];
}

Constructor.prototype = UNIT;
var FW_CV_TRN = new Constructor();
