var Constructor = function () {

    this.init = function (unit) {
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

    };

    this.getMovementType = function () {
        return "MOVE_TIRE_A";
    };

    this.getUnitType = function () {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function () {
        return qsTr("Truck");
    };

    this.getDescription = function () {
        return qsTr("A cheaper, squishier version of the APC. Can transport one Infantry/Field Gun unit and perform resupplies.");
    };

    this.getBaseCost = function () {
        return 3000;
    };

    this.canMoveAndFire = function (unit) {
        return true;
    };

    this.getLoadingPlace = function () {
        return 1;
    };
    this.transportList = ["FW_INFANTRY", "FW_HVY_INFANTRY", "FW_AST_INFANTRY", "FW_ATGUN", "FW_IGUN", "FW_HOWITZER", "FW_FLAK"];

    this.actionList = ["ACTION_BUILD_CARRY", "ACTION_LOAD", "ACTION_UNLOAD", "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_SUPPORTALL_RATION", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];



    this.getActions = function (unit, map) {
        var baseActions = UNIT.getBasicActions(unit, map, ["ACTION_TOGGLEFOG"]);

        return baseActions;
        // returns a string id list of the actions this unit can perform
    };

    this.startOfTurn = function (unit, map) {
        if (unit.getTerrain() !== null) {
            ACTION_SUPPORTALL_RATION.giveRation(unit, map);
        }
        UNIT.transporterRefilling(unit, map);
    };

    this.getShowInEditor = function () {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_TRUCK = new Constructor();
