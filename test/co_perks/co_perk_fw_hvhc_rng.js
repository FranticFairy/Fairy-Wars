var Constructor = function()
{

    this.getFirerangeModifier = function(co, unit, posX, posY, map)
    {
        if (CO_PERK.isActive(co))
        {
            if(unit.getUnitType() === GameEnums.UnitType_Vehicle_Heavy) {
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
        return qsTr("Increases the range of Heavy Vehicles by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_hvhc+rng";
    };
    this.getName = function()
    {
        return qsTr("Heavy Vehicles Range+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return 3;
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_HVHC_RNG = new Constructor();
