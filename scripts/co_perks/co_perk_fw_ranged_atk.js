var Constructor = function()
{

    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getBaseMaxRange() > 1) {
				return ACTION_HANDLER.getPerkBuffValue("atk");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of Ranged Units by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_ranged+atk";
    };
    this.getName = function()
    {
        return qsTr("Ranged Units Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Group");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("atk");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_RANGED_ATK = new Constructor();
