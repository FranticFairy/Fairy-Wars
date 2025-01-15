AMPHIBIOUSFACTORY.constructionList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC"];
AMPHIBIOUSFACTORY.constructionListR = ["FW_ML", "FW_FF", "FW_DD", "FW_CL", "FW_CA", "FW_BB", "FW_CV", "FW_SS", "FW_TR", "FW_AX"];
AMPHIBIOUSFACTORY.constructionListB = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC", "FW_ML", "FW_FF", "FW_TR", "FW_AX"];
AMPHIBIOUSFACTORY.constructionListS = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY" , "FW_ATGUN" , "FW_IGUN" , "FW_HOWITZER" , "FW_FLAK" , "FW_MOTOR" , "FW_RECON" , "FW_ACAR" , "FW_TRUCK" , "FW_HALFTRACK" , "FW_APC", "FW_ML", "FW_FF", "FW_TR", "FW_AX", "FW_DD", "FW_SS"];
AMPHIBIOUSFACTORY.getConstructionList = function (building) {
    var bestAdjacent = "";
    var map = building.getMap();
    if (map != null) {
        var targetFields = [Qt.point(building.getX() + 1, building.getY()),
        Qt.point(building.getX() - 1, building.getY()),
        Qt.point(building.getX(), building.getY() - 1),
        Qt.point(building.getX(), building.getY() + 1)];
        for (var i = 0; i < targetFields.length; i++) {
            if (map.onMap(targetFields[i].x, targetFields[i].y)) {
                var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                var terrainID = terrain.getID();
                if (terrainID === "RIVER" && bestAdjacent === "") {
                    bestAdjacent = "RIVER";
                }
                if (terrainID === "BEACH" && bestAdjacent != "SEA") {
                    bestAdjacent = "BEACH";
                }
                if (terrainID === "SEA" && bestAdjacent != "SEA") {
                    bestAdjacent = "SEA";
                }
            }

        }
    }
    switch (bestAdjacent) {
        case "BEACH":
            return AMPHIBIOUSFACTORY.constructionListB;
            break;
        case "SEA":
            return AMPHIBIOUSFACTORY.constructionListS;
            break;
        default:
            return AMPHIBIOUSFACTORY.constructionList;
            break;
    }
};

AMPHIBIOUSFACTORY.loadSprites = function(building, neutral, map)
{
    if (building.getOwnerID() >= 0 && !neutral)
    {
        building.loadSprite("amphac", false);
        building.loadSpriteV2("amphac+mask", GameEnums.Recoloring_Matrix);
    }
    else
    {
        building.loadSprite("amphac+neutral", false);
    }
};
AMPHIBIOUSFACTORY.onWeatherChanged = function(building, weather, map)
{	
};
AMPHIBIOUSFACTORY.getName = function()
{
    return qsTr("Naval Factory");
};

AMPHIBIOUSFACTORY.getDescription = function()
{
    return qsTr("A light factory that can produce a mixture of light land units and, depending on adjacent tiles, light sea units.");
};