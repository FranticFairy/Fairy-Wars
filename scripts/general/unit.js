UNIT.transporterRefilling = function (unit, map) {
    // carrier refilling and unmoving is done here
    var size = unit.getLoadedUnitCount();
    for (var i = 0; i < size; i++) {
        var transportUnit = unit.getLoadedUnit(i);
        var refillMaterial = (typeof refillRule === 'undefined' || refillRule === null); // an existing rule equals it's set
        transportUnit.refill(refillMaterial);
        var unitID = transportUnit.getUnitID();
        var unitType = transportUnit.getUnitType();
        var refresh = map.getGameRules().getTransporterRefresh();
        if (unitID === "FW_AST_INFANTRY" || unitID === "FW_SEAPLANE") {
            transportUnit.setHasMoved(false);
        } else if (UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Naval) {
            if (unitID === "FW_INFANTRY_ANCH" || unitID === "FW_IFV_ANCH") {
                transportUnit.setHasMoved(false);
            }
        } else if (UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air) {
            if (unitID === "FW_INFANTRY_PARA") {
                transportUnit.setHasMoved(false);
            }
        }
    }
};

UNIT.getSound = function (unit) {
    switch (unit.getMovementType()) {
        case "MOVE_HELI":
            return "movecopter.wav"
        case "MOVE_AIR":
            return "moveair.wav"
        case "MOVE_TIRE_A":
        case "MOVE_TIRE_B":
            return "movetire.wav"
        case "MOVE_TANK":
        case "MOVE_TANK_HEAVY":
        case "MOVE_TANK_AMPHIB":
            return "movetank.wav"
        case "MOVE_FEET":
            return "movewalk.wav"
        case "MOVE_BOAT":
        case "MOVE_SHIP":
        case "MOVE_SUB":
            return "moveship.wav"
        default:
            return "movetank.wav"
    }
}

UNIT.loadSprites = function (unit) {
    unit.loadSpriteV2(UNIT.getSpriteReference(unit) + "+mask", GameEnums.Recoloring_Matrix);
    unit.loadSpriteV2(UNIT.getSpriteReference(unit), GameEnums.Recoloring_None);
    var variables = unit.getVariables();
    var displayIconVar = variables.createVariable("displayIcon");
    var displayIcon = displayIconVar.readDataString();
    displayIconVar.writeDataString(displayIcon);
    unit.loadSprite(displayIcon, false, false);
};

UNIT.doWalkingAnimation = function (action, map) {
    var unit = action.getTargetUnit();
    var animation = GameAnimationFactory.createWalkingAnimation(map, unit, action);
    var unitID = UNIT.getSpriteReference(unit).toLowerCase();
    animation.loadSpriteV2(unitID + "+mask", GameEnums.Recoloring_Matrix, 1);
    animation.loadSpriteV2(unitID, GameEnums.Recoloring_None, 1);
    animation.setSound(UNIT.getSound(unit), -2);
    return animation;
};

UNIT.canAttackStealthedUnit = function (attacker, defender, map) {
    if (attacker.getWeapon1ID() == "FW_WEP_DC" || attacker.getWeapon2ID() == "FW_WEP_DC") {
        return true;
    }
    if (defender.getCloaked() && !defender.getHidden()) {
        return true;
    }
    return false;
};

UNIT.initForMods = function (unit) {
    unit.setIgnoreUnitCollision(true);
};

var defaultValues = [];

UNIT.buildedUnit = function (unit, player, map) {
}

UNIT.getActions = function (unit, map) {
    // returns a string id list of the actions this unit can perform
    var unitActions = Global[unit.getUnitID()].actionList;
    if (unitActions != "") {
        return Global[unit.getUnitID()].actionList + "," + UNIT.actionList;
    } else {
        return UNIT.actionList;
    }
}

