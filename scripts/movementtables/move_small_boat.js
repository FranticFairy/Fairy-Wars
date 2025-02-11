var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Small boat");
    };
    this.movementpointsTable = [];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        var terrainId = terrain.getTerrainID();
        var id = terrain.getID();
        var shipBridges = true;
        if (map !== null)
        {
            shipBridges = map.getGameRules().getShipBridges();
        }
        if (shipBridges &&
            id === "BRIDGE" &&
            (terrain.getBaseTerrainID() === "SEA" ||
             terrain.getBaseTerrainID() === "LAKE" ||
             terrain.getBaseTerrain("RIVER", true) !== null))
        {
            return 1;
        }
        else if (id === "OILRIG")
        {
            if (terrainId === "SEA" ||
                terrainId === "LAKE")
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_SMALL_BOAT.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_SMALL_BOAT = new Constructor();
