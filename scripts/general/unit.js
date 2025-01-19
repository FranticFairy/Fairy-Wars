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
        } else if (unit.getUnitType() === GameEnums.UnitType_Naval) {
            if(unitID === "FW_INFANTRY_ANCH" || unitID === "FW_IFV_ANCH") {
                transportUnit.setHasMoved(false);
            }
        } else if (unit.getUnitType() === GameEnums.UnitType_Air) {
            if(unitID === "FW_INFANTRY_PARA") {
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
    if(unitActions != "") {
        return Global[unit.getUnitID()].actionList + "," + UNIT.actionList;
    } else {
        return UNIT.actionList;
    }
}

UNIT.actionList = ["ACTION_LOADOUT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"],

UNIT.startOfTurn = function (unit, map) {
    ACTION_HANDLER.handleStartOfTurn(unit,map);
};

UNIT.endOfTurn = function(unit, map) {
    ACTION_HANDLER.handleEndOfTurn(unit, map);
}

UNIT.postBattleActions = function(unit, damage, otherUnit, gotAttacked, weapon, action) {
    ACTION_HANDLER.handlePostBattleActions(unit, damage, otherUnit, gotAttacked, weapon, action);
}

UNIT.postAction = function(unit, action, map) {
    ACTION_HANDLER.handlePostAction(unit, action, map);
}

UNIT.getShowInEditor = function () {
    return false;
}

UNIT.variant = false;
UNIT.upgradeCost = 0;
UNIT.variantList = [];
UNIT.fuelConsumption = 0;

UNIT.isVariantUnit = false;

UNIT.getSpriteReference = function (unit) {
    var unitID = unit.getUnitID();

    if(Global[unitID].variant) {
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
    if (unit.getUnitType() === GameEnums.UnitType_Air) {
        var animation = GameAnimationFactory.createAnimation(map, x, y);
        animation.addSprite("explosion + air", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
        animation.setSound("explosion + air.wav");
        return animation;
    } else if (unit.getUnitType() === GameEnums.UnitType_Naval) {
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
    if (unit.getUnitType() === GameEnums.UnitType_Air || unit.getUnitType() === GameEnums.UnitType_Naval) {
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
    if (unit.getUnitType() === GameEnums.UnitType_Air || unit.getUnitType() === GameEnums.UnitType_Naval) {
        return 1;
    }
    return 0;
};

UNIT.getTerrainAnimationForeground = function (unit, terrain, defender, map) {
    if (unit.getUnitType() === GameEnums.UnitType_Air || unit.getUnitType() === GameEnums.UnitType_Naval) {
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
    if (unit.getUnitType() === GameEnums.UnitType_Air || unit.getUnitType() === GameEnums.UnitType_Naval) {
        var weatherModifier = TERRAIN.getWeatherModifier(map);
        return "back_" + weatherModifier + "sea";
    } else {
        if (Global[terrain.getID()].getTerrainAnimationBackground !== null) {
            return Global[terrain.getID()].getTerrainAnimationBackground(unit, terrain, defender, map);
        }
        else {
            return "";
        }
    }
};