var Constructor = function()
{

    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.isTransporter()) {
				return 5;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of Transport Units by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_trns+def";
    };
    this.getName = function()
    {
        return qsTr("Transport Units Defense+");
    };
    this.getGroup = function()
    {
        return qsTr("Group");
    };
    this.getCosts = function()
    {
        return 1;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_TRNS_DEF = new Constructor();
