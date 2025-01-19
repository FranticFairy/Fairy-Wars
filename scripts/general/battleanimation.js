

BATTLEANIMATION.getPositionOffset = function(sprite, unit, terrain, unitIdx)
{
    if (terrain !== null)
    {
        var id = 10-unitIdx;
        switch(unitIdx) {
            case 10:
                return Qt.point(-4, -4);
            case 9:
                return Qt.point(-4, -4);
            case 8:
                return Qt.point(-4, -4);
            case 7:
                return Qt.point(-4, -4);

                /*
            case 6:
                return Qt.point(-4+-10, -4+-32);
            case 5:
                return Qt.point(-4+-10, -4+-32);
            case 4:
                return Qt.point(-4+-10+-50, -4+-40);
                */

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
        /*
        switch(unitIdx) {
            case 10:
                return Qt.point(0, -4);
            case 9:
                return Qt.point(0, -(id*16)-4);
            case 8:
                return Qt.point(0, -(id*12)-4);
            case 7:
                return Qt.point(0, -(id*8)-4);
            case 6:
                return Qt.point(-16, -(id*8)-4);
            case 5:
                return Qt.point(0, -(id*6)-4);
            case 4:
                return Qt.point(0, -(id*8)-4);
            case 3:
                return Qt.point(0, -(id*8)-4);
            case 2:
                return Qt.point(0, -(id*12)-4);
            case 1:
                return Qt.point(12, -(id*15)-4);
        }
                */
    }
    return Qt.point(0, 0);
};