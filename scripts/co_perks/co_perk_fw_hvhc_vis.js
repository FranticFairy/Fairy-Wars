var Constructor = function()
{

    this.getVisionrangeModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Vehicle_Heavy) {
				return ACTION_HANDLER.getPerkBuffValue("vis");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the vision of Heavy Vehicles by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_hvhc+vis";
    };
    this.getName = function()
    {
        return qsTr("Heavy Vehicles Vision+");
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
var CO_PERK_FW_HVHC_VIS = new Constructor();
