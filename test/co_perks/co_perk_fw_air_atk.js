var Constructor = function()
{

    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(attacker.getUnitType() === GameEnums.UnitType_Plane) {
				return 5;
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the attack of Planes by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_air+atk";
    };
    this.getName = function()
    {
        return qsTr("Planes Attack+");
    };
    this.getGroup = function()
    {
        return qsTr("Air");
    };
    this.getCosts = function()
    {
        return 2;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_AIR_ATK = new Constructor();
