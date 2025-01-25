var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getUnitType() === GameEnums.UnitType_Fieldgun) {
				return 5;
            }
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of field guns by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_fieldgun+atk";
    };
    this.getName = function()
    {
        return qsTr("Field Gun Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return 1;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_FIELDGUN_ATK = new Constructor();
