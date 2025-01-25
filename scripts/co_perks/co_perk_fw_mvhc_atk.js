var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getUnitType() === GameEnums.UnitType_Vehicle_Medium) {
				return 5;
            }
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of medium vehicles by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_mvhc+atk";
    };
    this.getName = function()
    {
        return qsTr("Medium Vehicle Attack+");
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
var CO_PERK_FW_MVHC_ATK = new Constructor();
