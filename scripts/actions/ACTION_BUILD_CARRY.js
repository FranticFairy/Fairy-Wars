var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        if(building === null) {
            return false;
        }
        var unitLimit = map.getGameRules().getUnitLimit();
        var units = building.getConstructionList();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (unit === null || unit.getHasMoved() === true || unit.getLoadedUnitCount() >= unit.getLoadingPlace()) {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) && (building !== null) && (units.length > 0)) {
            var constructionList = building.getConstructionList();
            if ((unit.getOwner() === building.getOwner()) && (unitLimit <= 0 || unitCount < unitLimit) && ACTION_BUILD_CARRY.canBuildUnits(building, map, unit)) {
                return true;
            }
        }
        return false;
    };
    this.getActionText = function (map) {
        return qsTr("Load Unit");
    };
    this.getIcon = function (map) {
        return "load";
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
        var building = action.getTargetBuilding();
        var player = building.getOwner();
        var unit = action.getTargetUnit();
        var target = action.getTarget();
        //var unit = map.spawnUnit(target.x, target.y, unitID, player, 0, true);
        // pay for the unit
        var spawnUnit = unit.spawnUnit(unitID);
        unit.setHasMoved(true);
        spawnUnit.setHasMoved(true);
        player.addFunds(-action.getCosts());
        map.getGameRecorder().buildUnit(player.getPlayerID(), unitID, player.getPlayerID());
        player.buildedUnit(spawnUnit);
        // achievements
        if (player.getBaseGameInput().getAiType() === GameEnums.AiTypes_Human) {
            ACHIEVEMENT_BUILD_UNIT.unitProduced(unitID);
        }
    };

    this.getStepInputType = function (action, map) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.canBuildUnits = function (building, map, unit) {
        if(!building.getActionList().includes("ACTION_BUILD_UNITS")) {
            return false;
        }
        var player = building.getOwner();
        var units = building.getConstructionList();
        var availableUnits = unit.getTransportUnits()
        var unitData = [];
        for (i = 0; i < units.length; i++) {
            if(availableUnits.includes(units[i])) {
                var cost = player.getCosts(units[i], building.getPosition());
                unitData.push([cost, units[i]]);
            }
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
        var building = action.getTargetBuilding();
        var units = building.getConstructionList();
        var unit = action.getTargetUnit();
        var player = building.getOwner();
        var availableUnits = unit.getTransportUnits()
        var unitData = [];
        for (i = 0; i < units.length; i++) {
            if(availableUnits.includes(units[i])) {
                var cost = player.getCosts(units[i], building.getPosition());
                unitData.push([cost, units[i]]);
            }
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
        return qsTr("Load unit");
    };
    this.getDescription = function () {
        return qsTr("Allows you to load a unit into this unit.");
    };
}

Constructor.prototype = ACTION;
var ACTION_BUILD_CARRY = new Constructor();
