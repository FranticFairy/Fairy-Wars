var Constructor = function()
{

    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            var baseUnit = ACTION_HANDLER.getBase(defender.getUnitID());
            if(baseUnit === "FW_SS") {
				return 5;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of Submarines by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_sub+def";
    };
    this.getName = function()
    {
        return qsTr("Submarines Defense+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return 1;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_SUB_DEF = new Constructor();
