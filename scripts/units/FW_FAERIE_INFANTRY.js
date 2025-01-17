var Constructor = function () {
    this.getUnitDamageID = function (unit) {
        return "FW_INFANTRY";
    };

    this.init = function(unit) {
        unit.setAmmo2(9);
        unit.setMaxAmmo2(9);
        unit.setWeapon2ID("FW_WEP_AR");

        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(3);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(2);
    };

    this.getMovementType = function() {
        return "MOVE_AIR";
    };

    this.getUnitType = function() {
        return GameEnums.UnitType_Infantry;
    };

    this.getName = function() {
        return qsTr("Faerie Infantry");
    };

    this.getDescription = function() {
        return qsTr("Teina's unique unit. Flying infantry unit, effective for capturing across water or in difficult terrain.");
    };

    this.getBaseCost = function() {
        return 2500;
    };

	this.canMoveAndFire = function(unit) {
        return true;
    };

    this.actionList = [
        "ACTION_FIRE", "ACTION_MISSILE", "ACTION_CAPTURE",
        "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"
    ];

    this.getShowInEditor = function() {
        return true;
    }
}

Constructor.prototype = UNIT;
var FW_FAERIE_INFANTRY = new Constructor();
