var Constructor = function () {

    this.init = function (unit) {
        unit.setAmmo1(7);
        unit.setMaxAmmo1(7);
        unit.setWeapon1ID("FW_WEP_MTANKGUN");

        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_MG");

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

    };

    this.getActions = function (unit, map) {
        var baseActions = UNIT.getBasicActions(unit,map);

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        switch (displayIcon) {
            case "+antimine":
                baseActions.push("ACTION_DISABLE_MINE");
                return (baseActions);
            default:
                return baseActions;
        }
        // returns a string id list of the actions this unit can perform
    };

    this.getMovementType = function () {
        return "MOVE_TANK";
    };

    this.getUnitType = function () {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function () {
        return qsTr("Medium Tank");
    };

    this.getDescription = function () {
        return qsTr("The standard tank unit, packs a good punch and has good speed without being too costly.");
    };

    this.getBaseCost = function () {
        return 9500;
    };

    this.canMoveAndFire = function (unit) {
        return true;
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
var FW_MTANK = new Constructor();
