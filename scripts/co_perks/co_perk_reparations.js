var Constructor = function()
{
    this.postBattleActions = function(co, attacker, atkDamage, defender, gotAttacked, weapon, action, map)
    {
		if (CO_PERK.isActive(co))
		{
			if (gotAttacked === false && attacker.getOwner() === co.getOwner())
			{
                if (atkDamage > 0 && defender !== null)
				{
					co.getOwner().addFunds(-atkDamage / 10.0 * defender.getUnitCosts() * 0.02);
				}
			}
		}
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("2% of Damage is lost as funds");
    };
    this.getIcon = function(map)
    {
        return "reparations";
    };
    this.getName = function()
    {
        return qsTr("Damage Payment-");
    };
    this.getGroup = function()
    {
        return qsTr("General Debuff");
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
var CO_PERK_REPARATIONS = new Constructor();
