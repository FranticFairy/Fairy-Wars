var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
			if (attacker.isStatusStealthed())
			{
				return 15;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the dive/hide attack by 15%.");
    };
    this.getIcon = function(map)
    {
        return "backstab";
    };
    this.getName = function()
    {
        return qsTr("Stealth Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Offensive");
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
var CO_PERK_BACKSTAB = new Constructor();
