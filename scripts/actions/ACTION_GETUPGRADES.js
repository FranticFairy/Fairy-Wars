var Constructor = function () {

    this.hasLoadouts = ["FW_ATTACKER", "FW_BOMBER", "FW_FIGHTER", "FW_HVY_INFANTRY", "FW_PROP", "FW_SEAPLANE", "FW_TRANSPORT", "FW_IFV", "FW_APC", "FW_CV", "FW_CL", "FW_DD", "FW_FLAK", "FW_HALFTRACK", "FW_IFV", "FW_HOWITZER", "FW_INFANTRY", "FW_LHELI", "FW_MTANK", "FW_RECON", "FW_ROCKET", "FW_SAM", "FW_SS", "FW_THELI", "FW_DOZER"];

    this.getLoadoutOptions = function (unitID) {
        var types = [];
        var ammoCount = [];
        var icons = [];
        var price = [];
        var isUpgrade = [];
        var weaponID = [];
        var weaponSlot = [];

        switch (unitID) {
            case "FW_ATTACKER":
                types.push("Medium Bombs");
                ammoCount.push(4);
                icons.push("icon_bomb");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_MBOMB");
                weaponSlot.push(1);

                types.push("SEAD Missiles");
                ammoCount.push(2);
                icons.push("icon_antiradar");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_SEAD");
                weaponSlot.push(1);

                types.push("Anti-Ship Missiles");
                ammoCount.push(2);
                icons.push("icon_asm");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_HASM");
                weaponSlot.push(1);

                types.push("Anti-Air Missiles");
                ammoCount.push(2);
                icons.push("icon_aa");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_AAM");
                weaponSlot.push(2);
                break;
            case "FW_BOMBER":
                types.push("Heavy Bombs");
                ammoCount.push(4);
                icons.push("icon_bomb");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_HBOMB");
                weaponSlot.push(1);

                types.push("Defensive Turrets");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_TURRET");
                weaponSlot.push(2);

                types.push("Depth Charges");
                ammoCount.push(4);
                icons.push("icon_asm");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_DC");
                weaponSlot.push(1);

                types.push("Cruise Missiles");
                ammoCount.push(2);
                icons.push("icon_arty");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_CRUISEMISSILE");
                weaponSlot.push(1);
                break;
            case "FW_FIGHTER":
                types.push("Extra Fuel");
                ammoCount.push(20);
                icons.push("icon_fuel");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FUEL");
                weaponSlot.push(1);

                types.push("Extra Missiles");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_AAM");
                weaponSlot.push(2);

                types.push("Medium Bombs");
                ammoCount.push(3);
                icons.push("icon_bomb");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_MBOMB");
                weaponSlot.push(2);

                types.push("Gun");
                ammoCount.push(6);
                icons.push("icon_gun");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_AIR_MG");
                weaponSlot.push(2);
                break;
            case "FW_HVY_INFANTRY":
                types.push("Bazooka");
                ammoCount.push(4);
                icons.push("icon_at");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_BAZOOKA");
                weaponSlot.push(1);

                types.push("MANPADs");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_MANPAD");
                weaponSlot.push(1);

                types.push("Mortar");
                ammoCount.push(4);
                icons.push("icon_arty");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_MORTAR");
                weaponSlot.push(1);
                break;
            case "FW_PROP":
                types.push("Light Bombs");
                ammoCount.push(4);
                icons.push("icon_bomb");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_LBOMB");
                weaponSlot.push(1);

                types.push("Light A2A Missiles");
                ammoCount.push(3);
                icons.push("icon_aa");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_LAAM");
                weaponSlot.push(1);

                types.push("Torpedos");
                ammoCount.push(3);
                icons.push("icon_asm");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_TORP");
                weaponSlot.push(1);

                types.push("AT Guns");
                ammoCount.push(4);
                icons.push("icon_at");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_MTANKGUN");
                weaponSlot.push(1);
                break;
            case "FW_SEAPLANE":
                types.push("Multirole Missiles");
                ammoCount.push(4);
                icons.push("icon_at");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_MULTIMISSILE");
                weaponSlot.push(1);

                types.push("SEAD Missiles");
                ammoCount.push(2);
                icons.push("icon_antiradar");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_SEAD");
                weaponSlot.push(1);

                types.push("Anti-Ship Missiles");
                ammoCount.push(3);
                icons.push("icon_asm");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_HASM");
                weaponSlot.push(1);

                types.push("A2A Missiles");
                ammoCount.push(3);
                icons.push("icon_aa");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_LAAM");
                weaponSlot.push(1);
                break;
            case "FW_TRANSPORT":
                types.push("Transport Capacity");
                ammoCount.push(2);
                icons.push("icon_trn");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("TRANSPORT");
                weaponSlot.push(1);

                types.push("Aerial Refueller");
                ammoCount.push(1);
                icons.push("icon_fuel");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("REFUEL");
                weaponSlot.push(1);

                types.push("AEW&C");
                ammoCount.push(4);
                icons.push("icon_radar");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("RADAR");
                weaponSlot.push(1);

                types.push("Light Bombs");
                ammoCount.push(4);
                icons.push("icon_bomb");
                price.push(0);
                isUpgrade.push(false);
                weaponID.push("FW_WEP_LBOMB");
                weaponSlot.push(1);
                break;
            case "FW_CV":
                types.push("CIWS System");
                ammoCount.push(6);
                icons.push("icon_aa");
                price.push(6000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_HVY_CIWS");
                weaponSlot.push(1);

                types.push("Larger Flight Deck");
                ammoCount.push(1);
                icons.push("icon_upgrd");
                price.push(6000);
                isUpgrade.push(true);
                weaponID.push("CAPACITY1");
                weaponSlot.push(1);

                types.push("Light Guns");
                ammoCount.push(4);
                icons.push("icon_asm");
                price.push(6000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_NAV");
                weaponSlot.push(2);
                break;
            case "FW_CL":
                types.push("Cruise Missiles");
                ammoCount.push(4);
                icons.push("icon_arty");
                price.push(7000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_CRUISEMISSILE");
                weaponSlot.push(2);

                types.push("Heavy Naval Gun");
                ammoCount.push(6);
                icons.push("icon_upgrd");
                price.push(6000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_HNAV");
                weaponSlot.push(1);
                break;
            case "FW_DD":
                types.push("Minelayer Kit");
                ammoCount.push(2);
                icons.push("icon_mine");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("MINELAYER");
                weaponSlot.push(2);

                types.push("Anti-Aircraft Guns");
                ammoCount.push(6);
                icons.push("icon_aa");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_AA");
                weaponSlot.push(1);

                types.push("Anti-Submarine Rockets");
                ammoCount.push(4);
                icons.push("icon_asm");
                price.push(4000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_DC");
                weaponSlot.push(2);
                break;
            case "FW_FLAK":
                types.push("SAM Launcher");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(6000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_SAM");
                weaponSlot.push(1);
                break;
            case "FW_HALFTRACK":
                types.push("Light Tank Gun");
                ammoCount.push(4);
                icons.push("icon_at");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_LTANKGUN");
                weaponSlot.push(1);

                types.push("Mortar");
                ammoCount.push(4);
                icons.push("icon_arty");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_MORTAR");
                weaponSlot.push(1);

                types.push("Light Anti-Air");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_LAA");
                weaponSlot.push(1);

                types.push("Bridgelaying Kit");
                ammoCount.push(1);
                icons.push("icon_hmr");
                price.push(2000);
                isUpgrade.push(true);
                weaponID.push("BRIDGEBUILDER");
                weaponSlot.push(1);
                break;
            case "FW_HOWITZER":
                types.push("Rocket Launcher");
                ammoCount.push(4);
                icons.push("icon_arty");
                price.push(6000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_ROCKETS");
                weaponSlot.push(1);
                break;
            case "FW_INFANTRY":
                types.push("Heavy Rifles");
                ammoCount.push(9);
                icons.push("icon_upgrd");
                price.push(1000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_HR");
                weaponSlot.push(2);

                types.push("Bazookas");
                ammoCount.push(2);
                icons.push("icon_at");
                price.push(1000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_BAZOOKA");
                weaponSlot.push(1);

                types.push("Parachute Kit");
                ammoCount.push(1);
                icons.push("icon_para");
                price.push(1000);
                isUpgrade.push(true);
                weaponID.push("PARACHUTE");
                weaponSlot.push(1);

                types.push("Marine Kit");
                ammoCount.push(1);
                icons.push("icon_anch");
                price.push(1000);
                isUpgrade.push(true);
                weaponID.push("MARINE");
                weaponSlot.push(1);
                break;
            case "FW_LHELI":
                types.push("Anti-Helicopter Missiles");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_ANTIHELI");
                weaponSlot.push(1);

                types.push("Sensor Pods");
                ammoCount.push(2);
                icons.push("icon_radar");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("RADAR");
                weaponSlot.push(1);

                types.push("Torpedoes");
                ammoCount.push(3);
                icons.push("icon_asm");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_TORP");
                weaponSlot.push(1);
                break;
            case "FW_MTANK":
                types.push("Minesweeper Flail");
                ammoCount.push(1);
                icons.push("icon_antimine");
                price.push(4000);
                isUpgrade.push(true);
                weaponID.push("MINESWEEPER");
                weaponSlot.push(1);
                break;
            case "FW_APC":
                types.push("Minesweeper Flail");
                ammoCount.push(1);
                icons.push("icon_antimine");
                price.push(4000);
                isUpgrade.push(true);
                weaponID.push("MINESWEEPER");
                weaponSlot.push(1);
                break;
            case "FW_RECON":
                types.push("Recoilless Rifle");
                ammoCount.push(3);
                icons.push("icon_at");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_LTANKGUN");
                weaponSlot.push(1);
                break;
            case "FW_DOZER":
                types.push("Field Upgrade Kit");
                ammoCount.push(3);
                icons.push("icon_upgrd");
                price.push(7000);
                isUpgrade.push(true);
                weaponID.push("UPGRADEKIT");
                weaponSlot.push(1);
                break;
            case "FW_ROCKET":
                types.push("Tracked Chassis");
                ammoCount.push(1);
                icons.push("icon_move");
                price.push(5000);
                isUpgrade.push(true);
                weaponID.push("TRACKS");
                weaponSlot.push(1);

                types.push("Anti-Ship Missiles");
                ammoCount.push(4);
                icons.push("icon_asm");
                price.push(7000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_HASM");
                weaponSlot.push(1);
                break;
            case "FW_SAM":
                types.push("Tracked Chassis");
                ammoCount.push(1);
                icons.push("icon_move");
                price.push(5000);
                isUpgrade.push(true);
                weaponID.push("TRACKS");
                weaponSlot.push(1);

                types.push("Anti-Ship Missiles");
                ammoCount.push(4);
                icons.push("icon_asm");
                price.push(7000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_HASM");
                weaponSlot.push(1);

                types.push("Infrared Sensors");
                ammoCount.push(1);
                icons.push("icon_antiradar");
                price.push(5000);
                isUpgrade.push(true);
                weaponID.push("INFRARED");
                weaponSlot.push(1);
                break;
            case "FW_SS":
                types.push("Long-Range Torpedoes");
                ammoCount.push(4);
                icons.push("icon_asm");
                price.push(8000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_HTORP");
                weaponSlot.push(1);

                types.push("Missile Compartment");
                ammoCount.push(4);
                icons.push("icon_arty");
                price.push(8000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_CRUISEMISSILE");
                weaponSlot.push(1);

                types.push("Improved Sensors");
                ammoCount.push(1);
                icons.push("icon_radar");
                price.push(5000);
                isUpgrade.push(true);
                weaponID.push("RADAR");
                weaponSlot.push(1);

                types.push("Silent Running");
                ammoCount.push(1);
                icons.push("icon_antiradar");
                price.push(5000);
                isUpgrade.push(true);
                weaponID.push("SILENT");
                weaponSlot.push(1);
                break;
            case "FW_THELI":
                types.push("Light Vehicle Lifting");
                ammoCount.push(1);
                icons.push("icon_trn");
                price.push(5000);
                isUpgrade.push(true);
                weaponID.push("LVF");
                weaponSlot.push(1);

                types.push("Supply Capablity");
                ammoCount.push(1);
                icons.push("icon_fuel");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("REFUEL");
                weaponSlot.push(1);
                break;
            case "FW_IFV":
                types.push("ATGM Launcher");
                ammoCount.push(4);
                icons.push("icon_at");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_BAZOOKA");
                weaponSlot.push(1);

                types.push("MANPADs");
                ammoCount.push(4);
                icons.push("icon_aa");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_MANPAD");
                weaponSlot.push(1);

                types.push("Mortar");
                ammoCount.push(4);
                icons.push("icon_arty");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("FW_WEP_MORTAR");
                weaponSlot.push(1);

                types.push("Minesweeper Flail");
                ammoCount.push(1);
                icons.push("icon_antimine");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("MINESWEEPER");
                weaponSlot.push(1);

                types.push("Recon Kit");
                ammoCount.push(2);
                icons.push("icon_radar");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("RADAR");
                weaponSlot.push(1);

                types.push("Marine Training");
                ammoCount.push(1);
                icons.push("icon_anch");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("MARINE");
                weaponSlot.push(1);

                types.push("Amphibious Propulsion");
                ammoCount.push(1);
                icons.push("icon_upgrd");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("AMPHIB");
                weaponSlot.push(1);

                types.push("Bridgelaying Kit");
                ammoCount.push(1);
                icons.push("icon_hmr");
                price.push(3000);
                isUpgrade.push(true);
                weaponID.push("BRIDGEBUILDER");
                weaponSlot.push(1);
                break;
            default:
                return ""
        }

        return [types, ammoCount, icons, price, isUpgrade, weaponID, weaponSlot];
    }

    this.resetValues = function (unit, defaultValues) {
        if (defaultValues != null) {
            if (defaultValues != undefined) {
                if (defaultValues[0] != undefined) {
                    unit.setAmmo1(defaultValues[0]);
                    unit.setMaxAmmo1(defaultValues[1]);
                    unit.setWeapon1ID(defaultValues[2]);
                }

                if (defaultValues[3] != undefined) {
                    unit.setAmmo2(defaultValues[3]);
                    unit.setMaxAmmo2(defaultValues[4]);
                    unit.setWeapon2ID(defaultValues[5]);
                }

                unit.setMaxFuel(defaultValues[6]);

                unit.setBaseMovementPoints(defaultValues[7]);
                unit.setMinRange(defaultValues[8]);
                unit.setMaxRange(defaultValues[9]);
                unit.setVision(defaultValues[10]);
                if (defaultValues[14] != undefined) {
                    unit.setVisionHigh(defaultValues[14]);
                }
                unit.setMovementType(defaultValues[15]);
            } else {
            }
        } else {
        }
    }

    this.resetValuesLite = function (unit, defaultValues) {
        if (defaultValues != null) {
            if (defaultValues != undefined) {
                unit.setBaseMovementPoints(defaultValues[7]);
                unit.setMinRange(defaultValues[8]);
                unit.setMaxRange(defaultValues[9]);
                unit.setVision(defaultValues[10]);
                if (defaultValues[14] != undefined) {
                    unit.setVisionHigh(defaultValues[14]);
                }
                unit.setMovementType(defaultValues[15]);
            } else {
            }
        } else {
        }
    }

    this.getActionText = function (map) {
        return qsTr("Get Upgrades");
    };
    this.getName = function () {
        return qsTr("Get Upgrades");
    };
    this.getDescription = function () {
        return qsTr("Handler for getting unit upgrade information.");
    };
}

Constructor.prototype = ACTION;
var ACTION_GETUPGRADES = new Constructor();
