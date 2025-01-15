var Constructor = function()
{
    this.perform = function(x, y)
    {
        var terrain = null
        terrain = map.getTerrain(x, y);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x+1, y);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x+1, y+1);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x+1, y-1);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x-1, y);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x-1, y+1);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x-1, y-1);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x, y+1);
        if(terrain != null) {
            terrain.loadSprites()
        }
        terrain = map.getTerrain(x, y-1);
        if(terrain != null) {
            terrain.loadSprites()
        }
    };
    this.performSingle = function(x, y)
    {
        var terrain = null
        terrain = map.getTerrain(x, y);
        if(terrain != null) {
            terrain.loadSprites()
        }
    };
    this.getActionText = function(map)
    {
        return qsTr("Load Sprites");
    };
    this.getName = function()
    {
        return qsTr("Load Sprites");
    };
    this.getDescription = function()
    {
        return qsTr("Handler for updating terrain sprites.");
    };
}

Constructor.prototype = ACTION;
var ACTION_TERRAIN_LOADSPRITES = new Constructor();
