var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map) &&
            unit.hasAmmo1())
        {
            var terrain = map.getTerrain(actionTargetField.x, actionTargetField.y);
            if (terrain.getID() === "PLAINS")
            {
                return true;
            }
        }
        return false;
    };

    this.getActionText = function(map)
    {
        return qsTr("Build Depot");
    };
    this.getIcon = function(map)
    {
        return "DEPOT";
    };
    this.perform = function(action, map)
    {
        var maxCapturePoints = 20;
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action, map);
        // move unit to target position
        Global[unit.getUnitID()].moveUnit(unit, action, map);
        // capture the building
        var capturePoints = unit.getCapturePoints();
        var building = action.getMovementBuilding();
        unit.increaseCapturePoints(action.getActionTarget());
        var captured = false;
        // check if the capture points are high enough
        if (unit.getCapturePoints() >= maxCapturePoints)
        {
            captured = true;
            unit.setCapturePoints(0);
        }
        var viewPlayer = map.getCurrentViewPlayer();
        if (viewPlayer === unit.getOwner() || viewPlayer.getFieldVisible(actionTargetField.x, actionTargetField.y))
        {
            var x = action.getActionTarget().x * map.getImageSize() - 10;
            var y = action.getActionTarget().y * map.getImageSize() - 30;
            var captureAnimation = GameAnimationFactory.createGameAnimationCapture(map, x, y, capturePoints, unit.getCapturePoints(), maxCapturePoints);
            captureAnimation.addBackgroundSprite("capture_background");
            var armyName = Global.getArmyNameFromPlayerTable(unit.getOwner(), ACTION_CAPTURE.armyData);
            Global["DEPOT"].addCaptureAnimationBuilding(captureAnimation, building, null, unit.getOwner());
            captureAnimation.addSoldierSprite("soldier+" + armyName + "+mask" , unit.getOwner(), GameEnums.Recoloring_Matrix);
            captureAnimation.addSoldierSprite("soldier+" + armyName , unit.getOwner(), GameEnums.Recoloring_None);
            animation.queueAnimation(captureAnimation);
        }
        if (captured)
        {
            var terrain = map.getTerrain(actionTargetField.x, actionTargetField.y);
            terrain.loadBuilding("DEPOT");
            terrain.getBuilding().setUnitOwner(unit);
            unit.reduceAmmo1(1);
        }
        // disable unit commandments for this turn
        unit.setHasMoved(true);
    };
    this.isFinalStep = function(action, map)
    {
        return true;
    };
    this.getName = function()
    {
        return qsTr("Build Depot");
    };
    this.getDescription = function()
    {
        return qsTr("Orders an APC to build a depot on a plain which can be used to resupply land units. The depot will reduce the material of the APC by 1.");
    };
}


Constructor.prototype = ACTION;
var ACTION_BUILD_DEPOT = new Constructor();
