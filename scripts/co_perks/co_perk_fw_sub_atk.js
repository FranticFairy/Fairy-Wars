var Constructor = function()
{

    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            var baseUnit = ACTION_HANDLER.getBase(attacker.getUnitID());
            if(baseUnit === "FW_SS") {
				return ACTION_HANDLER.getPerkBuffValue("atk");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of Submarines by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_sub+atk";
    };
    this.getName = function()
    {
        return qsTr("Submarines Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("atk");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_SUB_ATK = new Constructor();
