ACTION_SUPPORTSINGLE_REPAIR.getRepairFields = function(action, map)
{
    var targetField = action.getActionTarget();
    var targetFields = [Qt.point(targetField.x + 1, targetField.y),
                        Qt.point(targetField.x - 1, targetField.y),
                        Qt.point(targetField.x,     targetField.y - 1),
                        Qt.point(targetField.x,     targetField.y + 1)];
    // check all neighbour terrains
    var unit = action.getTargetUnit();
    var ret = [];
    for (var i = 0; i < targetFields.length; i++)
    {
        if (map.onMap(targetFields[i].x, targetFields[i].y))
        {
            var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
            var repairUnit = terrain.getUnit();
            // can we repair the unit?
            if (repairUnit !== null &&
                repairUnit.getOwner() === unit.getOwner() &&
                repairUnit !== unit && UNIT.unitTypeToDomain(repairUnit.getUnitType()) == UNIT.unitTypeToDomain(unit.getUnitType()))
            {
                ret.push(targetFields[i]);
            }
        }
    }
    return ret;
};