this.builtBeforeToday = false;
/*
UNIT.getTransportUnits = function (unit, map) {
    allUnits = ["FW_ACAR", "FW_AHELI", "FW_AHELI_TRN", "FW_ANTIAIR", "FW_COMV", "FW_APC", "FW_APC_ANTIMINE", "FW_ARTILLERY", "FW_ASSAULT_GUN", "FW_AST_INFANTRY", "FW_ATGUN", "FW_ATTACKER", "FW_ATTACKER_AA", "FW_ATTACKER_ANTIRADAR", "FW_ATTACKER_ASM", "FW_AX", "FW_BB", "FW_BOMBER", "FW_BOMBER_ARTY", "FW_BOMBER_ASM", "FW_CA", "FW_CIWS", "FW_CL", "FW_CL_ARTY", "FW_CV", "FW_CV_TRN", "FW_CV_UPGRD", "FW_DD", "FW_DD_AA", "FW_DD_ASM", "FW_DD_MINE", "FW_DOZER", "FW_DOZER_FUEL", "FW_DOZER_UPGRD", "FW_FAERIE_DREAMWEAVER", "FW_FAERIE_INFANTRY", "FW_FF", "FW_FIGHTER", "FW_FIGHTER_BOMB", "FW_FIGHTER_FUEL", "FW_FIGHTER_GUN", "FW_FLAK", "FW_FLAK_AA", "FW_HALFTRACK", "FW_HALFTRACK_AA", "FW_HALFTRACK_ARTY", "FW_HALFTRACK_AT", "FW_HALFTRACK_HMR", "FW_HOWITZER", "FW_HOWITZER_ARTY", "FW_HTANK", "FW_HVY_ARTILLERY", "FW_HVY_INFANTRY", "FW_HVY_INFANTRY_AA", "FW_HVY_INFANTRY_ARTY", "FW_IFV", "FW_IFV_AA", "FW_IFV_ANCH", "FW_IFV_ANTIMINE", "FW_IFV_ARTY", "FW_IFV_AT", "FW_IFV_HMR", "FW_IFV_MOVE", "FW_IFV_RADAR", "FW_IGUN", "FW_INFANTRY", "FW_INFANTRY_ANCH", "FW_INFANTRY_AT", "FW_INFANTRY_GUN", "FW_INFANTRY_PARA", "FW_LHELI", "FW_LHELI_AA", "FW_LHELI_ASM", "FW_LHELI_RADAR", "FW_LTANK", "FW_ML", "FW_MOTOR", "FW_MTANK", "FW_MTANK_ANTIMINE", "FW_PROP", "FW_PROP_AA", "FW_PROP_ASM", "FW_PROP_AT", "FW_RECON", "FW_RECON_AT", "FW_ROCKET", "FW_ROCKET_ASM", "FW_ROCKET_MOVE", "FW_SAM", "FW_SAM_ASM", "FW_SAM_MOVE", "FW_SAM_UPGRD", "FW_SEAPLANE", "FW_SEAPLANE_AA", "FW_SEAPLANE_ANTIRADAR", "FW_SEAPLANE_ASM", "FW_SHTANK", "FW_SS", "FW_SS_AA", "FW_SS_ANTIRADAR", "FW_SS_ARTY", "FW_SS_ASM", "FW_SS_RADAR", "FW_SS_TRN", "FW_TANK_DESTROYER", "FW_THELI", "FW_THELI_FUEL", "FW_THELI_TRN", "FW_TR", "FW_TRANSPORT", "FW_TRANSPORT_BOMB", "FW_TRANSPORT_FUEL", "FW_TRANSPORT_RADAR", "FW_TRUCK"];

    var baseList = Global[unit.getUnitID()].transportList;

    var carryList = [];

    for (var i = 0; i < baseList.length; i++) {
        var unit = baseList[i];
        var variantList = ACTION_HANDLER.grabVariants(unit);
        for (var x = 0; x < variantList.length; x++) {
            carryList.push(variantList[x]);
        }
    }

    return carryList;
}
*/
UNIT.getTransportUnits = function (unit, map) {
    allUnits = ACTION_GETALL.getUnits();
    var baseList = Global[unit.getUnitID()].transportList;

    var carryList = [];

    for (var i = 0; i < allUnits.length; i++) {
        var foundUnit = allUnits[i];
        var unitType = Global[foundUnit].getUnitType();
        var unitDomain = UNIT.unitTypeToDomain(unitType);
        var isVariant = Global[foundUnit].variant;
        var parent = "";
        if(isVariant) {
            parent = Global[foundUnit].variantList[0];
        }
        switch(unit.getUnitID()) {
            case "FW_TR":
                if(unitDomain === GameEnums.UnitType_Ground) {
                    carryList.push(foundUnit);
                }
            break;
            case "FW_TRUCK":
            case "FW_HALFTRACK_AA":
            case "FW_HALFTRACK_ARTY":
            case "FW_HALFTRACK_AT":
            case "FW_HALFTRACK_HMR":
            case "FW_HALFTRACK":
                if(unitType === GameEnums.UnitType_Infantry || unitType === GameEnums.UnitType_Fieldgun) {
                    if(foundUnit != "FW_MOTOR" && parent != "FW_MOTOR") {
                        carryList.push(foundUnit);
                    }
                }
            break;
            case "FW_APC_ANTIMINE":
            case "FW_APC":
            case "FW_THELI":
            case "FW_AHELI_TRN":
                if(unitType === GameEnums.UnitType_Infantry) {
                    if(foundUnit != "FW_MOTOR" && parent != "FW_MOTOR") {
                        carryList.push(foundUnit);
                    }
                }
            break;
            case "FW_CL_ARTY":
            case "FW_CL":
                if(unitType === GameEnums.UnitType_Heli) {
                    carryList.push(foundUnit);
                }
            break;
            case "FW_CV_TRN":
            case "FW_CV":
                if(unitType === GameEnums.UnitType_Heli || unitType === GameEnums.UnitType_Plane) {
                    carryList.push(foundUnit);
                }
            break;
            case "FW_CV_UPGRD":
                if(unitDomain === GameEnums.UnitType_Air) {
                    carryList.push(foundUnit);
                }
            break;
            case "FW_SS_AA":
                if(unitType === GameEnums.UnitType_Heli || foundUnit === "FW_SEAPLANE" || parent === "FW_SEAPLANE") {
                    carryList.push(foundUnit);
                }
            break;
            case "FW_TRANSPORT":
                if(unitDomain === GameEnums.UnitType_Ground && unitType != GameEnums.UnitType_Vehicle_Heavy) {
                    carryList.push(foundUnit);
                }
            break;
            case "FW_SS_TRN":
            case "FW_THELI_TRN":
                if(unitType === GameEnums.UnitType_Infantry || unitType === GameEnums.UnitType_Fieldgun || unitType === GameEnums.UnitType_Vehicle_Light) {
                    carryList.push(foundUnit);
                }
            break;
        }
    }

    return carryList;
}

