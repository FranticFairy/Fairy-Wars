var Constructor = function()
{
    this.getRepairBonus = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            return 1;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the base repair by 1 again.");
    };
    this.getIcon = function(map)
    {
        return "gearHead";
    };
    this.getName = function()
    {
        return qsTr("Repair++");
    };
    this.getCosts = function()
    {
        return 2;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_GEAR_HEAD = new Constructor();
