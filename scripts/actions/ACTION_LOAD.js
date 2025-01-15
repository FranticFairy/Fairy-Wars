ACTION_LOAD.isLoadingTerrain = function(transporter, terrain)
{
    var unitID = transporter.getUnitID();
    var terrainId = terrain.getID();
    if (unitID === "FW_TRANSPORT")
    {
        if (terrainId === "AIRPORT" ||
            terrainId === "TEMPORARY_AIRPORT")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else if (unitID === "FW_TR")
    {
        if ((terrainId === "BRIDGE") ||
            (terrainId === "BRIDGE1") ||
            (terrainId === "BRIDGE2"))
        {
            return false;
        }
    }
    return true;
};