var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();

        if (unit != null) {
            if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y)) {

                var units = Global[unit.getUnitID()].variantList;

                if (units.length > 0 && unit.getHasMoved() === false && unit.getLoadedUnitCount() === 0) {
                    if (ACTION_LOADOUT.canBuildUnits(unit, map, units)) {
                        if ((building !== null) && (unit.getOwner() === building.getOwner())) {
                            var constructionList = building.getConstructionList();
                            var unitID = unit.getUnitID();
                            if (Global[unitID].variant) {
                                unitID = Global[unitID].variantList[0];
                            }
                            if (((constructionList.indexOf(unitID) >= 0) || BUILDING.isHq(building))) {
                                return true
                            }
                        } else {
                            var x = actionTargetField.x + 1;
                            var y = actionTargetField.y;
                            if (ACTION_LOADOUT.checkAdjacentUnits(unit, x, y, map)) {
                                return true;
                            }
                            x = actionTargetField.x - 1;
                            if (ACTION_LOADOUT.checkAdjacentUnits(unit, x, y, map)) {
                                return true;
                            }
                            x = actionTargetField.x;
                            y = actionTargetField.y + 1;
                            if (ACTION_LOADOUT.checkAdjacentUnits(unit, x, y, map)) {
                                return true;
                            }
                            y = actionTargetField.y - 1;
                            if (ACTION_LOADOUT.checkAdjacentUnits(unit, x, y, map)) {
                                return true;
                            }
                        }

                    }
                }
            }
        }
        return false;
    };

    this.checkAdjacentUnits = function (unit, x, y, map) {
        if (unit.getUnitType() === GameEnums.UnitType_Ground || unit.getUnitType() === GameEnums.UnitType_Infantry || unit.getMovementType() === "MOVE_HELI_LANDED") {
            if (map.onMap(x, y)) {
                var target = map.getTerrain(x, y).getUnit();
                if (target !== null) {
                    if (target.getOwner() === unit.getOwner() && target !== unit) {
                        if (target.getUnitID() === "FW_DOZER_UPGRD") {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }

    this.getActionText = function (map) {
        return qsTr("Modify unit");
    };
    this.getIcon = function (map) {
        return "build";
    };
    this.isFinalStep = function (action, map) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };


    this.perform = function (action, map) {
        action.startReading();
        var unitID = action.readDataString();
        var unit = action.getTargetUnit();
        var player = unit.getOwner();
        var target = action.getTarget();
        unit.transformUnit(unitID);
        // pay for the unit
        player.addFunds(-action.getCosts());
        unit.setHasMoved(true);
    };

    this.getStepInputType = function (action, map) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.canBuildUnits = function (unit, map, units) {
        var player = unit.getOwner();
        var unitData = [];
        for (i = 0; i < units.length; i++) {
            var forUnit = units[i];
            var cost = Global[forUnit].upgradeCost;

            unitData.push([cost, units[i]]);
        }
        var funds = player.getFunds();
        for (i = 0; i < unitData.length; i++) {
            if (unitData[i][0] <= funds) {
                return true;
            }
        }
        return false;
    };

    this.getStepData = function (action, data, map) {
        var unit = action.getTargetUnit();
        var units = Global[unit.getUnitID()].variantList;
        var player = unit.getOwner();
        var unitData = [];
        for (i = 0; i < units.length; i++) {
            var forUnit = units[i];
            var cost = Global[forUnit].upgradeCost;

            unitData.push([cost, units[i]]);
        }
        if (map !== null) {
            // only sort for humans player to maintain ai speed
            if (player.getBaseGameInput().getAiType() === GameEnums.AiTypes_Human) {
                unitData = Global.sortDataArray(unitData);
            }
        }
        var funds = player.getFunds();
        for (i = 0; i < unitData.length; i++) {
            var name = Global[unitData[i][1]].getName();
            var enabled = false;
            if (unitData[i][0] <= funds) {
                enabled = true;
            }
            data.addData(name + " " + unitData[i][0].toString(), unitData[i][1], unitData[i][1], unitData[i][0], enabled);
        }
    };

    this.getName = function () {
        return qsTr("Modify unit");
    };
    this.getDescription = function () {
        return qsTr("Allows you to upgrade a unit, or change it's loadout.");
    };
}

Constructor.prototype = ACTION;
var ACTION_LOADOUT = new Constructor();
