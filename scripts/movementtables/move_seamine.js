var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Seamine");
    };
    this.movementpointsTable = [["SEA", 1],
                                ["FOG", 1],
                                ["ROUGH_SEA", 2],
                                ["REAF", 2],
                                ["OILRIG", 1],];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        var building = terrain.getBuilding();
        var currentUnit = terrain.getUnit();
        if ((currentUnit !== null && unit !== null) &&
            (unit.getOwner().isEnemy(currentUnit.getOwner())))
        {
            if (!currentUnit.isStealthed(unit.getOwner()) || trapChecking)
            {
                if (currentUnit.getUnitType() !== GameEnums.UnitType_Air)
                {
                    if(!currentUnit.getHidden()) {
                        return -1;
                    }
                }
            }
        }
        var terrainId = terrain.getTerrainID();
        var id = terrain.getID();
        var shipBridges = true;
        if (map !== null)
        {
            shipBridges = map.getGameRules().getShipBridges();
        }
        if (shipBridges &&
            id === "BRIDGE" &&
            (terrain.getBaseTerrainID() === "SEA"))
        {
            return 1;
        }
        else if (id === "OILRIG")
        {
            if (terrainId === "SEA")
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_SEAMINE.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_SEAMINE = new Constructor();
