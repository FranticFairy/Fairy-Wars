var Constructor = function () {
    this.canBePerformed = function (action, map) {
        var unit = action.getTargetUnit();
        
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        var building = action.getTargetBuilding();
        if (unit === null || unit.getHasMoved() === true) {
            return false;
        }
        if(unit.getOwner().getFunds() <3000) {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) &&
            (building !== null)) {
            var constructionList = building.getConstructionList();
            if (((constructionList.indexOf(unit.getUnitID()) >= 0) || BUILDING.isHq(building)) && (unit.getOwner() === building.getOwner())) {
                if((unit.getWeapon1ID() === "" && unit.getMaxAmmo1() > 0 && unit.getAmmo1() < unit.getMaxAmmo1()) || (unit.getWeapon2ID() === "" && unit.getMaxAmmo2() > 0 && unit.getAmmo2() < unit.getMaxAmmo2())) {
                    return true;
                }
            }
        }
        return false;
    };
    this.getActionText = function (map) {
        return qsTr("Restock (3000)");
    };
    this.getIcon = function (map) {
        return "ration";
    };
    this.isFinalStep = function (action, map) {
        return true;
    };

    this.perform = function (action, map) {
        action.startReading();
        var unit = action.getTargetUnit();

        unit.getOwner().addFunds(-3000);

        unit.refill(false);
        unit.setHasMoved(true);
    };
    this.getName = function () {
        return qsTr("Restock");
    };
    this.getDescription = function () {
        return qsTr("A special resupply action that can resupply expended material, but costs money.");
    };
}

Constructor.prototype = ACTION;
var ACTION_RESTOCK = new Constructor();
