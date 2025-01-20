var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Boat");
    };
    this.movementpointsTable = [["BEACH", 1],
                                ["HARBOUR", 1],
                                ["TEMPORARY_HARBOUR", 1],
                                ["FOG", 1],
                                ["SEA", 1],
                                ["ROUGH_SEA", 2],
                                ["REAF", 2],
                                ["TELEPORTTILE", 0],
                                ["OILRIG", 1],];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        var currentUnit = terrain.getUnit();
        if ((currentUnit !== null && unit !== null) &&
            (unit.getOwner().isEnemy(currentUnit.getOwner())))
        {
            if (!currentUnit.isStealthed(unit.getOwner()) || trapChecking)
            {
                if (currentUnit.getUnitType() !== GameEnums.UnitType_Air && unit.getUnitID() != "FW_SEAMINE")
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
            (terrain.getBaseTerrainID() === "SEA" ||
             terrain.getBaseTerrainID() === "LAKE"))
        {
            return 1;
        }
        else if (id === "OILRIG")
        {
            if (terrainId === "SEA" ||
                terrainId === "LAKE" )
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        if ((id === "TELEGATE") && (unit !== null) && (unit.getOwner().isAlly(terrain.getBuilding().getOwner())))
        {
            return 0;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_BOAT.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_BOAT = new Constructor();
