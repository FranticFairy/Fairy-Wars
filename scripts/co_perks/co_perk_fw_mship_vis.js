var Constructor = function()
{

    this.getVisionrangeModifier = function(co, unit, posX, posY, map)
    {
		if (CO_PERK.isActive(co))
		{
            if(unit.getUnitType() === GameEnums.UnitType_Naval_Medium) {
				return ACTION_HANDLER.getPerkBuffValue("vis");
            }
		}
        return 0;
    };

	// Perk - Intel
    this.getDescription = function()
    {
        return qsTr("Increases the vision of Medium Ships by 1.");
    };
    this.getIcon = function(map)
    {
        return "fw_mship+vis";
    };
    this.getName = function()
    {
        return qsTr("Medium Ships Vision+");
    };
    this.getGroup = function()
    {
        return qsTr("Sea");
    };
    this.getCosts = function()
    {
        return ACTION_HANDLER.getPerkCost("vis");
    };

};

Constructor.prototype = CO_PERK;
var CO_PERK_FW_MSHIP_VIS = new Constructor();
