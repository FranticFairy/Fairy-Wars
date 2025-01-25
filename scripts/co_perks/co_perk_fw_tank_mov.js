var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            var baseUnit = ACTION_HANDLER.getBase(unit.getUnitID());
            if(baseUnit === "FW_LTANK" || baseUnit === "FW_MTANK" || baseUnit === "FW_HTANK" || baseUnit === "FW_SHTANK") {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Tanks by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_tank+mov";
    };
    this.getName = function()
    {
        return qsTr("Tanks Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_TANK_MOV = new Constructor();
