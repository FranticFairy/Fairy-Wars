var Constructor = function()
{

    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getBaseMaxRange() > 1) {
				return ACTION_HANDLER.getPerkBuffValue("def");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of Ranged Units by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_ranged+def";
    };
    this.getName = function()
    {
        return qsTr("Ranged Units Defense+");
    };
    this.getGroup = function()
    {
        return qsTr("Group");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("def");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_RANGED_DEF = new Constructor();
