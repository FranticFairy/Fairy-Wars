var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            var baseUnit = ACTION_HANDLER.getBase(unit.getUnitID());
            if(baseUnit === "FW_SS") {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Submarines by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_sub+mov";
    };
    this.getName = function()
    {
        return qsTr("Submarines Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_SUB_MOV = new Constructor();
