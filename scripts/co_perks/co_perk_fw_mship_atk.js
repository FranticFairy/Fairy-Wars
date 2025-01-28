var Constructor = function()
{

    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getUnitType() === GameEnums.UnitType_Naval_Medium) {
				return ACTION_HANDLER.getPerkBuffValue("atk");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of Medium Ships by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_mship+atk";
    };
    this.getName = function()
    {
        return qsTr("Medium Ships Attack+");
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
var CO_PERK_FW_MSHIP_ATK = new Constructor();
