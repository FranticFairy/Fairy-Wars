var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getUnitType() === GameEnums.UnitType_Naval_Medium) {
				return 5;
            }
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of medium ships by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_mship+def";
    };
    this.getName = function()
    {
        return qsTr("Medium Ship Defense+");
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
var CO_PERK_FW_MSHIP_DEF = new Constructor();
