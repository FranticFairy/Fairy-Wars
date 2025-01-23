var Constructor = function()
{

    this.init = function(unit)
    {
        unit.setAmmo1(2);
        unit.setMaxAmmo1(2);
        unit.setWeapon1ID("");

        unit.setAmmo2(2);
        unit.setMaxAmmo2(2);
        unit.setWeapon2ID("");

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(5);
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
        return qsTr("Dozer");
    };

    this.getDescription = function()
    {
        return qsTr("A utility unit, capable of building Temp (Air)Ports, as well as laying and clearing landmines and building Temp Bridges.");
    };

    this.getBaseCost = function()
    {
        return 6000;
    };

	this.canMoveAndFire = function(unit)
    {
        return true;
    };

    this.actionList = ["ACTION_PLACE_LANDMINE", "ACTION_DISABLE_MINE", "ACTION_PLACE_PONTOON", "ACTION_BUILD_DEPOT", "ACTION_BUILD_TEMP_HARBOUR", "ACTION_BUILD_TEMP_AIRPORT", "ACTION_CLEAR_FOREST", "ACTION_BUILD_ROAD", "ACTION_BUILD_TRENCH", "ACTION_LOAD","ACTION_UNLOAD","ACTION_LOADOUT", "ACTION_RESTOCK", "ACTION_JOIN", "ACTION_WAIT", "ACTION_CO_UNIT_0", "ACTION_CO_UNIT_1"];
    this.startOfTurn = function(unit, map)
    {
        if (unit.getTerrain() !== null)
        {
        }
    };

    this.getShowInEditor = function() {
        return true;
    }


}

Constructor.prototype = UNIT;
var FW_DOZER = new Constructor();
