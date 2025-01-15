var Constructor = function()
{
    this.getUnitDamageID = function(unit)
    {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            return "FW_TRUCK";
        } else {
        }
    };

    this.init = function(unit)
    {
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setWeapon1ID("FW_WEP_ATGM");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HELI_HMG");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);
        unit.setVisionHigh(999);

    };
    
    this.actionList = ["ACTION_FIRE","ACTION_LOADOUT","ACTION_LAND", "ACTION_LIFT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

    this.getMovementType = function()
    {
        return "MOVE_HELI";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };

    this.getName = function()
    {
        return qsTr("Attack Helicopter");
    };

    this.getDescription = function()
    {
        return qsTr("A heavy attack helicopter, armed with a more powerful gun and rockets to attack ground forces and other helicopters.");
    };

    this.getBaseCost = function()
    {
        return 9500;
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
            var fuelCosts = 2 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 2);
            if (fuelCosts < 0 || unit.getMovementType() === "MOVE_HELI_LANDED")
            {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
        }
    };

    this.createExplosionAnimation = function (x, y, unit, map) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            var animation = GameAnimationFactory.createAnimation(map, x, y);
            animation.addSprite("explosion+land", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
            animation.setSound("explosion+land.wav");
            return animation;
        } else {
            var animation = GameAnimationFactory.createAnimation(map, x, y);
            animation.addSprite("explosion + air", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
            animation.setSound("explosion + copter.wav");
            return animation;
        }
    };

    this.useTerrainDefense = function (unit) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            return true;
        } else {
            return false;
        }
    };

    this.useTerrainHide = function (unit) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            return true;
        } else {
            return false;
        }
    };

    this.getTerrainAnimationBase = function (unit, terrain, defender, map) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            if (Global[terrain.getID()].getTerrainAnimationBase !== null) {
                return Global[terrain.getID()].getTerrainAnimationBase(unit, terrain, defender, map);

            }
            else {
                return "";
            }
        } else {
            var weatherModifier = TERRAIN.getWeatherModifier(map);
            return "base_" + weatherModifier + "air";
        }
    };

    this.getTerrainAnimationForeground = function (unit, terrain, defender, map) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            if (Global[terrain.getID()].getTerrainAnimationForeground !== null) {
                return Global[terrain.getID()].getTerrainAnimationForeground(unit, terrain, defender, map);
            }
            else {
                return "";
            }
        } else {
            return "";
        }
    };

    this.getTerrainAnimationBackground = function (unit, terrain, defender, map) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            if (Global[terrain.getID()].getTerrainAnimationBackground !== null) {
                return Global[terrain.getID()].getTerrainAnimationBackground(unit, terrain, defender, map);
            }
            else {
                return "";
            }
        } else {
            return "";
        }
    };

    this.getTerrainAnimationMoveSpeed = function (unit) {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            return 0;
        } else {
            return 1;
        }
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_AHELI = new Constructor();
