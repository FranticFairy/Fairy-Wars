var Constructor = function()
{
    this.getPowerChargeBonus = function(co, map)
    {
        if (CO_PERK.isActive(co))
        {
            return -20;
        }
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Decreases the power charge speed by 20%.");
    };
    this.getIcon = function(map)
    {
        return "star_drain";
    };
    this.getName = function()
    {
        return qsTr("Charge-");
    };
    this.getGroup = function()
    {
        return qsTr("Power Debuff");
    };
    this.getCosts = function()
    {
        return -2;
    };
    this.getPerkEnabled = function(co,map) {
        return false;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_STAR_DRAIN = new Constructor();
