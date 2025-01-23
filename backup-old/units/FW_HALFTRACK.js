var Constructor = function () {

    this.init = function (unit) {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

    };

    this.getMovementType = function () {
        return "MOVE_TANK";
    };

    this.getUnitType = function () {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function () {
        return qsTr("Halftrack");
    };

    this.getDescription = function () {
        return qsTr("A tougher Truck, can take more of a punch and has a defensive machine gun.");
    };

    this.getBaseCost = function () {
        return 4500;
    };

    this.canMoveAndFire = function (unit) {
        return true;
    };

    this.getLoadingPlace = function () {
        return 1;
    };
    this.transportList = ["FW_INFANTRY", "FW_HVY_INFANTRY", "FW_AST_INFANTRY", "FW_ATGUN", "FW_IGUN", "FW_HOWITZER", "FW_FLAK"];

    this.actionList = ["ACTION_FIRE", "ACTION_BUILD_CARRY", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];


    this.getActions = function (unit, map) {
        var baseActions = ["ACTION_FIRE", "ACTION_BUILD_CARRY", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        switch (displayIcon) {
            case "+hmr":
                baseActions.push("ACTION_PLACE_PONTOON");
                return (baseActions);
            default:
                return baseActions;
        }
        // returns a string id list of the actions this unit can perform
    };

    this.startOfTurn = function (unit, map) {
        if (unit.getTerrain() !== null) {
        }
        UNIT.transporterRefilling(unit, map);
    };

    this.getShowInEditor = function () {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_HALFTRACK = new Constructor();
