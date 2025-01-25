var Constructor = function()
{
    this.getCOUnitRange = function(co, map)
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
        return qsTr("Increases the CO-Zone of the CO by 1.");
    };
    this.getIcon = function(map)
    {
        return "co0";
    };
    this.getName = function()
    {
        return qsTr("CO Zone+");
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
var CO_PERK_LEADER = new Constructor();
