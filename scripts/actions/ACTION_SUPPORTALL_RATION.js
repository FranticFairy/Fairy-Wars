ACTION_SUPPORTALL_RATION.checkUnit = function (unit, x, y, map) {
    if (map.onMap(x, y)) {
        var target = map.getTerrain(x, y).getUnit();
        if (target !== null) {
            if (target.getOwner() === unit.getOwner() &&
                target !== unit) {
                if (unit.getUnitID() === "FW_AX") {
                    switch (target.getUnitType()) {
                        case GameEnums.UnitType_Naval:
                            return true;
                    }
                } else if (unit.getUnitID() === "FW_TRANSPORT_FUEL") {
                    if (target.getUnitType() === GameEnums.UnitType_Air && target.getMovementType() != "MOVE_HELI_LANDED") {
                        return true;
                    }
                } else {
                    switch (target.getUnitType()) {
                        case GameEnums.UnitType_Ground:
                        case GameEnums.UnitType_Infantry:
                            return true;
                    }
                    if (target.getMovementType() === "MOVE_HELI_LANDED") {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};

ACTION_SUPPORTALL_RATION.giveSingleRation = function (unit, x, y, refillMaterial, queueAnimation, map) {
    if (ACTION_SUPPORTALL_RATION.checkUnit(unit, x, y, map)) {
        var refillUnit = map.getTerrain(x, y).getUnit();
        if (unit.getUnitID() === "FW_TRANSPORT_FUEL") {
            refillUnit.refill(refillMaterial, 1, 0, 0);
        } else {
            refillUnit.refill(refillMaterial);
        }
        if (!refillUnit.isStealthed(map.getCurrentViewPlayer())) {
            var animation = GameAnimationFactory.createAnimation(map, x, y);
            var width = animation.addText(qsTr("RATION"), map.getImageSize() / 2 + 25, -2, 1);
            animation.addBox("info", map.getImageSize() / 2, 0, width + 36, map.getImageSize(), 400);
            animation.addSprite("ration", map.getImageSize() / 2 + 4, 4, 400, 2);
            animation.addSound("repair_1.wav");
            if (queueAnimation !== null) {
                queueAnimation.queueAnimation(animation);
            }
        }
    }
};