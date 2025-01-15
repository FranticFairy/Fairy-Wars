var Constructor = function()
{
    this.getName = function()
    {
        return qsTr("Piperunner");
    };
    this.movementpointsTable = [];

    this.getMovementpoints = function(terrain, unit, currentTerrain, trapChecking = false, map)
    {
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_PIPERUNNER.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_PIPERUNNER = new Constructor();
