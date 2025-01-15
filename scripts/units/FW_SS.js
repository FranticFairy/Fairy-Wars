var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setWeapon1ID("FW_WEP_TORP");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);

    };
    
    this.getMovementType = function()
    {
        return "MOVE_SUB";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };

    this.getWeatherImmune = function(unit, map)
    {
        if(unit.getHidden()) {
            return true;
        } else {
            return false;
        }
    };

    this.getName = function()
    {
        return qsTr("Submarine");
    };

    this.getDescription = function()
    {
        return qsTr("A sneaky attacker, devastating against most naval units except destroyers. Can pass through shoals when not submerged.\r\n Can spot sea units (even submerged subs, but not seamines) up to 4 tiles away even when submerged.");
    };

    this.getBaseCost = function()
    {
        return 11000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };
    
    this.actionList = ["ACTION_FIRE", "ACTION_STEALTH", "ACTION_UNSTEALTH","ACTION_LOADOUT", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            // pay unit upkeep
            var fuelCosts = 1 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 1);
            if (unit.getHidden())
            {
                fuelCosts += 4;
                unit.setVision(1);
            } else {
                unit.setVision(2);
            }
            if (fuelCosts < 0)
            {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
            ACTION_PING.pingType(unit,4,GameEnums.UnitType_Naval,false);
            ACTION_PING.pingID(unit,4,"FW_SS",true);
        }
    };

    this.postAction = function(unit, action, map) {
        ACTION_PING.pingType(unit,4,GameEnums.UnitType_Naval,false);
        ACTION_PING.pingID(unit,4,"FW_SS",true);
    }

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
var FW_SS = new Constructor();
