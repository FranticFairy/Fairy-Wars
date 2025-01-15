var Constructor = function()
{
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(__BASE8.getName());
    };
    this.getName = function()
    {
        return qsTr("You Shouldn't See This");
    };

    this.loadBase = function(terrain, spriteId, map, surroundingsIn,paraIn)
    {
        var surroundings = terrain.getSurroundings(surroundingsIn, parseInt(paraIn.charAt(0)), parseInt(paraIn.charAt(1)), GameEnums.Directions_Direct, parseInt(paraIn.charAt(2)), parseInt(paraIn.charAt(3)));
		surroundings = surroundings.replace("+N", "");

        var mapTest = map.getTerrain(terrain.getX(), terrain.getY());
        if(mapTest != null) {
            terrain.loadBaseSprite(spriteId + surroundings);
        } else {
            terrain.loadBaseSprite(spriteId);
        }
    };
    this.getSprites = function(spriteId)
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return [
            spriteId + "+E+S+W",
            spriteId + "+E+S",
            spriteId + "+E+W",
            spriteId + "+E",
            spriteId + "+N+E+S+W",
            spriteId + "+N+E+S",
            spriteId + "+N+E+W",
            spriteId + "+N+E",
            spriteId + "+N+S+W",
            spriteId + "+N+S",
            spriteId + "+N+W",
            spriteId + "+N",
            spriteId + "+S+W",
            spriteId + "+S",
            spriteId + "+W",
            spriteId + ""
            ];
    };
    this.setSupportPalette = function()
    {
        return false;
    };
    this.getDefaultPalette = function()
    {
        return null;
    };
};
Constructor.prototype = TERRAIN;
var __BASE8 = new Constructor();
