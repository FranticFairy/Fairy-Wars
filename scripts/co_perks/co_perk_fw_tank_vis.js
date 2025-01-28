var Constructor = function()
{

    this.getVisionrangeModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            var baseUnit = ACTION_HANDLER.getBase(unit.getUnitID());
            if(baseUnit === "FW_LTANK" || baseUnit === "FW_MTANK" || baseUnit === "FW_HTANK" || baseUnit === "FW_SHTANK") {
				return ACTION_HANDLER.getPerkBuffValue("vis");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the vision of Tanks by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_tank+vis";
    };
    this.getName = function()
    {
        return qsTr("Tanks Vision+");
    };
    this.getGroup = function()
    {
        return qsTr("Ground");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("vis");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_TANK_VIS = new Constructor();
