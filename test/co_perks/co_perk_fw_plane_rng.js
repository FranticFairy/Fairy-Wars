var Constructor = function()
{

    this.getFirerangeModifier = function(co, unit, posX, posY, map)
    {
        if (CO_PERK.isActive(co))
        {
            if(unit.getUnitType() === GameEnums.UnitType_Plane_Large) {
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
        return qsTr("Increases the range of Large Planes by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_plane+rng";
    };
    this.getName = function()
    {
        return qsTr("Large Planes Range+");
    };
    this.getGroup = function()
    {
        return qsTr("Air");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_PLANE_RNG = new Constructor();
