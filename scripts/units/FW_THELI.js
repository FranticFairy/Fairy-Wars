var Constructor = function () {
    this.getUnitDamageID = function(unit)
    {
        if (unit.getMovementType() === "MOVE_HELI_LANDED") {
            return "FW_TRUCK";
        } else {
        }
    };

    this.init = function (unit) {
        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);
        unit.setVisionHigh(999);
    };

    this.getMovementType = function () {
        return "MOVE_HELI";
    };

    this.getUnitType = function (unit) {
        return GameEnums.UnitType_Air;
    };

    this.getName = function () {
        return qsTr("Transport Helicopter");
    };

    this.getDescription = function () {
        return qsTr("A transport helicopter capable of carrying around infantry and field guns.");
    };

    this.getBaseCost = function () {
        return 5000;
    };

    this.canMoveAndFire = function (unit) {
        return true;
    };

    this.getLoadingPlace = function () {
        return 1;
    };
    this.transportList = ["FW_INFANTRY", "FW_HVY_INFANTRY", "FW_AST_INFANTRY", "FW_ATGUN", "FW_IGUN", "FW_HOWITZER", "FW_FLAK"];
    this.transportListLVF = ["FW_INFANTRY", "FW_HVY_INFANTRY", "FW_AST_INFANTRY", "FW_ATGUN", "FW_IGUN", "FW_HOWITZER", "FW_FLAK", "FW_MOTOR", "FW_RECON", "FW_ACAR", "FW_TRUCK", "FW_HALFTRACK", "FW_APC", "FW_IFV"];

    this.getTransportUnits = function (unit, map) {
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        if (displayIcon === "+trn") {
            return Global[unit.getUnitID()].transportListLVF;
        }
        return Global[unit.getUnitID()].transportList;
    };

    this.actionList = ["ACTION_BUILD_CARRY", "ACTION_SUPPORTALL_RATION", "ACTION_LOADOUT", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_JOIN", "ACTION_LAND", "ACTION_LIFT", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];
    this.startOfTurn = function (unit, map) {
        if (unit.getTerrain() !== null) {
            //Start of Turn Fuel Cost
            var fuelCosts = 2 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 2);
            if (fuelCosts < 0 || unit.getMovementType() === "MOVE_HELI_LANDED") {
                fuelCosts = 0;
            }
            unit.setFuel(unit.getFuel() - fuelCosts);
            var variables = unit.getVariables();
            var displayIconVar = variables.createVariable("displayIcon");
            var displayIcon = displayIconVar.readDataString();
            if (displayIcon === "+fuel") {
                ACTION_SUPPORTALL_RATION.giveRation(unit, map);
            }
        }
        UNIT.transporterRefilling(unit, map);
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

    this.getShowInEditor = function () {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_THELI = new Constructor();
