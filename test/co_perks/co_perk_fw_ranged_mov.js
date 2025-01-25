var Constructor = function()
{

    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getBaseMaxRange() > 1) {
				return 1;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the move of Ranged Units by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_ranged+mov";
    };
    this.getName = function()
    {
        return qsTr("Ranged Units Move+");
    };
    this.getGroup = function()
    {
        return qsTr("Group");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_RANGED_MOV = new Constructor();
