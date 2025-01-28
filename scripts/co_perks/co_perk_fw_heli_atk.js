var Constructor = function()
{

    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getUnitType() === GameEnums.UnitType_Heli) {
				return ACTION_HANDLER.getPerkBuffValue("atk");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of Helicopters by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_heli+atk";
    };
    this.getName = function()
    {
        return qsTr("Helicopters Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Air");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("atk");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_HELI_ATK = new Constructor();
