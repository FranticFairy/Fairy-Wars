var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.isTransporter()) {
				return ACTION_HANDLER.getPerkBuffValue("mov");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Transport Units by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_trns+mov";
    };
    this.getName = function()
    {
        return qsTr("Transport Units Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Group");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("mov");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_TRNS_MOV = new Constructor();
