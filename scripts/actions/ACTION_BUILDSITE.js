var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        var player = building.getOwner();
        if ((unit === null) &&
            (building !== null) &&
            (player !== null) &&
            (player === map.getCurrentPlayer())) {
                if(player.getFunds() >= 7500) {
                    return true;
                }
        }
        return false;
    };
    this.getActionText = function(map)
    {
        return qsTr("Build");
    };
    this.getIcon = function(map)
    {
        return "build";
    };
    this.isFinalStep = function(action, map)
    {
        if (action.getInputStep() === 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    };


    this.perform = function(action, map)
    {
        action.startReading();
        var unitID = action.readDataString();
        var building = action.getTargetBuilding();
        var player = building.getOwner();
        var target = action.getTarget();
        var unit = map.spawnUnit(target.x, target.y, unitID, player, 0, true);
        // pay for the unit
        player.addFunds(-action.getCosts());
    };

    this.getStepInputType = function(action, map)
    {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0)
        {
            return "MENU";
        }
        return "";
    };

    this.checkCoastal = function(building) {
        var x = building.getX();
        var y = building.getY();
        var terrain = map.getTerrain(x,y)
        
        var coast = terrain.getSurroundings("BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR", true, false, GameEnums.Directions_Direct, false, true);

        if(coast != "") {
            return true;
        }
        return false;
    }

    this.getStepData = function(action, data, map)
    {
        var building = action.getTargetBuilding();
        var types = ["FACTORY","AIRPORT"];
        var names = ["Factory", "Airport"];
        if(ACTION_BUILDSITE.checkCoastal(building) === true) {
            types.push("HARBOUR");
            names.push("Harbour");
            types.push("AMPHIBIOUSFACTORY");
            names.push("Naval Factory");
        }
        types.push("RADAR");
        names.push("Radar");
        types.push("TOWER");
        names.push("Tower");
        types.push("POWERPLANT");
        names.push("Powerplant");
        types.push("MINE");
        names.push("Oil Well");
        var funds = map.getCurrentPlayer().getFunds();
        for (i = 0; i < types.length; i++) {
            var name = names[i];
            var costs = 7500;
            var enabled = false;
            if (costs <= funds) {
                enabled = true;
            }
            data.addData(name + " " + costs.toString(),types[i],types[i], costs, enabled);
        }
    };

    this.perform = function (action) {
        action.startReading();
        var player = map.getCurrentPlayer();
        var building = action.getTargetBuilding();
        var x = building.getX();
        var y = building.getY();
        var buildingID = action.readDataString();
        var terrain = map.getTerrain(x,y);

        map.getCurrentPlayer().addFunds(-action.getCosts());
        terrain.loadBuilding(buildingID);
        terrain.getBuilding().setOwner(player);
    };

    this.getName = function()
    {
        return qsTr("Upgrade Buildsite");
    };
    this.getDescription = function()
    {
        return qsTr("Turn this buildsite into a functional building.");
    };
}

Constructor.prototype = ACTION;
var ACTION_BUILDSITE = new Constructor();
