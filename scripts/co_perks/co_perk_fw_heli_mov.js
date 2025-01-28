var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Heli) {
				return ACTION_HANDLER.getPerkBuffValue("mov");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Helicopters by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_heli+mov";
    };
    this.getName = function()
    {
        return qsTr("Helicopters Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Air");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("mov");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_HELI_MOV = new Constructor();
