var Constructor = function()
{

    this.getFirerangeModifier = function(co, unit, posX, posY, map)
    {
        if (CO_PERK.isActive(co))
        {
            if(unit.getUnitType() === GameEnums.UnitType_Vehicle_Light) {
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
        return qsTr("Increases the range of Light Vehicles by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_lvhc+rng";
    };
    this.getName = function()
    {
        return qsTr("Light Vehicles Range+");
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
var CO_PERK_FW_LVHC_RNG = new Constructor();
