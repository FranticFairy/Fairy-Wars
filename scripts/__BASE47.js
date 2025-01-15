var Constructor = function()
{
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(__BASE47.getName());
    };
    this.getName = function()
    {
        return qsTr("You Shouldn't See This");
    };

    this.loadBase = function(terrain, spriteId, map, surroundingsIn, surroundingsDirectIn,paraIn,paraDirectIn)
    {
        var surroundings = terrain.getSurroundings(surroundingsIn, parseInt(paraIn.charAt(0)), parseInt(paraIn.charAt(1)), GameEnums.Directions_All, parseInt(paraIn.charAt(2)), parseInt(paraIn.charAt(3)));
        var surroundingsDirect = terrain.getSurroundings(surroundingsDirectIn, parseInt(paraDirectIn.charAt(0)), parseInt(paraDirectIn.charAt(1)), GameEnums.Directions_Direct, parseInt(paraDirectIn.charAt(2)), parseInt(paraDirectIn.charAt(3)));

        var mapTest = map.getTerrain(terrain.getX(), terrain.getY());
        if(mapTest != null) {
            if (surroundings.includes("+NE")) {
                if (!(surroundingsDirect.includes("+N")) || !(surroundingsDirect.includes("+E"))) {
                    surroundings = surroundings.replace("+NE", "");
                }
            }
            if (surroundings.includes("+SW")) {
                if (!(surroundingsDirect.includes("+S")) || !(surroundingsDirect.includes("+W"))) {
                    surroundings = surroundings.replace("+SW", "");
                }
            }
            if (surroundings.includes("+SE")) {
                if (!(surroundingsDirect.includes("+S")) || !(surroundingsDirect.includes("+E"))) {
                    surroundings = surroundings.replace("+SE", "");
                }
            }
            if (surroundings.includes("+NW")) {
                if (!(surroundingsDirect.includes("+N")) || !(surroundingsDirect.includes("+W"))) {
                    surroundings = surroundings.replace("+NW", "");
                }
            }
            terrain.loadBaseSprite(spriteId + surroundings);
        } else {
            terrain.loadBaseSprite(spriteId);
        }

    };
    this.getSprites = function(spriteId)
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return [
            spriteId + "+E+S+SW+W",
            spriteId + "+E+S+W",
            spriteId + "+E+S",
            spriteId + "+E+SE+S+SW+W",
            spriteId + "+E+SE+S+W",
            spriteId + "+E+SE+S",
            spriteId + "+E+W",
            spriteId + "+E",
            spriteId + "+N+E+S+SW+W+NW",
            spriteId + "+N+E+S+SW+W",
            spriteId + "+N+E+S+W+NW",
            spriteId + "+N+E+S+W",
            spriteId + "+N+E+S",
            spriteId + "+N+E+SE+S+SW+W+NW",
            spriteId + "+N+E+SE+S+SW+W",
            spriteId + "+N+E+SE+S+W+NW",
            spriteId + "+N+E+SE+S+W",
            spriteId + "+N+E+SE+S",
            spriteId + "+N+E+W+NW",
            spriteId + "+N+E+W",
            spriteId + "+N+E",
            spriteId + "+N+NE+E+S+SW+W+NW",
            spriteId + "+N+NE+E+S+SW+W",
            spriteId + "+N+NE+E+S+W+NW",
            spriteId + "+N+NE+E+S+W",
            spriteId + "+N+NE+E+S",
            spriteId + "+N+NE+E+SE+S+SW+W+NW",
            spriteId + "+N+NE+E+SE+S+SW+W",
            spriteId + "+N+NE+E+SE+S+W+NW",
            spriteId + "+N+NE+E+SE+S+W",
            spriteId + "+N+NE+E+SE+S",
            spriteId + "+N+NE+E+W+NW",
            spriteId + "+N+NE+E+W",
            spriteId + "+N+NE+E",
            spriteId + "+N+S+SW+W+NW",
            spriteId + "+N+S+SW+W",
            spriteId + "+N+S+W+NW",
            spriteId + "+N+S+W",
            spriteId + "+N+S",
            spriteId + "+N+W+NW",
            spriteId + "+N+W",
            spriteId + "+N",
            spriteId + "+S+SW+W",
            spriteId + "+S+W",
            spriteId + "+S",
            spriteId + "+W",
            spriteId + ""
            ];
    };
};
Constructor.prototype = TERRAIN;
var __BASE47 = new Constructor();