UNIT.actionList = ["ACTION_LOADOUT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_RESTOCK", "ACTION_LIFT", "ACTION_LAND", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

UNIT.startOfTurn = function (unit, map) {
    ACTION_HANDLER.handleStartOfTurn(unit, map);
};

UNIT.endOfTurn = function (unit, map) {
    ACTION_HANDLER.handleEndOfTurn(unit, map);
}

UNIT.postBattleActions = function (unit, damage, otherUnit, gotAttacked, weapon, action) {
    ACTION_HANDLER.handlePostBattleActions(unit, damage, otherUnit, gotAttacked, weapon, action);
}

UNIT.postAction = function (unit, action, map) {
    ACTION_HANDLER.handlePostAction(unit, action, map);
    if(unit.getUnitID().includes("FW_SUPER_") && !unit.getUnitID().includes("SEGMENT")) {
        ACTION_SUPERUNIT_HANDLER.handlePath(map,unit,action);
        unit.refill(true);
    }
}

UNIT.getShowInEditor = function () {
    return false;
}

UNIT.getWeatherImmune = function (unit, map) {
    var submarines = ["FW_SS", "FW_SS_ARTY", "FW_SS_ASM", "FW_SS_RADAR", "FW_SS_ANTIRADAR", "FW_SS_AA", "FW_SS_TRN"]
    if (unit.getHidden() && submarines.includes(unit.getUnitID())) {
        return true;
    }
    if(unit.getUnitID().includes("FW_SUPER_")) {
        return true;
    }
    return false;
};

UNIT.variant = false;
UNIT.upgradeCost = 0;
UNIT.variantList = [];
UNIT.fuelConsumption = 0;

UNIT.isVariantUnit = false;

UNIT.getSpriteReference = function (unit) {
    var unitID = unit.getUnitID();

    if (Global[unitID].variant) {
        return Global[unitID].variantList[0];
    }
    return unitID;
}

UNIT.getTypeOfWeapon1 = function (unit) {
    if (unit.getBaseMaxRange() > 1) {
        return GameEnums.WeaponType_Indirect;
    } else {
        return GameEnums.WeaponType_Direct;
    }
};

UNIT.getTypeOfWeapon2 = function (unit) {
    switch (unit.getWeapon2ID()) {
        case "FW_WEP_MORTAR":
        case "FW_WEP_HOWITZER":
        case "FW_WEP_HVY_HOWITZER":
        case "FW_WEP_ROCKETS":
        case "FW_WEP_CRUISEMISSILE":
        case "FW_WEP_SEAD":
        case "FW_WEP_DCR":
        case "FW_WEP_HTORP":
        case "FW_WEP_BBGUN":
        case "FW_WEP_HNAV":
        case "FW_WEP_SAM":
        case "FW_WEP_HFLAK":
            return GameEnums.WeaponType_Indirect;
        default:
            return GameEnums.WeaponType_Direct;
    }
};

UNIT.createExplosionAnimation = function (x, y, unit, map) {
    if ((UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air && unit.getMovementType() != "MOVE_HELI_LANDED")) {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + air", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + air.wav");
        return animation;
    } else if (UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Naval) {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + water", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + water.wav");
        return animation;
    } else {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion+land", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion+land.wav");
        return animation;
    }
};

