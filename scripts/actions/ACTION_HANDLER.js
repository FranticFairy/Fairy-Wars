var Constructor = function () {

    this.grabVariants = function(unitID) {
        var output = [];
        output.push(unitID);
        var variants = Global[unitID].variantList;

        for (var i = 0; i < variants.length; i++) {
            if(!output.includes(variants[i])) {
                output.push(variants[i]);
            }
        }
        return output;
    }

    this.replaceVanillaUnits = function (unit, map) {
        if (map.getCurrentDay() < 2) {
            var playerCounter = map.getPlayerCount();
            for (var i2 = 0; i2 < playerCounter; i2++) {
                var otherPlayer = map.getPlayer(i2);

                var units = otherPlayer.getUnits();
                units.randomize();
                for (i = 0; i < units.size(); i++) {
                    var unit = units.at(i);
                    if (unit !== null) {
                        if (!unit.getUnitID().includes("FW_")) {
                            ACTION_REPLACEDEFAULTUNIT.replace(unit);
                            unit.refill(false);
                        }
                    }

                }
                units.remove();
            }
        }
    }

    this.handleStartOfTurn = function (unit, map) {
        if(Global[unit.getUnitID()].builtBeforeToday === false) {
            Global[unit.getUnitID()].builtBeforeToday = true;
        }
        if (typeof map !== 'undefined') {
            if (map.getCurrentDay() < 2) {
                ACTION_HANDLER.replaceVanillaUnits(unit, map);
            }


            if (unit.getTerrain() !== null) {
                //Start of Turn Fuel Cost
                var fuelCosts = Global[unit.getUnitID()].fuelConsumption + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 2);
                if (fuelCosts < 0 || unit.getMovementType() === "MOVE_HELI_LANDED") {
                    fuelCosts = 0;
                }
                unit.setFuel(unit.getFuel() - fuelCosts);

                if (Global[unit.getUnitID()].actionList.includes("ACTION_SUPPORTALL_RATION")) {
                    ACTION_SUPPORTALL_RATION.giveRation(unit, map);
                }

                if (unit.getLoadedUnitCount() > 0) {
                    UNIT.transporterRefilling(unit, map);
                }

                ACTION_HANDLER.pingCheck(unit, map)

            }

        }
        if (typeof map !== 'undefined') {
            var tile =  map.getTerrain(unit.getX(), unit.getY());
            if(tile != null && tile.getTerrainID() === "TELEPORTTILE") {
                unit.killUnit();
            }
        }

    }

    this.handleEndOfTurn = function (unit, map) {
        if (unit.getTerrain() !== null) {
            ACTION_HANDLER.pingCheck(unit, map)
        }
        if (typeof map !== 'undefined') {
            var tile =  map.getTerrain(unit.getX(), unit.getY());
            if(tile != null && tile.getTerrainID() === "TELEPORTTILE") {
                unit.killUnit();
            }
        }
    }

    this.handlePostAction = function (unit, action, map) {
        if (unit.getTerrain() !== null) {
            ACTION_HANDLER.pingCheck(unit, map)
        }
    }

    this.handlePostBattleActions = function (unit, damage, otherUnit, gotAttacked, weapon, action) {
        if (unit.getTerrain() !== null) {
            ACTION_HANDLER.pingCheck(unit, map)
        }
    }

    this.pingCheck = function (unit, map) {
        switch (unit.getUnitID()) {
            case "FW_ATTACKER_ANTIRADAR":
            case "FW_SEAPLANE_ANTIRADAR":
                ACTION_PING.pingID(unit, 4, "FW_SAM,FW_SAM_MOVE,FW_FLAK_AA", false,map);
                break;
            case "FW_DD":
            case "FW_DD_ASM":
            case "FW_BOMBER_ASM":
                ACTION_PING.pingID(unit, 3, "FW_SS,FW_SS_AA,FW_SS_ARTY,FW_SS_ASM,FW_SS_TRN,FW_SS_RADAR", true,map);
                break;
            case "FW_DD_MINE":
            case "FW_ML":
                ACTION_PING.pingID(unit, 3, "FW_SEAMINE", true,map);
                break;
            case "FW_SAM":
            case "FW_SAM_MOVE":
            case "FW_SAM_UPGRD":
            case "FW_TRANSPORT_RADAR":
                ACTION_PING.pingType(unit, 4, GameEnums.UnitType_Air, false,map);
                break;
            case "FW_SS":
            case "FW_SS_AA":
            case "FW_SS_ANTIRADAR":
            case "FW_SS_ARTY":
            case "FW_SS_ASM":
            case "FW_SS_TRN":
                ACTION_PING.pingType(unit, 3, GameEnums.UnitType_Naval, false,map);
                ACTION_PING.pingID(unit, 3, "FW_SS,FW_SS_AA,FW_SS_ARTY,FW_SS_ASM,FW_SS_TRN,FW_SS_RADAR", true,map);
            break;
            case "FW_SS_RADAR":
                ACTION_PING.pingType(unit, 5, GameEnums.UnitType_Naval, true,map);
            break;
        }
    }

    this.getActionText = function (map) {
        return qsTr("Action Handler");
    };
    this.getName = function () {
        return qsTr("Action Handler");
    };
    this.getDescription = function () {
        return qsTr("Handles various actions for units; Start of turn, Pre-Action, Post-Action, etc..");
    };
}

Constructor.prototype = ACTION;
var ACTION_HANDLER = new Constructor();
