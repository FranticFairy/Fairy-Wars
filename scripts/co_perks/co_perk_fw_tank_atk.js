var Constructor = function()
{

    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            var baseUnit = ACTION_HANDLER.getBase(attacker.getUnitID());
            if(baseUnit === "FW_LTANK" || baseUnit === "FW_MTANK" || baseUnit === "FW_HTANK" || baseUnit === "FW_SHTANK") {
				return ACTION_HANDLER.getPerkBuffValue("atk");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of Tanks by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_tank+atk";
    };
    this.getName = function()
    {
        return qsTr("Tanks Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("atk");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_TANK_ATK = new Constructor();