UNIT.getTerrainAnimationBase = function (unit, terrain, defender, map) {
    if ((UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air && unit.getMovementType() != "MOVE_HELI_LANDED") || UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Naval) {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "base_" + weatherModifier + "air";
    }
    if (Global[terrain.getID()].getTerrainAnimationBase !== null) {
        return Global[terrain.getID()].getTerrainAnimationBase(unit, terrain, defender, map);

    }
    else {
        return "";
    }
};

UNIT.getTerrainAnimationMoveSpeed = function (unit) {
    if ((UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air && unit.getMovementType() != "MOVE_HELI_LANDED") || UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Naval) {
        return 1;
    }
    return 0;
};

UNIT.getTerrainAnimationForeground = function (unit, terrain, defender, map) {
    if ((UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air && unit.getMovementType() != "MOVE_HELI_LANDED") || UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Naval) {
        return "";
    }
    if (Global[terrain.getID()].getTerrainAnimationForeground !== null) {
        return Global[terrain.getID()].getTerrainAnimationForeground(unit, terrain, defender, map);
    }
    else {
        return "";
    }
};

UNIT.getTerrainAnimationBackground = function (unit, terrain, defender, map) {
    if (UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Naval) {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "back_" + weatherModifier + "sea";
    } else if ((UNIT.unitTypeToDomain(unit.getUnitType()) === GameEnums.UnitType_Air && unit.getMovementType() != "MOVE_HELI_LANDED")) {

    } else {
        if (Global[terrain.getID()].getTerrainAnimationBackground !== null) {
            return Global[terrain.getID()].getTerrainAnimationBackground(unit, terrain, defender, map);
        }
        else {
            return "";
        }
    }
};

