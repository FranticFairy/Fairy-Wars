var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getUnitType() === GameEnums.UnitType_Naval_Light) {
				return 5;
            }
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of light ships by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_lship+atk";
    };
    this.getName = function()
    {
        return qsTr("Light Ship Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Naval");
    };
    this.getCosts = function()
    {
        return 1;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_LSHIP_ATK = new Constructor();
