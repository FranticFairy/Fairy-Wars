var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Naval_Heavy) {
				return ACTION_HANDLER.getPerkBuffValue("mov");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Heavy Ships by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_hship+mov";
    };
    this.getName = function()
    {
        return qsTr("Heavy Ships Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("mov");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_HSHIP_MOV = new Constructor();
