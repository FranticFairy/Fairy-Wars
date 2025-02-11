var Constructor = function()
{
	this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (isDefender)
		{
			return -25;
		}
	}
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Decreases the counter attack by 25%.");
    };
    this.getIcon = function(map)
    {
        return "surrender";
    };
    this.getName = function()
    {
        return qsTr("Counterattack-");
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
var CO_PERK_SURRENDER = new Constructor();
