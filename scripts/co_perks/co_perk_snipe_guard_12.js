var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isAttacker, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
			var rangedAttacked = (Math.abs(atkPosX - defPosX) + Math.abs(atkPosY - defPosY) > 1);
			if (rangedAttacked)
			{
				return 12;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the indirect-fire defense by 12%.");
    };
    this.getIcon = function(map)
    {
        return "snipeShield";
    };
    this.getName = function()
    {
        return qsTr("Indirect Defense++");
    };
    this.getGroup = function()
    {
        return qsTr("Defensive");
    };
    this.getCosts = function()
    {
        return 2;
    };
    this.getPerkEnabled = function(co,map) {
        return false;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_SNIPE_GUARD_12 = new Constructor();
