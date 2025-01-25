var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender, action, luckmode, map)
    {
		if (CO_PERK.isActive(co))
		{
			if (map !== null)
			{
				if (map.onMap(atkPosX, atkPosY))
				{
					var building = map.getTerrain(atkPosX, atkPosY).getBuilding();
					if (building !== null)
                    {
                        return -10;
                    }
				}
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Decreases the attack from buildings by 10%.");
    };
    this.getIcon = function(map)
    {
        return "country_hick";
    };
    this.getName = function()
    {
        return qsTr("Building Attack-");
    };
    this.getGroup = function()
    {
        return qsTr("Terrain Debuff");
    };
    this.getCosts = function()
    {
        return -1;
    };
    this.getPerkEnabled = function(co,map) {
        return false;
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_COUNTRY_HICK = new Constructor();
