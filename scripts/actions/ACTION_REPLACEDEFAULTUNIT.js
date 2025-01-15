var Constructor = function () {
    this.replace = function (unit) {
        var unitID = unit.getUnitID();
        switch (unitID) {
            case "AIRCRAFTCARRIER":
                unit.transformUnit("FW_CV");
                break;
            case "ANTITANKCANNON":
                unit.transformUnit("FW_ATGUN");
                break;
            case "APC":
                unit.transformUnit("FW_APC");
                break;
            case "ARTILLERY":
                unit.transformUnit("FW_ARTILLERY");
                break;
            case "ARTILLERYCRAFT":
                unit.transformUnit("FW_HOWITZER");
                break;
            case "BATTLESHIP":
                unit.transformUnit("FW_BB");
                break;
            case "BLACK_BOAT":
                unit.transformUnit("FW_AX");
                break;
            case "BLACK_BOMB":
                unit.transformUnit("FW_ATTACKER");
                break;
            case "BOMBER":
                unit.transformUnit("FW_BOMBER");
                break;
            case "CANNONBOAT":
                unit.transformUnit("FW_FF");
                break;
            case "CRUISER":
                unit.transformUnit("FW_CL");
                break;
            case "DESTROYER":
                unit.transformUnit("FW_ML");
                break;
            case "DUSTER":
                unit.transformUnit("FW_PROP");
                break;
            case "FIGHTER":
                unit.transformUnit("FW_FIGHTER");
                break;
            case "FLAK":
                unit.transformUnit("FW_ANTIAIR");
                break;
            case "FLARE":
                unit.transformUnit("FW_ACAR");
                break;
            case "HEAVY_HOVERCRAFT":
                unit.transformUnit("FW_MTANK");
                break;
            case "HEAVY_TANK":
                unit.transformUnit("FW_HTANK");
                break;
            case "HOELLIUM":
                unit.transformUnit("FW_SHTANK");
                break;
            case "HOVERCRAFT":
                unit.transformUnit("FW_LTANK");
                break;
            case "HOVERFLAK":
                unit.transformUnit("FW_ANTIAIR");
                break;
            case "INFANTRY":
                unit.transformUnit("FW_INFANTRY");
                break;
            case "K_HELI":
                unit.transformUnit("FW_AHELI");
                break;
            case "LANDER":
                unit.transformUnit("FW_TR");
                break;
            case "LIGHT_TANK":
                unit.transformUnit("FW_MTANK");
                break;
            case "MECH":
                unit.transformUnit("FW_HVY_INFANTRY");
                break;
            case "MEGATANK":
                unit.transformUnit("FW_SHTANK");
                break;
            case "MISSILE":
                unit.transformUnit("FW_SAM");
                break;
            case "MOTORBIKE":
                unit.transformUnit("FW_MOTOR");
                break;
            case "NEOTANK":
                unit.transformUnit("FW_HTANK");
                break;
            case "PIPERUNNER":
                unit.transformUnit("FW_HVY_ARTILLERY");
                break;
            case "RECON":
                unit.transformUnit("FW_RECON");
                break;
            case "ROCKETTHROWER":
                unit.transformUnit("FW_ROCKET");
                break;
            case "SNIPER":
                unit.transformUnit("FW_AST_INFANTRY");
                break;
            case "STEALTHBOMBER":
                unit.transformUnit("FW_ATTACKER");
                break;
            case "SUBMARINE":
                unit.transformUnit("FW_SS");
                break;
            case "TRANSPORTPLANE":
                unit.transformUnit("FW_TRANSPORT");
                break;
            case "T_HELI":
                unit.transformUnit("FW_THELI");
                break;
            case "WATERMINE":
                unit.transformUnit("FW_SEAMINE");
                break;
            case "WATERPLANE":
                unit.transformUnit("FW_SEAPLANE");
                break;
            case "ZCOUNIT_AT_CYCLE":
                unit.transformUnit("FW_MOTOR");
                break;
            case "ZCOUNIT_AUTO_TANK":
                unit.transformUnit("FW_LTANK");
                break;
            case "ZCOUNIT_CHAPERON":
                unit.transformUnit("FW_CIWS");
                break;
            case "ZCOUNIT_COMMANDO":
                unit.transformUnit("FW_AST_INFANTRY");
                break;
            case "ZCOUNIT_CRYSTAL_TANK":
                unit.transformUnit("FW_HTANK");
                break;
            case "ZCOUNIT_HOT_TANK":
                unit.transformUnit("FW_LTANK");
                break;
            case "ZCOUNIT_INTEL_TRUCK":
                unit.transformUnit("FW_ACAR");
                break;
            case "ZCOUNIT_IRON_SHIELD_GENERATOR":
                unit.transformUnit("FW_APC");
                break;
            case "ZCOUNIT_KIROV":
                unit.transformUnit("FW_BOMBER");
                break;
            case "ZCOUNIT_LOGIC_TRUCK":
                unit.transformUnit("FW_TRUCK");
                break;
            case "ZCOUNIT_MISSILE_SUB":
                unit.transformUnit("FW_CA");
                break;
            case "ZCOUNIT_NEOSPIDER_TANK":
                unit.transformUnit("FW_HTANK");
                break;
            case "ZCOUNIT_PARTISAN":
                unit.transformUnit("FW_AST_INFANTRY");
                break;
            case "ZCOUNIT_REPAIR_TANK":
                unit.transformUnit("FW_DOZER");
                break;
            case "ZCOUNIT_ROYAL_GUARD":
                unit.transformUnit("FW_HTANK");
                break;
            case "ZCOUNIT_SIEGE_CANNON":
                unit.transformUnit("FW_HVY_ARTILLERY");
                break;
            case "ZCOUNIT_SMUGGLER":
                unit.transformUnit("FW_RECON");
                break;
            case "ZCOUNIT_TANK_HUNTER":
                unit.transformUnit("FW_TANK_DESTROYER");
                break;
        }

    }
    this.getActionText = function(map)
    {
        return qsTr("Replace Units");
    };
    this.getName = function()
    {
        return qsTr("Replace Units");
    };
    this.getDescription = function()
    {
        return qsTr("Handler for replacing vanilla units.");
    };
}

Constructor.prototype = ACTION;
var ACTION_REPLACEDEFAULTUNIT = new Constructor();
