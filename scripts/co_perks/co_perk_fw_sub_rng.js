var Constructor = function()
{

    this.getFirerangeModifier = function(co, unit, posX, posY, map)
    {
        if (CO_PERK.isActive(co))
        {
            var baseUnit = ACTION_HANDLER.getBase(unit.getUnitID());
            if(baseUnit === "FW_SS") {
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
        return qsTr("Increases the range of Submarines by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_sub+rng";
    };
    this.getName = function()
    {
        return qsTr("Submarines Range+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("rng");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_SUB_RNG = new Constructor();
