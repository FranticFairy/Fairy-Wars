var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Hovercraft");
    };
    this.movementpointsTable = [];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        var id = terrain.getID();
        var baseId = terrain.getBaseTerrainID();
        var currentBaseId = currentTerrain.getBaseTerrainID();
        var currentId = currentTerrain.getID();
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
        var costs = MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_HOVERCRAFT.movementpointsTable);
        if (baseId === "LAKE" ||
            currentBaseId === "LAKE" ||
            currentId === "BEACH")
        {
            return costs;
        }
        var currentGroup = currentTerrain.getTerrainGroup();
        var targetGroup = terrain.getTerrainGroup();
        // sea tile near land?
        if (currentGroup === 0 && map !== null)
        {
            // check all fields we can attack
            var valid = false;
            var fields = globals.getCircle(1, 2);
            var size = fields.size();
            for (var i = 0; i < size; i++)
            {
                var x = fields.at(i).x + terrain.getX();
                var y = fields.at(i).y + terrain.getY();
                if (map.onMap(x, y))
                {
                    var areaTerrain = map.getTerrain(x, y);
                    if (areaTerrain.getTerrainGroup() > 0 || 
                        areaTerrain.getID() === "BEACH")
                    {
                        // not a sea tile. -> land tile
                        valid = true;
                        break;
                    }
                }
            }
            if (!valid)
            {
                return -1;
            }
        }
        if (currentGroup === targetGroup)
        {
            return costs;
        }
        else
        {
            // from sea to land or vice versa
            if (currentGroup === 0 || targetGroup === 0)
            {
                // fields we can move from land to sea
                var crossable = ["HARBOUR", "BEACH", "TEMPORARY_HARBOUR", "RIVER", "TELEPORTTILE"];
                for (var i = 0; i < crossable.length; i++)
                {
                    if (crossable[i] === id ||
                        crossable[i] === currentId)
                    {
                        return costs;
                    }
                }
            }
            else
            {
                return costs;
            }
        }
        return -1;
    };

    this.getSupportsFastPfs = function()
    {
        return false;
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_HOVERCRAFT = new Constructor();
