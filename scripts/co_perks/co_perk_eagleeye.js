var Constructor = function()
{
    this.getVisionrangeModifier = function(co, unit, posX, posY, map)
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
        return qsTr("Increases the vision range of units by 1 again.");
    };
    this.getIcon = function(map)
    {
        return "eagleeye";
    };
    this.getName = function()
    {
        return qsTr("Vision++");
    };
    this.getCosts = function()
    {
        return 2;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_EAGLEEYE = new Constructor();
