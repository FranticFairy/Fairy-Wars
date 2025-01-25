var Constructor = function()
{
    this.getCostModifier = function(co, id, baseCost, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
			return -baseCost * 0.05;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Production cost -5% again.");
    };
    this.getIcon = function(map)
    {
        return "firesale";
    };
    this.getName = function()
    {
        return qsTr("Unit Cost--");
    };
    this.getCosts = function()
    {
        return 3;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_SALE_PRICE_8 = new Constructor();
