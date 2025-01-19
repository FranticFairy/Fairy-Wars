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
        return qsTr("Carrier");
    };

    this.getDescription = function()
    {
        return qsTr("A floating airport, capable of repairing, refuelling and carrying Fighter, Attacker and Seaplane units. Has anti-air, but no other defenses.");
    };

    this.getBaseCost = function()
    {
        return 18000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.getLoadingPlace = function()
    {
        return 3;
    };
    this.transportList = ["FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE"];
    this.transportListLVF = ["FW_LHELI" , "FW_AHELI" , "FW_THELI", "FW_PROP" , "FW_FIGHTER" , "FW_ATTACKER" , "FW_SEAPLANE", "FW_BOMBER", "FW_TRANSPORT"];

    this.getTransportUnits = function(unit, map)
    {
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if(displayIcon === "+trn") {
            return Global[unit.getUnitID()].transportListLVF;
        }
        return Global[unit.getUnitID()].transportList;
    };

    this.actionList = ["ACTION_FIRE","ACTION_LOAD","ACTION_UNLOAD","ACTION_LOADOUT", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            //Start of Turn Fuel Cost
            var fuelCosts = 1 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 1);
            if (fuelCosts < 0)
            {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
        }
        UNIT.transporterRefilling(unit, map);
    };

    this.createExplosionAnimation = function(x, y, unit, map)
    {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + water", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + water.wav");
        return animation;
    };

	this.getTerrainAnimationBase = function(unit, terrain, defender, map)
    {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "base_" + weatherModifier + "air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain, defender, map)
    {
        return "";
    };

    this.getTerrainAnimationBackground = function(unit, terrain, defender, map)
    {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "back_" + weatherModifier +"sea";
    };

    this.getTerrainAnimationMoveSpeed = function()
    {
        return 1;
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_CV = new Constructor();
