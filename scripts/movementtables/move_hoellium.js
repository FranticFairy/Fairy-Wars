var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Oozium");
    };
    this.movementpointsTable = [];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        var terrainId = terrain.getTerrainID();
        var id = terrain.getID();
        if (id === "ZGATE_E_W" || id === "ZGATE_N_S" || id === "FORTHQ")
        {
            if ((unit !== null) && (unit.getOwner().isAlly(terrain.getBuilding().getOwner())))
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        else if (id === "OILRIG")
        {
            if (terrainId !== "SEA" &&
                terrainId !== "LAKE")
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_HOELLIUM.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_HOELLIUM = new Constructor();
