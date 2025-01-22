BUILDING.getConstructionList = function (building) {
    return BUILDING.assembleConstructionList(building);
};

BUILDING.getBestAdjacent = function(building) {
    var bestAdjacent = "LAND";
    var map = building.getMap();
    if (map != null) {
        var targetFields = [Qt.point(building.getX() + 1, building.getY()),
                            Qt.point(building.getX() - 1, building.getY()),
                            Qt.point(building.getX(), building.getY() - 1),
                            Qt.point(building.getX(), building.getY() + 1)];
        for (var i = 0; i < targetFields.length; i++) {
            if (map.onMap(targetFields[i].x, targetFields[i].y)) {
                var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                var terrainID = terrain.getID();
                if (terrainID === "RIVER" && bestAdjacent === "LAND") {
                    bestAdjacent = "RIVER";
                }
                if (terrainID === "BEACH" && bestAdjacent != "SEA") {
                    bestAdjacent = "BEACH";
                }
                if (terrainID === "SEA" && bestAdjacent != "SEA") {
                    bestAdjacent = "SEA";
                }
            }

        }
    }
    return bestAdjacent;
};

BUILDING.assembleConstructionList = function (building) {
    allUnits = ["FW_ACAR", "FW_AHELI", "FW_AHELI_TRN", "FW_ANTIAIR", "FW_APC", "FW_APC_ANTIMINE", "FW_ARTILLERY", "FW_ASSAULT_GUN", "FW_AST_INFANTRY", "FW_ATGUN", "FW_ATTACKER", "FW_ATTACKER_AA", "FW_ATTACKER_ANTIRADAR", "FW_ATTACKER_ASM", "FW_AX", "FW_BB", "FW_BOMBER", "FW_BOMBER_ARTY", "FW_BOMBER_ASM", "FW_CA", "FW_CIWS", "FW_CL", "FW_CL_ARTY", "FW_CV", "FW_CV_TRN", "FW_CV_UPGRD", "FW_DD", "FW_DD_AA", "FW_DD_ASM", "FW_DD_MINE", "FW_DOZER", "FW_DOZER_FUEL", "FW_DOZER_UPGRD", "FW_FAERIE_DREAMWEAVER", "FW_FAERIE_INFANTRY", "FW_FF", "FW_FIGHTER", "FW_FIGHTER_BOMB", "FW_FIGHTER_FUEL", "FW_FIGHTER_GUN", "FW_FLAK", "FW_FLAK_AA", "FW_HALFTRACK", "FW_HALFTRACK_AA", "FW_HALFTRACK_ARTY", "FW_HALFTRACK_AT", "FW_HALFTRACK_HMR", "FW_HOWITZER", "FW_HOWITZER_ARTY", "FW_HTANK", "FW_HVY_ARTILLERY", "FW_HVY_INFANTRY", "FW_HVY_INFANTRY_AA", "FW_HVY_INFANTRY_ARTY", "FW_IFV", "FW_IFV_AA", "FW_IFV_ANCH", "FW_IFV_ANTIMINE", "FW_IFV_ARTY", "FW_IFV_AT", "FW_IFV_HMR", "FW_IFV_MOVE", "FW_IFV_RADAR", "FW_IGUN", "FW_INFANTRY", "FW_INFANTRY_ANCH", "FW_INFANTRY_AT", "FW_INFANTRY_GUN", "FW_INFANTRY_PARA", "FW_LHELI", "FW_LHELI_AA", "FW_LHELI_ASM", "FW_LHELI_RADAR", "FW_LTANK", "FW_ML", "FW_MOTOR", "FW_MTANK", "FW_MTANK_ANTIMINE", "FW_PROP", "FW_PROP_AA", "FW_PROP_ASM", "FW_PROP_AT", "FW_RECON", "FW_RECON_AT", "FW_ROCKET", "FW_ROCKET_ASM", "FW_ROCKET_MOVE", "FW_SAM", "FW_SAM_ASM", "FW_SAM_MOVE", "FW_SAM_UPGRD", "FW_SEAPLANE", "FW_SEAPLANE_AA", "FW_SEAPLANE_ANTIRADAR", "FW_SEAPLANE_ASM", "FW_SHTANK", "FW_SS", "FW_SS_AA", "FW_SS_ANTIRADAR", "FW_SS_ARTY", "FW_SS_ASM", "FW_SS_RADAR", "FW_SS_TRN", "FW_TANK_DESTROYER", "FW_THELI", "FW_THELI_FUEL", "FW_THELI_TRN", "FW_TR", "FW_TRANSPORT", "FW_TRANSPORT_BOMB", "FW_TRANSPORT_FUEL", "FW_TRANSPORT_RADAR", "FW_TRUCK"];
    lightUnits = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC", "FW_ML", "FW_FF", "FW_TR", "FW_AX", "FW_DD", "FW_SS"];
    rigUnits = ["FW_AX" , "FW_FF" , "FW_TR" , "FW_ML"];

    var bestAdjacent = BUILDING.getBestAdjacent(building)
    var owner = building.getOwner();
    var buildingID = building.getBuildingID();
    var isHuman = true;
    var buildingDomain = "LAND"
    var buildables = [];
    if(owner != null) {
        if (owner.getBaseGameInput().getAiType() != GameEnums.AiTypes_Human) {
            isHuman = false;
        }
    }
    switch (buildingID) {
        case "AIRPORT":
        case "TEMPORARY_AIRPORT":
            buildingDomain = "AIR";
        break;
        case "HARBOUR":
        case "TEMPORARY_HARBOUR":
            buildingDomain = "SEA";
        break;
        case "LABOR":
            switch (bestAdjacent) {
                case "SEA":
                    buildingDomain = "ALL";
                break;
                case "BEACH":
                    buildingDomain = "BEACH";
                break;
                default:
                    buildingDomain = "LANDAIR";
                break;
            }
        break;
        case "AMPHIBIOUSFACTORY":
            switch (bestAdjacent) {
                case "SEA":
                    buildingDomain = "LIGHTSEA";
                    break;
                case "BEACH":
                    buildingDomain = "LIGHTBEACH";
                    break;
                default:
                    buildingDomain = "LIGHT";
                    break;
            }
        break;
        case "OILRIG":
            buildingDomain = "OILRIG"
        break;
        case "MINE":
        case "POWERPLANT":
        case "RADAR":
        case "SILO":
        case "SILO_ROCKET":
        case "TOWER":
        case "BUILDSITE":
            buildingDomain = "NONE"
        break;
        default:
            buildingDomain = "LAND"
        break;
    }
    for(var i = 0; i < allUnits.length; i++) {
        var unit = allUnits[i];
        var unitType = Global[unit].getUnitType();
        var unitDomain = UNIT.unitTypeToDomain(unitType);
        var unitMove = Global[unit].getMovementType();
        var isVariant = Global[unit].variant;
        var isUnique = Global[unit].getCOSpecificUnit;
        var parent = "";
        if(isVariant) {
            parent = Global[unit].variantList[0];
        }
        
        if(((isVariant && !isHuman) || !isVariant) && !isUnique) {

            if(buildingDomain === "AIR") {
                if(unitDomain === GameEnums.UnitType_Air) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "SEA") {
                if(unitDomain === GameEnums.UnitType_Naval) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "ALL") {
                buildables.push(unit);
            }
            if(buildingDomain === "BEACH") {
                if(unitType != GameEnums.UnitType_Naval_Heavy && unitType != GameEnums.UnitType_Naval_Medium) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "LANDAIR") {
                if(unitDomain != GameEnums.UnitType_Naval) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "LIGHTSEA") {
                if(unitType === GameEnums.UnitType_Infantry || unitType === GameEnums.UnitType_Vehicle_Light || unitType === GameEnums.UnitType_Fieldgun || unitType === GameEnums.UnitType_Naval_Light || unitType === GameEnums.UnitType_Naval_Medium) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "LIGHTBEACH") {
                if(unitType === GameEnums.UnitType_Infantry || unitType === GameEnums.UnitType_Vehicle_Light || unitType === GameEnums.UnitType_Fieldgun || unitType === GameEnums.UnitType_Naval_Light) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "LIGHT") {
                if(unitType === GameEnums.UnitType_Infantry || unitType === GameEnums.UnitType_Vehicle_Light || unitType === GameEnums.UnitType_Fieldgun) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "OILRIG") {
                if(unitType === GameEnums.UnitType_Naval_Light) {
                    buildables.push(unit);
                }
            }
            if(buildingDomain === "LAND") {
                if(unitDomain === GameEnums.UnitType_Ground) {
                    buildables.push(unit);
                }
            }


        }

    }
    return buildables;
};