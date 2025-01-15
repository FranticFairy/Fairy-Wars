var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        if (unit === null) {
            return false;
        }
        return true;
    };
    this.getActionText = function (map) {
        return qsTr("Disarm");
    };
    this.getIcon = function (map) {
        return "icon_fire";
    };
    this.isFinalStep = function (action, map) {
        return true;
    };
    this.perform = function (action, map) {
        var unit = action.getTargetUnit();
        if (unit !== null)
        {
            var owner = unit.getOwner();
            map.getGameRecorder().destroyedUnit(owner.getPlayerID(), unit.getUnitID(), unit.getOwner().getPlayerID());
            unit.removeUnit();
        }
    };
    this.getName = function () {
        return qsTr("Disarm");
    };
    this.getDescription = function () {
        return qsTr("Removes a mine you own.");
    };
}

Constructor.prototype = ACTION;
var ACTION_DISARM = new Constructor();
