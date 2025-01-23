var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Wheels");
    };
    this.movementpointsTable = [["RUIN", 2],
                                ["PLAINS", 2],
                                ["PLAINS_DESTROYED", 2],
                                ["PLAINS_PLASMA", 2],
                                ["BEACH", 2],
                                ["DESTROYEDWELD", 2],
                                ["DESERT", 2],
                                ["DESERT_DESTROYEDWELD", 2],
                                ["DESERT_PATH", 1],
                                ["DESERT_PATH1", 1],
                                ["BRIDGE", 1],
                                ["BRIDGE1", 1],
                                ["BRIDGE2", 1],
                                ["PONTOON", 1],
                                ["STREET", 1],
                                ["SNOW_STREET", 1],
                                ["STREET1", 1],
                                ["AIRPORT", 1],
                                ["FACTORY", 1],
                                ["HARBOUR", 1],
                                ["BUILDSITE", 1],
                                ["MINE", 1],
                                ["HQ", 1],
                                ["FORD", 4],
                                ["PIPESTATION", 1],
                                ["POWERPLANT", 1],
                                ["AMPHIBIOUSFACTORY", 1],
                                ["RADAR", 1],
                                ["TOWER", 1],
                                ["TOWN", 1],
                                ["SILO", 1],
                                ["DEPOT", 1],
                                ["SILO_ROCKET", 1],
                                ["LABOR", 1],
                                ["TEMPORARY_AIRPORT", 1],
                                ["TEMPORARY_HARBOUR", 1],
                                ["ZDESTROYED_GATE_E_W", 1],
                                ["ZDESTROYED_GATE_N_S", 1],
                                ["FOREST", 3],
                                ["FOREST1", 3],
                                ["FOREST2", 3],
                                ["FOREST3", 3],
                                ["WASTELAND", 3],
                                ["TRENCH", 3],
                                ["DESERT_TRY_RIVER", 3],
                                ["DESERT_FOREST", 3],
                                ["DESERT_FOREST1", 3],
                                ["DESERT_WASTELAND", 3],
                                ["DESERT_RUIN", 2],
                                ["SNOW", 3],
                                ["SNOW_DESTROYEDWELD", 3],
                                ["SNOW_FOREST", 4],
                                ["SNOW_FOREST1", 4],
                                ["SNOW_FOREST2", 4],
                                ["SNOW_WASTELAND", 4],
                                ["SNOW_RUIN", 3],
                                ["WASTE",  2],
                                ["WASTE_PATH", 1],
                                ["WASTE_FOREST", 3],
                                ["WASTE_WASTELAND", 3],
                                ["WASTE_RUIN", 2],
                                ["WASTE_DESTROYEDWELD", 2],
                                ["CREEPER", 1],
                                ["TELEPORTTILE", 0],
                                ["FORTHQ", 1],
                                ["FIELD_BASE", 1],
                                ["OILRIG", 1],];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        var currentUnit = terrain.getUnit();
        if ((currentUnit !== null && unit !== null) &&
            (unit.getOwner().isEnemy(currentUnit.getOwner())))
        {
            if (!currentUnit.isStealthed(unit.getOwner()) || trapChecking)
            {
                if (UNIT.unitTypeToDomain(currentUnit.getUnitType()) !== GameEnums.UnitType_Air)
                {
                    if(UNIT.unitTypeToDomain(currentUnit.getUnitType() === GameEnums.UnitType_Naval && id === "BRIDGE")) {

                    } else if(!currentUnit.getHidden()) {
                        return -1;
                    }
                }
            }
        }
        var id = terrain.getID();
        if ((id === "ZGATE_E_W" || id === "ZGATE_N_S") &&
                (unit !== null) &&
                (unit.getOwner().isAlly(terrain.getBuilding().getOwner())))
        {
            return 1;
        }
        if ((id === "TELEGATE") && (unit !== null) && (unit.getOwner().isAlly(terrain.getBuilding().getOwner())))
        {
            return 0;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_TIRE_A.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_TIRE_A = new Constructor();
