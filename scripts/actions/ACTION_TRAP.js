
ACTION_TRAP.postAnimationUnitID = null;

ACTION_TRAP.seaMineExplosion = function (queueAnimation, targetUnit, trapX, trapY, map) {

    // explode mine?
    var unit = map.getTerrain(trapX, trapY).getUnit();
    ACTION_TRAP.postAnimationUnitID = unit;
    if (unit !== null) {
        var unitId = unit.getUnitID();
        if (ACTION_DISABLE_MINE.mines.includes(unitId)) {
            var owner = unit.getOwner();
            var explode = false;
            if (owner.isEnemyUnit(targetUnit)) {
                if (targetUnit.getUnitType() == unit.getUnitType()) {
                    explode = true;
                }
            }
            if (explode) {
                if (!Global[targetUnit.getUnitID()].actionList.includes("ACTION_DISABLE_MINE")) {
                    var xPos = targetUnit.getX();
                    var yPos = targetUnit.getY();
                    var animation = GameAnimationFactory.createAnimation(map, xPos, yPos);
                    animation.writeDataInt32(xPos);
                    animation.writeDataInt32(yPos);
                    if(unit.getUnitType() == GameEnums.UnitType_Ground) {
                        animation.addSprite("explosion", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
                    } else {
                        animation.addSprite("explosion+water", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
                    }
                    animation.setEndOfAnimationCall("ACTION_TRAP", "postAnimationMineDamge")
                    if (queueAnimation !== null) {
                        queueAnimation.queueAnimation(animation);
                    }
                }
                // we destroyed a unit
                animation = GameAnimationFactory.createAnimation(map, trapX, trapY);
                animation.writeDataInt32(trapX);
                animation.writeDataInt32(trapY);
                if(unit.getUnitType() == GameEnums.UnitType_Ground) {
                    animation.addSprite("explosion", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
                    animation.setSound("explosion.wav");
                } else {
                    animation.addSprite("explosion+water", -map.getImageSize() / 2, -map.getImageSize(), 0, 2);
                    animation.setSound("explosion+water.wav");
                }
                animation.setEndOfAnimationCall("ACTION_TRAP", "postAnimationSelfKill")
                if (queueAnimation !== null) {
                    queueAnimation.queueAnimation(animation);
                }
            }
        }
    }
};

ACTION_TRAP.postAnimationMineDamge = function(postAnimation, map)
{
    postAnimation.seekBuffer();
    var xPos = postAnimation.readDataInt32();
    var yPos = postAnimation.readDataInt32();
    var terrain = map.getTerrain(xPos, yPos);
    var targetUnit = terrain.getUnit();
    var mine = ACTION_TRAP.postAnimationUnitID;
    var attackerWeapon = mine.getWeapon1ID();
    
    if (targetUnit !== null &&
        targetUnit.getUnitType() !== GameEnums.UnitType_Air)
    {
        var specialDestruction = map.getGameRules().getSpecialDestruction();

        var damage = Global[attackerWeapon].getBaseDamage(targetUnit);

        var newHp = targetUnit.getHp() - damage / 10.0;
        if (!specialDestruction && newHp <= 0.1)
        {
            newHp = 0.1;
        }
        targetUnit.setHp(targetUnit.getHp() - damage / 10.0);
        if (targetUnit.getHp() <= 0)
        {
            // we destroyed a unit
            map.getGameRecorder().destroyedUnit(targetUnit.getOwner().getPlayerID(), targetUnit.getUnitID(), targetUnit.getOwner().getPlayerID());
            targetUnit.killUnit();
        }
    }
}

ACTION_TRAP.isTrap = function(action, moveUnit, targetFieldUnit, targetX, targetY, previousX, previousY, moveCost, map)
{
    // used to determine if a trap is in the move path.
    // the engine takes care of checking the path in the correct order and cutting the path.
    if (targetFieldUnit !== null)
    {
        var moveUnitType = moveUnit.getUnitType();
        var targetFieldUnitType = targetFieldUnit.getUnitType();
        if ((targetFieldUnit.isStealthed(moveUnit.getOwner()) &&
             ((moveUnitType === targetFieldUnitType) || 
             (moveUnitType !== GameEnums.UnitType_Air && targetFieldUnitType !== GameEnums.UnitType_Air)) &&
             !targetFieldUnit.getIgnoreUnitCollision()) ||
             moveCost < 0)
        {
            return true;
        }
        if(targetFieldUnit.getUnitID() === "FW_LANDMINE" && moveUnitType === GameEnums.UnitType_Ground && targetFieldUnit.isStealthed(moveUnit.getOwner())) {
            return true;
        }
        if(targetFieldUnit.getUnitID() === "FW_SEAMINE" && moveUnitType === GameEnums.UnitType_Naval && targetFieldUnit.isStealthed(moveUnit.getOwner())) {
            return true;
        }
    }
    return false;
};