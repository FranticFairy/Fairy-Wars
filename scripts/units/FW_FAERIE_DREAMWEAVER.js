var Constructor = function() {
    this.getUnitDamageID = function (unit) {
        return "FW_INFANTRY";
    };

    this.init = function(unit) {
        unit.setAmmo1(2);
        unit.setMaxAmmo1(2);
        unit.setWeapon1ID("");

        unit.setAmmo2(2);
        unit.setMaxAmmo2(2);
        unit.setWeapon2ID("");

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
        return GameEnums.UnitType_Ground;
    };

    this.getName = function() {
        return qsTr("Faerie Dreamweaver");
    };

    this.getDescription = function() {
        return qsTr("Teina's unique unit. A flying infantry unit, capable of capturing and performing the functions of a Dozer or Minelayer.");
    };

    this.getBaseCost = function() {
        return 7000;
    };

	this.canMoveAndFire = function(unit) {
        return true;
    };

    this.actionList = [
        "ACTION_PLACE_LANDMINE", "ACTION_PLACE_WATERMINE", "ACTION_DISABLE_MINE",
        "ACTION_PLACE_PONTOON", "ACTION_BUILD_DEPOT", "ACTION_BUILD_TEMP_HARBOUR", "ACTION_BUILD_TEMP_AIRPORT", "ACTION_CLEAR_FOREST", "ACTION_BUILD_ROAD", "ACTION_BUILD_TRENCH", "ACTION_RESTOCK",
        "ACTION_LOADOUT", "ACTION_JOIN", "ACTION_LOAD", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"
    ];

    this.getShowInEditor = function() {
        return true;
    }
}

Constructor.prototype = UNIT;
var FW_FAERIE_DREAMWEAVER = new Constructor();
