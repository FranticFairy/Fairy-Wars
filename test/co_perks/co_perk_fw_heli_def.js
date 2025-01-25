var Constructor = function()
{

    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getUnitType() === GameEnums.UnitType_Heli) {
				return 5;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of Helicopters by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_heli+def";
    };
    this.getName = function()
    {
        return qsTr("Helicopters Defense+");
    };
    this.getGroup = function()
    {
        return qsTr("Air");
    };
    this.getCosts = function()
    {
        return 1;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_HELI_DEF = new Constructor();
