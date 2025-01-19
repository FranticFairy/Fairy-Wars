var Constructor = function()
{
    this.canBePerformed = function(action, map)
    {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        
        if(unit != null) {
            var variables = unit.getVariables();
            
            var variantListVar = variables.createVariable("variantList");
            var units = variantListVar.readDataString().split(',');

            if ((building !== null) && (units.length > 0))
            {
                if (ACTION_LOADOUT.canBuildUnits(unit, map, units))
                {
                    return true;
                }
            }

        } else {
            return false;
        }
        return false;
    };
    this.getActionText = function(map)
    {
        return qsTr("Modify unit");
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
        var unit = action.getTargetUnit();
        var player = unit.getOwner();
        var target = action.getTarget();
        unit.transformUnit(unitID);
        // pay for the unit
        player.addFunds(-action.getCosts());
        unit.setHasMoved(true);
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

    this.canBuildUnits = function(unit, map, units)
    {
        var player = unit.getOwner();
        var unitData = [];
        for (i = 0; i < units.length; i++)
        {
            var cost = player.getCosts(units[i], unit.getPosition());
            unitData.push([cost, units[i]]);
        }
        var funds = player.getFunds();
        for (i = 0; i < unitData.length; i++)
        {
            if (unitData[i][0] <= funds)
            {
                return true;
            }
        }
        return false;
    };

    this.getStepData = function(action, data, map)
    {
        var unit = action.getTargetUnit();
        var variables = unit.getVariables();
        
        var variantListVar = variables.createVariable("variantList");
        var units = variantListVar.readDataString().split(',');
        var player = unit.getOwner();
        var unitData = [];
        for (i = 0; i < units.length; i++)
        {
            var cost = player.getCosts(units[i], unit.getPosition());
            unitData.push([cost, units[i]]);
        }
        if (map !== null)
        {
            // only sort for humans player to maintain ai speed
            if (player.getBaseGameInput().getAiType() === GameEnums.AiTypes_Human)
            {
                unitData = Global.sortDataArray(unitData);
            }
        }
        var funds = player.getFunds();
        for (i = 0; i < unitData.length; i++)
        {
            var name = Global[unitData[i][1]].getName();
            var enabled = false;
            if (unitData[i][0] <= funds)
            {
                enabled = true;
            }
            data.addData(name + " " + unitData[i][0].toString(), unitData[i][1], unitData[i][1], unitData[i][0], enabled);
        }
    };

    this.getName = function()
    {
        return qsTr("Modify unit");
    };
    this.getDescription = function()
    {
        return qsTr("Allows you to upgrade a unit, or change it's loadout.");
    };
}

Constructor.prototype = ACTION;
var ACTION_LOADOUT = new Constructor();
