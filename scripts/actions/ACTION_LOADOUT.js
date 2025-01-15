var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        if (!ACTION_GETUPGRADES.hasLoadouts.includes(unit.getUnitID()) || unit.getLoadedUnitCount() > 0) {
            return false;
        }
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var building = action.getTargetBuilding();
        if (unit === null || unit.getHasMoved() === true || unit.getMovementType() === "MOVE_HELI_LANDED") {
            return false;
        }
        var funds = unit.getOwner().getFunds();
        var minMoney = 0;
        var unitID = unit.getUnitID();
        var upgradeOptions = ACTION_GETUPGRADES.getLoadoutOptions(unitID);
        for (i = 0; i < upgradeOptions[0].length; i++) {
            if (minMoney < upgradeOptions[3][i]) {
                minMoney = upgradeOptions[3][i];
            }
        }
        if (funds < minMoney) {
            return false;
        }

        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y)) {
            if (building !== null) {
                var constructionList = building.getConstructionList();
                if (((constructionList.indexOf(unit.getUnitID()) >= 0) || BUILDING.isHq(building)) && (unit.getOwner() === building.getOwner()) && building.getActionList().includes("ACTION_BUILD_UNITS")) {
                    return true;
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

        return false;
    };

    this.checkAdjacentUnits = function (unit, x, y, map) {
        if (unit.getUnitType() === GameEnums.UnitType_Ground || unit.getUnitType() === GameEnums.UnitType_Infantry || unit.getMovementType() === "MOVE_HELI_LANDED") {
            if (map.onMap(x, y)) {
                var target = map.getTerrain(x, y).getUnit();
                if (target !== null) {
                    if (target.getOwner() === unit.getOwner() && target !== unit) {
                        if (target.getUnitID() === "FW_DOZER") {
                            var variables = target.getVariables();
                            var displayIconVar = variables.createVariable("displayIcon");
                            var displayIcon = displayIconVar.readDataString();
                            if (displayIcon === "+upgrd") {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    this.getActionText = function (map) {
        return qsTr("Change Loadout");
    };
    this.getIcon = function (map) {
        return "icon_fire";
    };
    this.getStepData = function (action, data) {
        var unit = action.getTargetUnit();
        var unitID = unit.getUnitID();
        var upgradeOptions = ACTION_GETUPGRADES.getLoadoutOptions(unitID);
        var funds = unit.getOwner().getFunds();
        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();

        for (i = 0; i < upgradeOptions[0].length; i++) {
            var icon = upgradeOptions[2][i].replace("icon_", "+");
            if (icon != displayIcon) {
                var name = upgradeOptions[0][i];
                var ammo = upgradeOptions[1][i];
                var price = upgradeOptions[3][i];
                var isUpgrade = upgradeOptions[4][i];
                var menuIcon = upgradeOptions[2][i];
                if (isUpgrade) {
                    if (funds >= price) {
                        data.addData(name + " (" + price + ")", name, menuIcon, price, true);
                    }
                } else {
                    data.addData(name + " (" + ammo + ")", name, menuIcon, ammo, true);
                }
            }
        }
    };

    this.isFinalStep = function (action) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    this.getStepInputType = function (action) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.perform = function (action, map) {
        action.startReading();
        var player = map.getCurrentPlayer();
        var unit = action.getTargetUnit();
        var unitX = unit.getX();
        var unitY = unit.getY();
        var unitID = unit.getUnitID();
        var weaponName = action.readDataString();
        var upgradeOptions = ACTION_GETUPGRADES.getLoadoutOptions(unitID);

        var weaponID;
        var weaponSlot;
        var ammo;
        var cost;
        var icon;

        for (i = 0; i < upgradeOptions[0].length; i++) {
            //This Works
            if (upgradeOptions[0][i] === weaponName) {
                weaponID = upgradeOptions[5][i];
                weaponSlot = upgradeOptions[6][i];
                ammo = upgradeOptions[1][i];
                cost = upgradeOptions[3][i];
                icon = upgradeOptions[2][i].replace("icon_", "+");
            }
        }

        unit.getOwner().addFunds(-cost);

        ACTION_GETUPGRADES.resetValues(unit, unit.defaultValues);

        if (weaponID.includes("FW_WEP_")) {
            if (weaponSlot === 1) {
                if (unit.getAmmo1() < unit.getMaxAmmo1()) {
                    unit.setWeapon1ID(weaponID);
                    unit.setMaxAmmo1(ammo);
                    unit.setAmmo1(ammo);
                } else {
                    unit.setWeapon1ID(weaponID);
                    unit.setMaxAmmo1(ammo);
                    if (unit.getAmmo1() > unit.getMaxAmmo1()) {
                        unit.setAmmo1(ammo);
                    }
                }
            } else {
                if (unit.getAmmo2() < unit.getMaxAmmo2()) {
                    unit.setWeapon2ID(weaponID);
                    unit.setMaxAmmo2(ammo);
                    unit.setAmmo2(ammo);
                } else {
                    unit.setWeapon2ID(weaponID);
                    unit.setMaxAmmo2(ammo);
                    if (unit.getAmmo2() > unit.getMaxAmmo2()) {
                        unit.setAmmo2(ammo);
                    }
                }
            }
            switch (weaponID) {
                case "FW_WEP_CRUISEMISSILE":
                    unit.setMaxRange(3);
                    break;
                case "FW_WEP_SEAD":
                    unit.setMaxRange(3);
                    break;
                case "FW_WEP_MORTAR":
                    unit.setMaxRange(2);
                    break;
                case "FW_WEP_SAM":
                    unit.setMaxRange(4);
                    if (unit.getUnitID() === "FW_FLAK") {
                        unit.setAmmo2(0);
                        unit.setMaxAmmo2(0);
                        unit.setWeapon2ID("");
                    }
                    break;
                case "FW_WEP_ROCKETS":
                    unit.setMaxRange(4);
                    break;
                case "FW_WEP_HTORP":
                    unit.setMaxRange(3);
                    break;
                case "FW_WEP_DC":
                    if (unit.getUnitID() === "FW_DD") {
                        unit.setMaxRange(3);
                    }
                    break;
            }
        } else if (weaponID != "") {
            //Here we handle non-weapon upgrades/loadouts that do need something adjusted in terms of stats.
            switch (weaponID) {
                case "FUEL":
                    unit.setMaxFuel(unit.getMaxFuel() + ammo);
                    unit.setFuel(unit.getFuel() + ammo);
                    break;
                case "TRACKS":
                    unit.setMovementType("MOVE_TANK");
                    break;
                case "AMPHIB":
                    unit.setMovementType("MOVE_TANK_AMPHIB");
                    break;
                case "MINELAYER":
                    unit.setAmmo2(2);
                    unit.setMaxAmmo2(2);
                    unit.setWeapon2ID("");
                    break;
                case "RADAR":
                    if (unit.getUnitID() === "FW_LHELI") {
                        unit.setVision(unit.getBaseVision() + 2);
                    }
                    if (unit.getUnitID() === "FW_IFV") {
                        unit.setVision(unit.getBaseVision() + 2);
                    }
                    break;
            }
        }

        //Special Cases go here
        if (unitID === "FW_FIGHTER" && weaponID != "FUEL") {
            unit.setMaxFuel(50);
            if (unit.getFuel() > unit.getMaxFuel()) {
                unit.setFuel(unit.getMaxFuel());
            }
        }

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        displayIcon = icon;
        displayIconVar.writeDataString(displayIcon);
        unit.updateSprites(false);

        unit.moveUnitAction(action);
        unit.refill(false);
        unit.setHasMoved(true);
    };
    this.getName = function () {
        return qsTr("Change Loadout");
    };
    this.getDescription = function () {
        return qsTr("Change the loadout of this unit.");
    };
}

Constructor.prototype = ACTION;
var ACTION_LOADOUT = new Constructor();
