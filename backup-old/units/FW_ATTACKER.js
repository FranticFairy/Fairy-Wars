var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setWeapon1ID("FW_WEP_MBOMB");

        unit.setAmmo2(2);
        unit.setMaxAmmo2(2);
        unit.setWeapon2ID("FW_WEP_LAAM");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(7);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);
        unit.setVisionHigh(999);

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if(displayIcon === "") {
            displayIcon = "+bomb";
        }
        displayIconVar.writeDataString(displayIcon);

    };
    
    this.actionList = ["ACTION_FIRE", "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

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
        return qsTr("Attacker");
    };

    this.getDescription = function()
    {
        return qsTr("A mixed-use air unit, can attack both air and ground targets, but isn't as good at either as a dedicated Fighter or Bomber");
    };

    this.getBaseCost = function()
    {
        return 18000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            //Start of Turn Fuel Cost
            var fuelCosts = 4 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 4);
            if (fuelCosts < 0)
            {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
            var variables = unit.getVariables();
            var displayIconVar = variables.createVariable("displayIcon");
            var displayIcon = displayIconVar.readDataString();
            if(displayIcon === "+antiradar") {
                ACTION_PING.pingID(unit,4,"UNIT_SAM",false);
            }
        }
    };

    this.postAction = function(unit, action, map) {
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if(displayIcon === "+antiradar") {
            ACTION_PING.pingID(unit,4,"UNIT_SAM",false);
        }
    }

    this.createExplosionAnimation = function(x, y, unit, map)
    {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + air", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + air.wav");
        return animation;
    };

    this.useTerrainDefense = function()
    {
        return false;
    };

    this.useTerrainHide = function()
    {
        return false;
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
var FW_ATTACKER = new Constructor();
