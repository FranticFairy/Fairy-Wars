

BATTLEANIMATION.getPositionOffset = function (sprite, unit, terrain, unitIdx) {
    if (unit.getUnitType() != GameEnums.UnitType_Plane && unit.getUnitType() != GameEnums.UnitType_Plane_Large && !(unit.getUnitType() === GameEnums.UnitType_Heli && unit.getMovementType() === "MOVE_HELI")) {

        if (terrain !== null) {
            var id = 10 - unitIdx;
            switch (unitIdx) {
                case 10:
                    return Qt.point(-4, -4);
                case 9:
                    return Qt.point(-4, -4);
                case 8:
                    return Qt.point(-4, -4);
                case 7:
                    return Qt.point(-4, -4);
                case 6:
                    return Qt.point(62, -68);
                case 5:
                    return Qt.point(10, -74);
                case 4:
                    return Qt.point(10, -74);
                case 3:
                    return Qt.point(-4, -80);
                case 2:
                    return Qt.point(-4, -80);
                case 1:
                    return Qt.point(-64, -88);
            }
        }
    }
    return Qt.point(0, 0);
};