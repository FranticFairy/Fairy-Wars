var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(6);
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setVision(1);

    };

    this.getMovementType = function()
    {
        return "MOVE_TANK";
    };

    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };

    this.getName = function()
    {
        return qsTr("APC");
    };

    this.getDescription = function()
    {
        return qsTr("A tougher Halftrack, can take quite a beating and can carry two Infantry units, but no Field Guns. Can perform resupplies.");
    };

    this.getBaseCost = function()
    {
        return 6000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.getLoadingPlace = function()
    {
        return 2;
    };
    this.transportList = ["FW_INFANTRY" , "FW_HVY_INFANTRY" , "FW_AST_INFANTRY"];

    this.actionList = ["ACTION_BUILD_CARRY","ACTION_LOAD","ACTION_UNLOAD", "ACTION_SUPPORTALL_RATION", "ACTION_LOADOUT", "ACTION_JOIN",  "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

    this.getActions = function (unit, map) {
        var baseActions = ["ACTION_BUILD_CARRY","ACTION_LOAD","ACTION_UNLOAD", "ACTION_SUPPORTALL_RATION", "ACTION_LOADOUT", "ACTION_JOIN",  "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];

        var variables = unit.getVariables();
        var displayIconVar = variables.createVariable("displayIcon");
        var displayIcon = displayIconVar.readDataString();
        switch (displayIcon) {
            case "+antimine":
                baseActions.push("ACTION_DISABLE_MINE");
                return (baseActions);
            default:
                return baseActions;
        }
        // returns a string id list of the actions this unit can perform
    };

    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
            ACTION_SUPPORTALL_RATION.giveRation(unit, map);
        }
        UNIT.transporterRefilling(unit, map);
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_APC = new Constructor();
