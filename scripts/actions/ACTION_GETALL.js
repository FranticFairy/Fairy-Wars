/*
        coIDs = coSpriteManager.getCoIds();
        perkIDs = coPerkSpriteManager.getLoadedPerks();
        terrainIDs = terrainSpriteManager.getTerrainsSorted();
        buildingIDs = buildingSpriteManager.getLoadedBuildings();
        unitIDs = unitSpriteManager.getUnitsSorted();
*/

var Constructor = function () {

        this.getCOs = function() {
                return coSpriteManager.getCoIds();
        }

        this.getPerks = function() {
                return coPerkSpriteManager.getLoadedPerks();
        }

        this.getTerrains = function() {
                return terrainSpriteManager.getTerrainsSorted();
        }

        this.getBuildings = function() {
                return buildingSpriteManager.getLoadedBuildings();
        }

        this.getUnits = function() {
                return unitSpriteManager.getUnitsSorted();
        }

        this.getActionText = function(map)
        {
            return qsTr("Get Data");
        };
        this.getName = function()
        {
            return qsTr("Get Data");
        };
        this.getDescription = function()
        {
            return qsTr("Handler for getting IDs of loaded assets.");
        };
    }
    
    Constructor.prototype = ACTION;
    var ACTION_GETALL = new Constructor();
    