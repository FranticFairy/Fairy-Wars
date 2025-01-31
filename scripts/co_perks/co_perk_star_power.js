var Constructor = function()
{
    this.getPowerChargeBonus = function(co, map)
    {
        if (CO_PERK.isActive(co))
        {
            return 20;
        }
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Power meter fills up 20% faster.");
    };
    this.getIcon = function(map)
    {
        return "starpower";
    };
    this.getName = function()
    {
        return qsTr("Charge+");
    };
    this.getGroup = function()
    {
        return qsTr("Power");
    };
    this.getCosts = function()
    {
        return 3;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_STAR_POWER = new Constructor();
