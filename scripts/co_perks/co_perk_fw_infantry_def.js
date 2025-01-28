var Constructor = function()
{

    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getUnitType() === GameEnums.UnitType_Infantry) {
				return ACTION_HANDLER.getPerkBuffValue("def");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of Infantry by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_infantry+def";
    };
    this.getName = function()
    {
        return qsTr("Infantry Defense+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("def");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_INFANTRY_DEF = new Constructor();