UNIT.unitTypeToGround = function (unitType, map) {
    if (unitType === GameEnums.UnitType_Hovercraft ||
        unitType === GameEnums.UnitType_Ground ||
        unitType === GameEnums.UnitType_Vehicle_Light ||
        unitType === GameEnums.UnitType_Vehicle_Medium ||
        unitType === GameEnums.UnitType_Vehicle_Heavy ||
        unitType === GameEnums.UnitType_Fieldgun ||
        unitType === GameEnums.UnitType_Vehicle_Super) {
        return GameEnums.UnitType_Ground;
    }
    return unitType;
};

UNIT.unitTypeToDomain = function (unitType, map) {
    if (unitType === GameEnums.UnitType_Vehicle_Light ||
        unitType === GameEnums.UnitType_Vehicle_Medium ||
        unitType === GameEnums.UnitType_Vehicle_Heavy ||
        unitType === GameEnums.UnitType_Fieldgun ||
        unitType === GameEnums.UnitType_Infantry ||
        unitType === GameEnums.UnitType_Vehicle_Super) {
        return GameEnums.UnitType_Ground;
    }
    if (unitType === GameEnums.UnitType_Plane ||
        unitType === GameEnums.UnitType_Plane_Large ||
        unitType === GameEnums.UnitType_Heli ||
        unitType === GameEnums.UnitType_Plane_Super) {
        return GameEnums.UnitType_Air;
    }
    if (unitType === GameEnums.UnitType_Naval_Light ||
        unitType === GameEnums.UnitType_Naval_Medium ||
        unitType === GameEnums.UnitType_Naval_Heavy ||
        unitType === GameEnums.UnitType_Naval_Super) {
        return GameEnums.UnitType_Naval;
    }
    return unitType;
};

UNIT.getUnitTypeText = function (unitType, map) {
    switch (unitType) {
        case GameEnums.UnitType_Air:
            return qsTr("Air");
        case GameEnums.UnitType_Naval:
            return qsTr("Naval");
        case GameEnums.UnitType_Ground:
            return qsTr("Ground");
        case GameEnums.UnitType_Infantry:
            return qsTr("Infantry");
        case GameEnums.UnitType_Hovercraft:
            return qsTr("Hovercraft");
        case GameEnums.UnitType_Vehicle_Light:
            return qsTr("Light Vehicle");
        case GameEnums.UnitType_Vehicle_Medium:
            return qsTr("Medium Vehicle");
        case GameEnums.UnitType_Vehicle_Heavy:
            return qsTr("Heavy Vehicle");
        case GameEnums.UnitType_Fieldgun:
            return qsTr("Field Gun");
        case GameEnums.UnitType_Plane:
            return qsTr("Plane");
        case GameEnums.UnitType_Plane_Large:
            return qsTr("Large Plane");
        case GameEnums.UnitType_Heli:
            return qsTr("Helicopter");
        case GameEnums.UnitType_Naval_Light:
            return qsTr("Light Ship");
        case GameEnums.UnitType_Naval_Medium:
            return qsTr("Medium Ship");
        case GameEnums.UnitType_Naval_Heavy:
            return qsTr("Heavy Ship");
        case GameEnums.UnitType_Vehicle_Super:
            return qsTr("Experimental Vehicle");
        case GameEnums.UnitType_Plane_Super:
            return qsTr("Experimental Plane");
        case GameEnums.UnitType_Naval_Super:
            return qsTr("Experimental Ship");
    }
    return tr("Ground");
};

UNIT.unitTypeSortList = [GameEnums.UnitType_Infantry,
                        GameEnums.UnitType_Fieldgun,
                        GameEnums.UnitType_Vehicle_Light,
                        GameEnums.UnitType_Vehicle_Medium,
                        GameEnums.UnitType_Vehicle_Heavy,
                        GameEnums.UnitType_Heli,
                        GameEnums.UnitType_Plane,
                        GameEnums.UnitType_Plane_Large,
                        GameEnums.UnitType_Naval_Light,
                        GameEnums.UnitType_Naval_Medium,
                        GameEnums.UnitType_Naval_Heavy,
                        GameEnums.UnitType_Vehicle_Super,
                        GameEnums.UnitType_Plane_Super,
                        GameEnums.UnitType_Naval_Super
];