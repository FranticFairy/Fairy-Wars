var Constructor = function()
{

    this.getFirerangeModifier = function(co, unit, posX, posY, map)
    {
        if (CO_PERK.isActive(co))
        {
            if(unit.getUnitType() === GameEnums.UnitType_Fieldgun) {
                if (unit.getBaseMaxRange() > 1)
                {
                    return ACTION_HANDLER.getPerkBuffValue("rng");
                }
            }
        }
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the range of Field Guns by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_fieldgun+rng";
    };
    this.getName = function()
    {
        return qsTr("Field Guns Range+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("rng");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_FIELDGUN_RNG = new Constructor();
