var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
			return -10;
		}
        return 0;
    };
    this.getPowerChargeBonus = function(co, map)
    {
        if (CO_PERK.isActive(co))
        {
            return 10;
        }
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Decreases the attack of units by 10% and increases the power charge speed by 10%.");
    };
    this.getIcon = function(map)
    {
        return "underpowered";
    };
    this.getName = function()
    {
        return qsTr("Attack-, Charge+");
    };
    this.getGroup = function()
    {
        return qsTr("Offensive Debuff");
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
var CO_PERK_UNDERPOWERED = new Constructor();
