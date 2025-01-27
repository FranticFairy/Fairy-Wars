var Constructor = function () {

    this.spawnSuperUnit = function (map, unitType, building) {
        switch (unitType) {
            case "NOROSHI":
            ACTION_SUPERUNIT_HANDLER.spawnNoroshi(map,building)
            break;
        }
    }

    this.spawnNoroshi = function (map, building) {
        var tiles = [
            [Qt.point(building.getX() - 2, building.getY() - 2), Qt.point(building.getX() - 1, building.getY() - 2), Qt.point(building.getX(), building.getY() - 2)],
            [Qt.point(building.getX() - 2, building.getY() - 1), Qt.point(building.getX() - 1, building.getY() - 1), Qt.point(building.getX(), building.getY() - 1)],
            [Qt.point(building.getX() - 2, building.getY()), Qt.point(building.getX() - 1, building.getY()), Qt.point(building.getX(), building.getY())],
        ];

        var player = building.getOwner();
        var terrain = building.getTerrain();
        terrain.removeBuilding();

        var unitList = [];
        var unitInfoList = [];

        var unit = map.spawnUnit(tiles[1][1].x,tiles[1][1].y,"FW_SUPER_NOROSHI_CORE", player);
        if (unit !== null) {
            map.getGameRecorder().buildUnit(player.getPlayerID(), unit.getUnitID(), player.getPlayerID());
            player.buildedUnit(unit);
        }
        unitList.push(unit);
        unitInfoList.push("CORE");
        unit.setMovementType("MOVE_TANK_SUPER");
        unit = map.spawnUnit(tiles[0][0].x,tiles[0][0].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("NW");
        unit = map.spawnUnit(tiles[0][1].x,tiles[0][1].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("N");
        unit = map.spawnUnit(tiles[0][2].x,tiles[0][2].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("NE");

        unit = map.spawnUnit(tiles[1][0].x,tiles[1][0].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("W");
        /*
        unit = map.spawnUnit(tiles[1][1].x,tiles[1][1].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("M");
        */
        unit = map.spawnUnit(tiles[1][2].x,tiles[1][2].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("E");
        
        unit = map.spawnUnit(tiles[2][0].x,tiles[2][0].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("SW");
        unit = map.spawnUnit(tiles[2][1].x,tiles[2][1].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("S");
        unit = map.spawnUnit(tiles[2][2].x,tiles[2][2].y,"FW_SUPER_UNARMEDSEGMENT", player);
        unitList.push(unit);
        unitInfoList.push("SE");

        for(var x = 0; x < unitList.length; x++) {
            var handlingUnit = unitList[x];
            var unitInfo = unitInfoList[x];
            var variables = handlingUnit.getVariables();

            if(x === 0) {
                var segments = "";
                for(var y = 1; y < unitList.length; y++) {
                    if(segments != "") {
                        segments = segments + ","
                    }
                    segments = segments + unitList[y].getUniqueID();
                }
                var componentsVar = variables.createVariable("components");
                var components = componentsVar.readDataString();
                componentsVar.writeDataString(segments);
            } else {
                var coreIDVar = variables.createVariable("coreID");
                var coreID = coreIDVar.readDataString();
                coreIDVar.writeDataString("FW_SUPER_NOROSHI"+"_"+unitInfo);

                var segmentVar = variables.createVariable("segmentID");
                var segmentID = segmentVar.readDataString();
                segmentVar.writeDataString(unitInfo);

                handlingUnit.updateSprites(false);
            }

        }


    }

    var lastPath;

    this.handlePath = function (map, unit, action) {
        var path = action.getMovePath();
        lastPath = path;
        var pos = path[1];
        var variables = unit.getVariables();
        var directionVar = variables.createVariable("direction");
        var direction = directionVar.readDataString();

        var startX = path[path.length-1].x;
        var startY = path[path.length-1].y;

        if(ACTION_HANDLER.getDirection(unit.getX(),unit.getY(),pos.x,pos.y) != "S") {
            direction = "+" + ACTION_HANDLER.getDirection(unit.getX(),unit.getY(),pos.x,pos.y);
        } else {
            direction = ""
        }
        if(direction === "+S" || direction === "S") {
            direction = "+N";
        }
        

        /*
        if (pos.x != unit.getX() || pos.y != unit.getY()) {
            if (pos.x != unit.getX()) {
                if (pos.x < unit.getX()) {
                    direction ="+E";
                    //Came from Left
                } else {
                    direction ="+W";
                    //Came from Right
                }
            } else {
                if (pos.y < unit.getY()) {
                    direction ="";
                    //Came from Top
                } else {
                    direction ="+N";
                    //Came from Bottom
                }
            }
        }
        */
        directionVar.writeDataString(direction);
        unit.updateSprites(false);
        unit.setHasMoved(false);
        
        if(unit.getUnitID().includes("_CORE")) {
            var componentsVar = variables.createVariable("components");
            var components = componentsVar.readDataString();
            var segments = components.split(",");
            var paths = [];
            GameConsole.print(lastPath,1);
            for(var q = 0; q < path.length; q++) {
                
            }
            for(var fv = 0; fv < segments.length; fv++) {
                var segmentUnit = map.getUnit(segments[fv]);
                var segX = segmentUnit.getX();
                var segY = segmentUnit.getY();
                var segmentVariables = segmentUnit.getVariables();

                var tempSegmentPath = [];
                var segmentPath = lastPath;
                
                /*
                for(var q = path.length-1; q > 0; q--) {
                    var newCoords = ACTION_HANDLER.shiftCoordinates(path[q-1].x,path[q-1].y,path[q].x,path[q].y,segX,segY)
                    segX = newCoords.x;
                    segY = newCoords.y;
                    tempSegmentPath.push(newCoords);
                }
                
                for(var r = tempSegmentPath.length-1; r > 0; r--) {
                    segmentPath.push(tempSegmentPath[r]);
                }
                */

                var segmentVar = segmentVariables.createVariable("segmentID");
                var segmentID = segmentVar.readDataString();

                var rightMod = 0;
                var downMod = 0;

                //+X is RIGHT
                //-X is LEFT
                //+Y is DOWN
                //-Y is UP
                
                switch(direction) {
                    case "+N":
                        switch(segmentID) {
                            case "N":
                                rightMod = 0;
                                downMod = 1;
                            break;
                            case "E":
                                rightMod = -1;
                                downMod = 0;
                            break;
                            case "S":
                                rightMod = 0;
                                downMod = -1;
                            break;
                            case "W":
                                rightMod = 1;
                                downMod = 0;
                            break;
                            case "NE":
                                rightMod = -1;
                                downMod = 1;
                            break;
                            case "SE":
                                rightMod = -1;
                                downMod = -1;
                            break;
                            case "SW":
                                rightMod = 1;
                                downMod = -1;
                            break;
                            case "NW":
                                rightMod = 1;
                                downMod = 1;
                            break;
                            case "M":
                                rightMod = 0;
                                downMod = 0;
                            break;
                        }
                    break;
                    case "+E":
                        switch(segmentID) {
                            case "N":
                                rightMod = -1;
                                downMod = 0;
                            break;
                            case "E":
                                rightMod = 0;
                                downMod = -1;
                            break;
                            case "S":
                                rightMod = 1;
                                downMod = 0;
                            break;
                            case "W":
                                rightMod = 0;
                                downMod = 1;
                            break;
                            case "NE":
                                rightMod = -1;
                                downMod = -1;
                            break;
                            case "SE":
                                rightMod = 1;
                                downMod = -1;
                            break;
                            case "SW":
                                rightMod = 1;
                                downMod = 1;
                            break;
                            case "NW":
                                rightMod = -1;
                                downMod = 1;
                            break;
                            case "M":
                                rightMod = 0;
                                downMod = 0;
                            break;
                        }
                    break;
                    case "+W":
                        switch(segmentID) {
                            case "N":
                                rightMod = 1;
                                downMod = 0;
                            break;
                            case "E":
                                rightMod = 0;
                                downMod = 1;
                            break;
                            case "S":
                                rightMod = -1;
                                downMod = 0;
                            break;
                            case "W":
                                rightMod = 0;
                                downMod = -1;
                            break;
                            case "NE":
                                rightMod = 1;
                                downMod = 1;
                            break;
                            case "SE":
                                rightMod = -1;
                                downMod = 1;
                            break;
                            case "SW":
                                rightMod = -1;
                                downMod = -1;
                            break;
                            case "NW":
                                rightMod = 1;
                                downMod = -1;
                            break;
                            case "M":
                                rightMod = 0;
                                downMod = 0;
                            break;
                        }
                    break;
                    default:
                        switch(segmentID) {
                            case "N":
                                rightMod = 0;
                                downMod = -1;
                            break;
                            case "E":
                                rightMod = 1;
                                downMod = 0;
                            break;
                            case "S":
                                rightMod = 0;
                                downMod = 1;
                            break;
                            case "W":
                                rightMod = -1;
                                downMod = 0;
                            break;
                            case "NE":
                                rightMod = 1;
                                downMod = -1;
                            break;
                            case "SE":
                                rightMod = 1;
                                downMod = 1;
                            break;
                            case "SW":
                                rightMod = -1;
                                downMod = 1;
                            break;
                            case "NW":
                                rightMod = -1;
                                downMod = -1;
                            break;
                            case "M":
                                rightMod = 0;
                                downMod = 0;
                            break;
                        }
                    break;
                }

                /*

                for(var suffer = 0; suffer < lastPath.length; suffer++) {
                    segmentPath[suffer].x = lastPath[suffer].x;
                    segmentPath[suffer].x += rightMod;
                    segmentPath[suffer].y = lastPath[suffer].y;
                    segmentPath[suffer].y += downMod;
                }

                */

                segmentPath[0].x = unit.getX() + rightMod;
                segmentPath[0].y = unit.getY() + downMod;

                var segmentDirectionVar = segmentVariables.createVariable("direction");
                var segmentDirection = segmentDirectionVar.readDataString();
                segmentDirectionVar.writeDataString(direction);
                
                segmentUnit.moveUnit(segmentPath);
                segmentUnit.updateSprites(false);
            }
        }
    }


    this.getActionText = function (map) {
        return qsTr("Action Handler");
    };
    this.getName = function () {
        return qsTr("Action Handler");
    };
    this.getDescription = function () {
        return qsTr("Handles various actions for units; Start of turn, Pre-Action, Post-Action, etc..");
    };
}

Constructor.prototype = ACTION;
var ACTION_SUPERUNIT_HANDLER = new Constructor();
