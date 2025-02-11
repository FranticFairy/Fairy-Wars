var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
			if (unit.isTransporter())
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the movement range of all transporters by 1.");
    };
    this.getIcon = function(map)
    {
        return "apcboost";
    };
    this.getName = function()
    {
        return qsTr("Transport Move+");
    };
    this.getCosts = function()
    {
        return 1;
    };
    this.getPerkEnabled = function(co,map) {
        return false;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_APCBOOST = new Constructor();
