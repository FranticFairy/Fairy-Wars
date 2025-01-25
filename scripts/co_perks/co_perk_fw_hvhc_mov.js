var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Vehicle_Heavy) {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Heavy Vehicles by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_hvhc+mov";
    };
    this.getName = function()
    {
        return qsTr("Heavy Vehicles Move+");
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
var CO_PERK_FW_HVHC_MOV = new Constructor();
