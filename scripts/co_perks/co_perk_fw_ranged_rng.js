var Constructor = function()
{

    this.getFirerangeModifier = function(co, unit, posX, posY, map)
    {
        if (CO_PERK.isActive(co))
        {
            if(unit.getBaseMaxRange() > 1) {
                if (unit.getBaseMaxRange() > 1)
                {
                    return 1;
                }
            }
        }
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the range of Ranged Units by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_ranged+rng";
    };
    this.getName = function()
    {
        return qsTr("Ranged Units Range+");
    };
    this.getGroup = function()
    {
        return qsTr("Group");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_RANGED_RNG = new Constructor();
