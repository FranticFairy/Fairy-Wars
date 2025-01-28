var Constructor = function()
{
    let VAR_PLACESITE_COUNT = "fw_co_teina_PLACESITE_COUNT"

    let checkHasCharges = function(action, map) {
        for (let i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
            let co = map.getCurrentPlayer().getCO(i)
            if (co && co.getCoID() === "CO_TEINA") {
                let varPlacesiteCount = co.getVariables().getVariable(VAR_PLACESITE_COUNT)
                if (varPlacesiteCount && varPlacesiteCount.readDataInt32() > 0)
                    return true
            }
        }
        return false
    }
    let reduceCharges = function(action, map) {
        for (let i = 0; i < map.getCurrentPlayer().getCoCount(); i++) {
            let co = map.getCurrentPlayer().getCO(i)
            if (co && co.getCoID() === "CO_TEINA") {
                let varPlacesiteCount = co.getVariables().getVariable(VAR_PLACESITE_COUNT)
                if (varPlacesiteCount && varPlacesiteCount.readDataInt32() > 0)
                    varPlacesiteCount.writeDataInt32(varPlacesiteCount.readDataInt32() - 1)
            }
        }
    }

    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if (ACTION.isEmptyFieldAndHasNotMoved(action, unit, actionTargetField, targetField, map) &&
            checkHasCharges(action, map))
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
        return qsTr("Create Dreamscape");
    };
    this.getIcon = function(map)
    {
        return "BUILD";
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
            Global["DREAM"].addCaptureAnimationBuilding(captureAnimation, building, null, unit.getOwner());
            captureAnimation.addSoldierSprite("soldier+" + armyName + "+mask" , unit.getOwner(), GameEnums.Recoloring_Matrix);
            captureAnimation.addSoldierSprite("soldier+" + armyName , unit.getOwner(), GameEnums.Recoloring_None);
            animation.queueAnimation(captureAnimation);
        }
        if (captured && checkHasCharges(action, map))
        {
            var terrain = map.getTerrain(actionTargetField.x, actionTargetField.y);
            terrain.loadBuilding("DREAM");
            terrain.getBuilding().setUnitOwner(unit);
            reduceCharges(action, map);
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
        return qsTr("Create Dreamscape");
    };
    this.getDescription = function()
    {
        return qsTr("Constructs a Dreamscape, allowing the creation of new structures. Charges of this ability are gained through Teina's COP and SCOP.");
    };
}


Constructor.prototype = ACTION;
var COACTION_TEI_MAKE_DREAM = new Constructor();
