var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getUnitType() === GameEnums.UnitType_Plane_Large) {
				return 5;
            }
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the defense of large planes by 5%.");
    };
    this.getIcon = function(map)
    {
        return "fw_plane+def";
    };
    this.getName = function()
    {
        return qsTr("Large Plane Defense+");
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
var CO_PERK_FW_PLANE_DEF = new Constructor();
