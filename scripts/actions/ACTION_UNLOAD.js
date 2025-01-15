ACTION_UNLOAD.isUnloadTerrain = function (unit, transportTerrain, map) {
    var unitID = unit.getUnitID();
    var terrainId = transportTerrain.getID();
    var building = transportTerrain.getBuilding();
    if (unitID === "FW_TR") {
        if ((transportTerrain !== null &&
            (terrainId === "BRIDGE" ||
                terrainId === "BRIDGE1" ||
                terrainId === "BRIDGE2"))) {
            return false;
        }
    } else if (unitID === "FW_TRANSPORT") {
        if (building != null) {
            if (building.getBuildingID() === "AIRPORT" || building.getBuildingID() === "TEMPORARY_AIRPORT") {
                return true;
            }
        } else {
            var size = unit.getLoadedUnitCount();
            var carryingInfantry = false;
            for (var i = 0; i < size; i++) {
                var transportUnit = unit.getLoadedUnit(i);
                if (transportUnit.getMovementType() === "MOVE_FEET" && transportUnit.getUnitType() === GameEnums.UnitType_Infantry) {
                    carryingInfantry = true;
                }
            }
            return carryingInfantry;
        }
    }
    return true;
};

ACTION_UNLOAD.getUnloadFields = function (action, transportUnitIdx, map) {
        var targetField = action.getActionTarget();
        var targetFields = [Qt.point(targetField.x + 1, targetField.y),
        Qt.point(targetField.x - 1, targetField.y),
        Qt.point(targetField.x, targetField.y - 1),
        Qt.point(targetField.x, targetField.y + 1)];
        var unit = action.getTargetUnit();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y);
        var building = targetTerrain.getBuilding();
        var transportUnit = unit.getLoadedUnit(transportUnitIdx);
        var ret = [];
        var canDo = false;
        if (unit.getUnitID() != "FW_TRANSPORT") {
            canDo = true;
        } else {
            if(building === null) {
                if(transportUnit.getMovementType() === "MOVE_FEET" && transportUnit.getUnitType() === GameEnums.UnitType_Infantry) {
                    canDo = true;
                }
            } else {
                if(building.getBuildingID() === "AIRPORT" || building.getBuildingID() === "TEMPORARY_AIRPORT") {
                    canDo = true;
                } else if(transportUnit.getMovementType() === "MOVE_FEET" && transportUnit.getUnitType() === GameEnums.UnitType_Infantry) {
                    canDo = true;
                }
            }
        }
        if (canDo) {
            // can both units move over the current terrain?
            var moveType = Global[transportUnit.getMovementType()];
            if (ACTION_UNLOAD.isUnloadTerrain(unit, targetTerrain) &&
                (moveType.getMovementpoints(targetTerrain, transportUnit, targetTerrain, false, map) > 0)) {
                // check all neighbour terrains
                for (var i = 0; i < targetFields.length; i++) {
                    if (map.onMap(targetFields[i].x, targetFields[i].y)) {
                        var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                        var defUnit = terrain.getUnit();
                        // can the transported unit move over the terrain?
                        if ((Global[transportUnit.getMovementType()].getMovementpoints(terrain, transportUnit, targetTerrain, false, map) > 0) &&
                            (defUnit === null ||
                                defUnit.isStealthed(unit.getOwner()) ||
                                (((defUnit !== null) && (defUnit === unit))))) {
                            ret.push(targetFields[i]);
                        }
                    }
                }
            }
        }
        return ret;
    };