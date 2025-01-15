var Constructor = function () {
    // loader for stuff which needs C++ Support
    this.init = function (terrain) {
        terrain.setTerrainName(__BASE2.getName());
    };
    this.getName = function () {
        return qsTr("You Shouldn't See This");
        terrain.setSupportPalette(false);
    };

    this.loadBase = function (terrain, spriteId, map, surroundingsIn, paraIn) {
        var surroundings = terrain.getSurroundings(surroundingsIn, parseInt(paraIn.charAt(0)), parseInt(paraIn.charAt(1)), GameEnums.Directions_Direct, parseInt(paraIn.charAt(2)), parseInt(paraIn.charAt(3)));

        /*
        if (surroundings.indexOf("+W") >= 0)
        {
            surroundings = surroundings.replace("+W", "+S+W");
        }
        else
        {
            surroundings += "+S";
        }
        */

        if (surroundings.includes("+N") || surroundings.includes("+S")) {
            if (surroundings != "+E+S+W" && surroundings != "+N+E+W") {
                surroundings = "+N+S";
            } else {
                surroundings = "+E+W";
            }
        } else {
            surroundings = "+E+W";
        }

        var mapTest = map.getTerrain(terrain.getX(), terrain.getY());
        if (mapTest != null) {
            terrain.loadBaseSprite(spriteId + surroundings);
        } else {
            terrain.loadBaseSprite(spriteId);
        }
    };
    this.getSprites = function (spriteId) {
        // array of sprites that can be selected as fix sprites for this terrain
        return [
            spriteId + "+E+W",
            spriteId + "+N+S",
            spriteId + ""
        ];
    };
};
Constructor.prototype = TERRAIN;
var __BASE2 = new Constructor();
