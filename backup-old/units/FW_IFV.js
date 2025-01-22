var Constructor = function () {
    this.getUnitDamageID = function (unit) {
        return "FW_LTANK";
    };

    this.init = function (unit) {

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_HMG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(3);

    };

    this.getMovementType = function () {
        return "MOVE_TANK";
    };

    this.getUnitType = function () {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function () {
        return qsTr("IFV");
    };

    this.getDescription = function () {
        return qsTr("Rin's unique unit. The IFV is a mobile, lightly-armoured infantry unit. Though costly and not very strong without upgrades, it's the sturdiest capture unit available.");
    };

    this.getBaseCost = function () {
        return 7000;
    };

    this.canMoveAndFire = function (unit) {
        return true;
    };
    this.transportList = ["FW_INFANTRY", "FW_HVY_INFANTRY", "FW_AST_INFANTRY", "FW_ATGUN", "FW_IGUN", "FW_HOWITZER", "FW_FLAK"];

    this.getActions = function (unit, map) {
        var baseActions = ["ACTION_FIRE", "ACTION_MISSILE", "ACTION_CAPTURE", "ACTION_BUILD_CARRY", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        switch (displayIcon) {
            case "+hmr":
                baseActions.push("ACTION_PLACE_PONTOON");
                return (baseActions);
            case "+antimine":
                baseActions.push("ACTION_DISABLE_MINE");
                return (baseActions);
            default:
                return baseActions;
        }
        // returns a string id list of the actions this unit can perform
    };

    this.startOfTurn = function (unit, map) {
        if (unit.getTerrain() !== null) {
        }
    };

    this.getShowInEditor = function () {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_IFV = new Constructor();
