var Constructor = function()
{

    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getUnitType() === GameEnums.UnitType_Vehicle_Heavy) {
				return ACTION_HANDLER.getPerkBuffValue("def");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of Heavy Vehicles by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_hvhc+def";
    };
    this.getName = function()
    {
        return qsTr("Heavy Vehicles Defense+");
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
var CO_PERK_FW_HVHC_DEF = new Constructor();
